import styled from "styled-components/macro";

export const LoginPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  height: 300px;
  width: 300px;
  border: 1px solid #d8d8d8;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin: 20px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
export const Description = styled.div`
  border-bottom: 1px solid #2181e2;
  cursor: pointer;
  color: #2181e2;
`;
