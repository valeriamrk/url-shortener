import React from "react";
import * as S from "./styles";
import InputField from "../../atoms/inputField/InputField";
import MyButton from "../../atoms/myButton/MyButton";
import { MdClear } from "react-icons/md";

const InputGroup = (props) => {
  const { clickButton, inputValue, setInputValue, clearInput, ...other } =
    props;

  return (
    <S.InputGroup>
      <InputField
        placeholder="Shorten your link"
        inputValue={inputValue}
        setInputValue={setInputValue}
        {...other}
      />
      <div>
        {inputValue.length !== 0 && (
          <S.CloseIcon onClick={() => clearInput()}>
            <MdClear />
          </S.CloseIcon>
        )}
      </div>
      <MyButton clickButton={() => clickButton(inputValue)}>Shorten</MyButton>
    </S.InputGroup>
  );
};

export default InputGroup;
