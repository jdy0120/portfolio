import styled from "@emotion/styled";

const PostContentStyles = {
  Container: styled.div`
    width: 100%;

    background-color: ${({ theme }) => theme.colors.white.default};
    border-radius: 8px;
  `,
};

export { PostContentStyles };
