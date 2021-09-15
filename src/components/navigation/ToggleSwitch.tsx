import React from "react";
import { ThemeColor } from "../../types/type";
import moon from "../../_assets/moon.png";
import styled from "styled-components";
import sun from "../../_assets/sun.png";
import { useAppContext } from "../../_providers/AppProviders";

const InputWrapper = styled.label`
  position: relative;
`;

const Input = styled.input`
  position: absolute;
  left: -9999px;
  top: -9999px;
  background-color: #bfbfbf;

  &: checked + span {
    &:before {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
`;
const Img = styled.img`
  height: 70%;
`;

const Slider = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 25px;
  border-radius: 100px;
  background-color: #bfbfbf;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
  }

  &:active:before {
    width: 28px;
  }
`;

interface Props {
  theme: ThemeColor | undefined;
}

const ToggleSwitch = ({ theme }: Props) => {
  const {
    state: { themeColor },
    setTheme,
  } = useAppContext();

  const changeTheme = () => {
    const color = themeColor === "Black" ? "White" : "Black";
    setTheme(color);
  };

  React.useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <InputWrapper>
      <Input type="checkbox" onChange={changeTheme} />
      <Slider>
        <Img src={moon} alt="" />
        <Img src={sun} alt="" />
      </Slider>
    </InputWrapper>
  );
};

export default ToggleSwitch;
