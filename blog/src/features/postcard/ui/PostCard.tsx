"use client";

import React from "react";
import { PostCardStyles } from "./PostCard.styles";
import SVGIcon from "@/shared/utils/SVGIcon";
import CalendarIcon from "/public/assets/icons/calendar_icon.svg";
import PageMotion from "@/shared/animations/page/page.motion";
import { useRouter } from "next/navigation";

interface PostCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
}

const PostCard = ({ title, description, date, image, link }: PostCardProps) => {
  const router = useRouter();

  const onHoverStart = {
    y: -5,
  };

  const handleClick = () => {
    router.push(link);
  };

  return (
    <PageMotion onHoverStart={onHoverStart}>
      <PostCardStyles.Container onClick={handleClick}>
        <PostCardStyles.ImageWrapper>
          <PostCardStyles.Image
            src={image}
            alt={title}
            width={250}
            height={192}
            placeholder='blur'
            blurDataURL={"/assets/placeholders/250x192.svg"}
            layout='responsive'
          />
        </PostCardStyles.ImageWrapper>

        <PostCardStyles.Content>
          <PostCardStyles.ContentWrapper>
            <PostCardStyles.Title>{title}</PostCardStyles.Title>
            <PostCardStyles.Description>{description}</PostCardStyles.Description>
          </PostCardStyles.ContentWrapper>
          <PostCardStyles.DateWrapper>
            <SVGIcon Icon={CalendarIcon} width={14} height={14} />
            <PostCardStyles.Date>{date}</PostCardStyles.Date>
          </PostCardStyles.DateWrapper>
        </PostCardStyles.Content>
      </PostCardStyles.Container>
    </PageMotion>
  );
};

export default PostCard;
