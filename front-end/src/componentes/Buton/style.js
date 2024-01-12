import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 110px;
  background: ${(props) => (props.isBack ? "transparent" : "black")};
  border-radius: 14px;
  border: ${(props) => (props.isBack ? "1px solid #ffffff" : "none")};

  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
