import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as S from "./styles";
import { loginAsync, registerAsync } from "../../../store/authSlice";
import InputField from "../../atoms/inputField/InputField";
import MyButton from "../../atoms/myButton/MyButton";

const SignIn = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (username, password) => {
    dispatch(registerAsync({ username, password }));
  };

  const handleLogin = (username, password) => {
    dispatch(loginAsync({ username, password }));
  };

  const registered = () => {
    setIsRegistered(true);
  };

  return (
    <S.LoginPage>
      {isRegistered ? (
        <S.Wrapper>
          <S.Title>Login</S.Title>
          <InputField
            placeholder="Enter your email"
            type="text"
            inputValue={username}
            setInputValue={setUsername}
          />
          <InputField
            placeholder="Enter your password"
            type="password"
            inputValue={password}
            setInputValue={setPassword}
          />
          <MyButton clickButton={() => handleLogin(username, password)}>
            Login
          </MyButton>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <S.Title>Registration</S.Title>
          <InputField
            placeholder="Enter your email"
            type="text"
            inputValue={username}
            setInputValue={setUsername}
          />
          <InputField
            placeholder="Enter your password"
            type="password"
            inputValue={password}
            setInputValue={setPassword}
          />
          <MyButton clickButton={() => handleRegister(username, password)}>
            Register
          </MyButton>
          <S.Description onClick={registered}>I have an account</S.Description>
        </S.Wrapper>
      )}
      <div>
        You may register or use <br />
        login: cosco, password: cosco
      </div>
    </S.LoginPage>
  );
};

export default SignIn;
