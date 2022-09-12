import React from "react";
import * as S from "./styles";

const MyButton = (props) => {
  const { children, clickButton, ...other } = props;

  return (
    <S.MyButton
      onClick={clickButton && ((event) => clickButton(event))}
      {...other}
    >
      {children}
    </S.MyButton>
  );
};

export default MyButton;
