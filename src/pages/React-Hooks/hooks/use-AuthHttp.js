import { useState, useContext } from "react";
import { AuthContext } from "../context/auth-context";

const useAuthHttp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      authCtx.login(data.idToken);
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
