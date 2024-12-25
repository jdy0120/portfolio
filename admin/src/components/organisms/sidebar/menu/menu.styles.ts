import styled from "@emotion/styled";

export const MenuItemStyles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,

  Title: styled.p`
    ${({ theme }) => theme.typography.regular[14]}
  `,
};
