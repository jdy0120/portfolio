import styled from "@emotion/styled";

const AuthorStyles = {
  Container: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  Author: styled.span`
    ${({ theme }) => theme.typography.InfoText};
  `,

  Date: styled.span`
    color: #6b7280;

    ${({ theme }) => theme.typography.MenuText};
  `,
};

export { AuthorStyles };
