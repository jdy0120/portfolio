"use client";

import React from "react";

import styled from "@emotion/styled";
import Button from "../components/molecules/button/button";
import { useRouter } from "next/navigation";

const NotFountPage = () => {
  const router = useRouter();

  const handleGoToHome = () => {
    router.push("/home");
  };

  return (
    <NotFountPageStyles.Container>
      <NotFountPageStyles.Title>
        NotFountPage
      </NotFountPageStyles.Title>
      <Button onClick={handleGoToHome}>Go to Home</Button>
    </NotFountPageStyles.Container>
  );
};

export default NotFountPage;

const NotFountPageStyles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `,

  Title: styled.h1`
    ${({ theme }) => theme.typography.semibold[24]}
    text-align: center;
  `,
};
