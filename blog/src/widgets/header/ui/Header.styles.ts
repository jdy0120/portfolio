import styled from "@emotion/styled";

const HeaderStyles = {
  Container: styled.div`
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;

    background-color: ${({ theme }) => theme.colors.white.default};
  `,

  LeftWrapper: styled.div`
    display: flex;
    height: 100%;

    gap: 24px;
  `,
  RightWrapper: styled.div``,
};

export { HeaderStyles };
