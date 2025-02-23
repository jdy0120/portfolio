import styled from "@emotion/styled";

const SidebarStyles = {
  Container: styled.div`
    min-width: 212px;
    height: 100%;

    border-right: 1px solid ${({ theme }) => theme.colors.black[10]};

    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 16px;
  `,
  Menu: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
};

const PorfileStyles = {
  Profile: styled.div`
    width: 100%;

    padding: 8px;
  `,
  Wrapper: styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    gap: 8px;

    img {
      border-radius: 80px;
    }
  `,

  Name: styled.h1`
    ${({ theme }) => theme.typography.regular[14]}
  `,
};

export { SidebarStyles, PorfileStyles };
