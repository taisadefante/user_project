import styled from "styled-components";
import Background from "../../assets/background.svg";

export const Container = styled.div`
  min-height: 100vh;
  background: url("${Background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  width: 342px;
  height: 58px;

  border: none;
  outline: none;

  p {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
