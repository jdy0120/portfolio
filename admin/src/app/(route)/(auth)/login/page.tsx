"use client";

import React from "react";

import { LoginPageStyles } from "./page.styles";
import LoginInput from "../../../../components/molecules/input/input";
import DefaultButton from "../../../../components/molecules/button/button";

const page = () => {
  return (
    <LoginPageStyles.Container>
      <LoginPageStyles.TitleContainer>
        <LoginPageStyles.Title>Login</LoginPageStyles.Title>
        <LoginPageStyles.Subtitle>
          Please enter your email and password to login
        </LoginPageStyles.Subtitle>
      </LoginPageStyles.TitleContainer>
      <LoginPageStyles.InputContainer>
        <LoginInput placeholder="Email" width="384" height="40" />
        <LoginInput
          placeholder="Password"
          type="password"
          width="384"
          height="40"
        />
      </LoginPageStyles.InputContainer>
      <DefaultButton type="primary" width="384" height="40">
        Login
      </DefaultButton>
    </LoginPageStyles.Container>
  );
};

export default page;
