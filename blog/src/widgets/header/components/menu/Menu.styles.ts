import styled from "@emotion/styled";
import { motion } from "motion/react";
import Link from "next/link";

const MenuStyles = {
  Container: styled.div`
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 32px;
  `,

  MenuList: styled(motion.ul)`
    position: relative;

    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
  `,

  MenuItemLink: styled(Link)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
  `,

  MenuItemText: styled.span`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.typography.MenuText}
  `,
};

const BoderBottom = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: transparent;
`;

export { MenuStyles, BoderBottom };
