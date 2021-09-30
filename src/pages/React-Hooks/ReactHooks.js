import Ingredients from "./components/Ingredients/Ingredients";
import AuthContextProvider from "./context/auth-context";
import Auth from "./components/Auth";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context";

const ReactHooks = () => {
  const authContext = useContext(AuthContext);

  let content = <Auth />;
  if (authContext.isAuth) {
    content = <Ingredients />;
  }

  return (
    <AuthContextProvider>
      <div>{content}</div>
    </AuthContextProvider>
  );
};

export default ReactHooks;
