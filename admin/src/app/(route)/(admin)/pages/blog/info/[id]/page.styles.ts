import styled from "@emotion/styled";

const CreateBlogPageStyles = {
  Container: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 28px;
  `,

  DescriptionContainer: styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background.bg2};

    padding: 24px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    border-radius: 16px;
  `,

  Title: styled.h1`
    ${({ theme }) => theme.typography.semibold[14]}
    color: ${({ theme }) => theme.colors.black[100]};
  `,

  Divider: styled.div`
    width: 100%;

    display: flex;
    gap: 16px;
  `,

  ContentContainer: styled.div`
    width: 100%;

    padding: 24px;

    background-color: ${({ theme }) => theme.colors.background.bg2};

    border-radius: 16px;
  `,
};

export { CreateBlogPageStyles };
