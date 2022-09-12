import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { squeezeAsync, statisticsAsync } from "../../../store/linksSlice";
import { logout } from "../../../store/authSlice";
import * as S from "./styles";
import InputGroup from "../../molecules/searchBar/InputGroup";
import MyButton from "../../atoms/myButton/MyButton";
import MyTable from "../../organisms/table/MyTable";

const MainPage = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const isLoading = useSelector((state) => state.linksData.isLoading);
  const longLink = useSelector((state) => state.linksData.longLink);
  const statsData = useSelector((state) => state.linksData.stats);

  useEffect(() => {
    dispatch(statisticsAsync());
  }, [longLink]);

  const handleSqueeze = (inputValue) => {
    dispatch(squeezeAsync(inputValue));
    setInputValue("");
  };

  const handleStats = (order) => {
    dispatch(statisticsAsync(order));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <S.PageWrapper>
      <S.ButtonWrapper>
        <MyButton clickButton={() => handleLogout()}>Logout</MyButton>
      </S.ButtonWrapper>
      <S.InputWrapper>
        <InputGroup
          inputValue={inputValue}
          setInputValue={setInputValue}
          clearInput={clearInput}
          clickButton={handleSqueeze}
        />
      </S.InputWrapper>
      <S.TableWrapper>
        <MyTable
          tableData={statsData}
          sortOrder={handleStats}
          isLoading={isLoading}
        />
      </S.TableWrapper>
    </S.PageWrapper>
  );
};

export default MainPage;
