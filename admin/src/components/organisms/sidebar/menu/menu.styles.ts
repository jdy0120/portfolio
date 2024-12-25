import styled from "@emotion/styled";
import { shouldNotForwardPropsWithKeys } from "../../../../lib/emotion/forwardProps";

interface MenuItemProps {
  active?: boolean;
}

export const MenuItemStyles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,

  Title: styled.p`
    ${({ theme }) => theme.typography.regular[14]}
    color: ${({ theme }) => theme.colors.black[40]};
  `,

  MenuItem: styled("div", {
    shouldForwardProp: shouldNotForwardPropsWithKeys(["active"]),
  })<MenuItemProps>`
    width: 100%;
    padding: 10px 8px;
    background-color: ${({ theme, active }) =>
      active ? theme.colors.black[4] : theme.colors.white[100]};
    border-radius: 8px;

    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  `,

  MenuItemTitle: styled.p`
    ${({ theme }) => theme.typography.regular[14]}
    color: ${({ theme }) => theme.colors.black[100]};
  `,
};
