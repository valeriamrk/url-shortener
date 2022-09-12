import "./App.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SignIn from "./components/pages/authPage/SignIn";
import MainPage from "./components/pages/mainPage/MainPage";

function App() {
  const isAuthenticated = useSelector((state) => state.authData.isAuth);
  const userToken = useSelector((state) => state.authData.userToken);
  const [isAuth, setIsAuth] = useState(isAuthenticated);

  useEffect(() => {
    if (userToken) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [userToken, isAuthenticated]);
  return <div className="App">{isAuth ? <MainPage /> : <SignIn />}</div>;
}

export default App;
