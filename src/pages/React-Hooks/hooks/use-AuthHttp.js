import { useState, useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { useHistory } from "react-router-dom";

const useAuthHttp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const clear = () => {
    setError(null);
  };

  const fetchHandler = async (url, method, body, headers) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: method ? method : "GET",
        headers: headers ? headers : {},
        body: body ? JSON.stringify(body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      const expirationTime = new Date(
        new Date().getTime() + +data.expiresIn * 1000
      );
      authCtx.login(data.idToken, expirationTime.toISOString());
      history.replace("/homepage");
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    fetchHandler,
    clear,
  };
};

export default useAuthHttp;
