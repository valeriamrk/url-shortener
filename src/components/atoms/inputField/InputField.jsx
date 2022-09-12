import React from "react";
import * as S from "./styles";

const InputField = (props) => {
  const { inputValue, setInputValue, ...other } = props;

  return (
    <S.InputField
      {...other}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default InputField;
