import styled from "styled-components/macro";

// Input field
export const InputField = styled.input`
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 20px;
  padding-left: 8px;
  padding-right: 8px;
  color: black;
  font-size: 16px;
  ::-webkit-input-placeholder {
    font-size: 14px;
    color: #8a939b;
  }
  ::-moz-placeholder {
    font-size: 14px;
    color: #8a939b;
  } /* Firefox 19+ */
  :-moz-placeholder {
    font-size: 14px;
    color: #8a939b;
  } /* Firefox 18- */
  :-ms-input-placeholder {
    font-size: 14px;
    color: #8a939b;
  }
`;
