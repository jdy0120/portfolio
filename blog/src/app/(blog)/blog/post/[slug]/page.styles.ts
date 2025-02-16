import styled from "@emotion/styled";

const PostPageStyles = {
  Container: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
  `,
};

const PostListWrapper = styled.div`
  width: 100%;
  min-width: 1179px;

  padding: 0 135px;
`;

export { PostPageStyles, PostListWrapper };
