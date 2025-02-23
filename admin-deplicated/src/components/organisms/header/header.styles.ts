import styled from "@emotion/styled";

export const HeaderStyles = {
  Container: styled.div`
    width: 100%;

    padding: 20px 28px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black[10]};
    justify-content: space-between;
  `,

  Breadcrumb: styled.p`
    ${({ theme }) => theme.typography.regular[14]}
  `,
};
