"use client";

import React from "react";
import {
  useForm,
  Controller,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";

import { LoginPageStyles } from "./page.styles";
import LoginInput from "../../../../components/molecules/input/input";
import DefaultButton from "../../../../components/molecules/button/button";
import { useLogin } from "../../../apis/v1/auth/auth.query";
import {
  LoginRequest,
  LoginResponse,
} from "../../../../types/models/v1/auth/auth.types";
import { useRouter } from "next/navigation";
import { useLoginStore } from "../../../../lib/zustand/stores/login.store";

const page = () => {
  const { control, handleSubmit } = useForm<LoginRequest>();
  const router = useRouter();
  const { setState } = useLoginStore();
  const { mutate: login, isPending } = useLogin({
    onSuccess: (data: LoginResponse) => {
      setState({ isLogin: true, accessToken: data.accessToken });
      router.push("/");
    },
  });

  const onSubmit: SubmitHandler<LoginRequest> = (data) => {
    login(data);
  };

  const onError: SubmitErrorHandler<LoginRequest> = (errors) => {
    console.log(errors);
  };

  return (
    <LoginPageStyles.Container
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <LoginPageStyles.TitleContainer>
        <LoginPageStyles.Title>Login</LoginPageStyles.Title>
        <LoginPageStyles.Subtitle>
          Please enter your email and password to login
        </LoginPageStyles.Subtitle>
      </LoginPageStyles.TitleContainer>
      <LoginPageStyles.InputContainer>
        <Controller
          control={control}
          name="userId"
          render={({ field }) => (
            <LoginInput
              placeholder="Email"
              width="384"
              height="40"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <LoginInput
              placeholder="Password"
              type="password"
              width="384"
              height="40"
              {...field}
            />
          )}
        />
      </LoginPageStyles.InputContainer>
      <DefaultButton
        type="primary"
        htmlType="submit"
        width="384"
        height="40"
        loading={isPending}
      >
        Login
      </DefaultButton>
    </LoginPageStyles.Container>
  );
};

export default page;
