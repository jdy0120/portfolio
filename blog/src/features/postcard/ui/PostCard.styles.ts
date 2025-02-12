import styled from "@emotion/styled";
import Image from "next/image";
import { motion } from "framer-motion";

const PostCardStyles = {
  Container: styled.div`
    width: 100%;
    height: 428px;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.white.default};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  ImageWrapper: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
  `,

  Image: styled(Image)`
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 24px;
    gap: 16px;
  `,

  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 8px;
  `,

  Tags: styled.div``,

  Title: styled.h3`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.typography.HomePageTitle}
  `,

  Description: styled.p`
    color: ${({ theme }) => theme.colors.gray[700]};
    ${({ theme }) => theme.typography.MenuText}
  `,

  DateWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  Date: styled.p`
    color: ${({ theme }) => theme.colors.gray[600]};
    ${({ theme }) => theme.typography.MenuText}
  `,
};

export { PostCardStyles };
