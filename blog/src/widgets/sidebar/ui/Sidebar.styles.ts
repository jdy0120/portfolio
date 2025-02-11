import styled from "@emotion/styled";

const SidebarStyles = {
  Container: styled.div`
    width: 270px;

    display: flex;
    flex-direction: column;
    gap: 24px;
  `,

  Content: styled.div`
    background-color: ${({ theme }) => theme.colors.white.default};
    border-radius: 8px;
    padding: 24px;
  `,
};

export { SidebarStyles };
