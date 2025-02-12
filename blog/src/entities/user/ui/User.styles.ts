import styled from "@emotion/styled";

const UserStyles = {
  Container: styled.div`
    display: flex;
    align-items: center;
    gap: 24px;

    padding: 24px;

    background-color: ${({ theme }) => theme.colors.white.default};
    border-radius: 8px;
  `,

  TitleWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `,
};

export { UserStyles };
