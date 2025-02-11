import styled from "@emotion/styled";
import Link from "next/link";

const MenuStyles = {
  Container: styled.div`
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 32px;
  `,

  MenuItemLink: styled(Link)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid ${({ theme }) => theme.colors.black};
    }

    text-decoration: none;
  `,

  MenuItemText: styled.span`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.typography.MenuText}
  `,
};

export { MenuStyles };
