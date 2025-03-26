import styled from "@emotion/styled";
import Image from "next/image";

const PostCardStyles = {
  Container: styled.div`
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.white.default};
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;
  `,

  ImageWrapper: styled.div`
    width: 100%;

    position: relative;
  `,

  Image: styled(Image)`
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  `,

  Content: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 24px;
    gap: 16px;
  `,

  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;

    gap: 8px;
  `,

  Tags: styled.div``,

  Title: styled.h3`
    text-align: start;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.typography.HomePageTitle};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,

  Description: styled.p`
    color: ${({ theme }) => theme.colors.gray[700]};
    ${({ theme }) => theme.typography.MenuText}
  `,

  DateWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    gap: 8px;
  `,

  Date: styled.p`
    color: ${({ theme }) => theme.colors.gray[600]};
    ${({ theme }) => theme.typography.MenuText}
  `,
};

export { PostCardStyles };
