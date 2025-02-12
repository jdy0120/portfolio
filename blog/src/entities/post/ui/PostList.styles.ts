import styled from "@emotion/styled";

const PostListStyles = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,

  Title: styled.h2`
    ${({ theme }) => theme.typography.NameText}
  `,

  PostList: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  `,
};

export { PostListStyles };
