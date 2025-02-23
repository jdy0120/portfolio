import styled from "@emotion/styled";

export const AuthLayoutStyles = {
  Container: styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.primary.bg};
  `,
};
