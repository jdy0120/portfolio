import styled from "@emotion/styled";

const ContentStyles = {
  Container: styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background.bg5};

    padding: 16px 20px;

    border-radius: 16px;

    display: flex;
    flex-direction: column;
  `,

  Label: styled.label`
    ${({ theme }) => theme.typography.regular[12]}
    color: ${({ theme }) => theme.colors.black[40]};
  `,
};

export { ContentStyles };
