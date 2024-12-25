import styled from "@emotion/styled";

export const LoginPageStyles = {
  Container: styled.form`
    padding: 104px 148px;

    border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 28px;

    background-color: ${({ theme }) => theme.colors.white.default};
  `,

  TitleContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,

  Title: styled.h1`
    ${({ theme }) => theme.typography.semibold}
  `,

  Subtitle: styled.h2`
    ${({ theme }) => theme.typography.regular}
  `,

  InputContainer: styled.div`
    width: 384px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
};
