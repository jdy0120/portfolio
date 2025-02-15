import styled from "@emotion/styled";

const UserStyles = {
  Container: styled.div`
    display: flex;
    align-items: center;
    gap: 24px;

    padding: 24px;

    background-color: ${({ theme }) => theme.colors.white.default};
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

    border-radius: 8px;
  `,

  TitleWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `,
};

export { UserStyles };
