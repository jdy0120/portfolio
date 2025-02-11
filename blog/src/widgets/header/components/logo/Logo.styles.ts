import styled from "@emotion/styled";
import Link from "next/link";

const LogoStyles = {
  Container: styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    text-decoration: none;
  `,

  HomePageTitle: styled.span`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.typography.HomePageTitle}
  `,
};

export { LogoStyles };
