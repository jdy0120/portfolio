import styled from "@emotion/styled";

const SidebarStyles = {
  Container: styled.div`
    width: 270px;

    display: flex;
    flex-direction: column;

    background-color: ${({ theme }) => theme.colors.white.default};
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

    border-radius: 8px;

    gap: 24px;
  `,

  Content: styled.div`
    padding: 24px;
  `,
};

export { SidebarStyles };
