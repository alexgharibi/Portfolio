import HomePage from "../pages/React-Hooks/pages/HomePage";
import AuthPage from "../pages/React-Hooks/pages/AuthPage";
import ReactHooks from "../pages/React-Hooks/ReactHooks";
import UserProfile from "../pages/React-Hooks/components/Profile/UserProfile";
import Layout from "../pages/React-Hooks/components/Layout/Layout";
import AuthContextProvider from "../pages/React-Hooks/context/auth-context";
import { Route } from "react-router-dom";

export const Auth = (
  <AuthContextProvider>
    <Layout>
      <Route path="/ingrediants" exact component={ReactHooks} />
      <Route path="/homepage" component={HomePage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/profile" component={UserProfile} />
    </Layout>
  </AuthContextProvider>
);
