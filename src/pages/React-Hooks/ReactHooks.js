import AuthContextProvider from "./context/auth-context";
import MainPage from "./MainPage";

const ReactHooks = () => {
  return (
    <AuthContextProvider>
      <MainPage />
    </AuthContextProvider>
  );
};

export default ReactHooks;
