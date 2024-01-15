import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 130px;

  border: $ { props => isBack ? '1px solid #fff' : 'none'};
  border-radius: 14px;
  background: ${(props) =>
    props.isBack
      ? "transparent"
      : "var(--templates-5-color-1, rgba(0, 0, 0, 0.8))"};
  cursor: pointer;

  color: #fff;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  transition: transform 0.1s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
    transform: scale(1.1);
  }

  img {
    transform: ${(props) => props.isBack && "rotate(180deg)"};
  }
`;
