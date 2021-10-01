import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

const MainPage = () => {
  return <HomePage />;
};

export default MainPage;

// import React, { useContext } from "react";

// import Ingredients from "./components/Ingredients/Ingredients";
// import Auth from "./components/Auth";
// import { AuthContext } from "./context/auth-context";

// const MainPage = (props) => {
//   const authContext = useContext(AuthContext);

//   let content = <Auth />;
//   if (authContext.isAuth) {
//     content = <Ingredients />;
//   }

//   return content;
// };

// export default MainPage;
