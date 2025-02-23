import styled from "@emotion/styled";

const HeaderStyles = {
  Container: styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background.bg5};

    padding: 16px 20px;

    border-radius: 16px;

    display: flex;
    flex-direction: column;
  `,

  Label: styled.label`
    ${({ theme }) => theme.typography.regular[12]}
    color: ${({ theme }) => theme.colors.black[40]};
  `,

  Divider: styled.div`
    width: 100%;

    display: flex;
    gap: 16px;
  `,

  CategoryContainer: styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  `,

  NewCategoryContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 16px;
  `,
};

export { HeaderStyles };
