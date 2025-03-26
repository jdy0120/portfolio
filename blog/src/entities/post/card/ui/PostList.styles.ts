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

  PostList: styled.div<{ postCountInRow: number }>`
    display: grid;
    grid-template-columns: repeat(${({ postCountInRow }) => postCountInRow}, 250px);
    justify-content: space-between;
  `,
};

export { PostListStyles };
