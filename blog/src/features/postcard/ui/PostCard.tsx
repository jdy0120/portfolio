import React from "react";
import { PostCardStyles } from "./PostCard.styles";
import SVGIcon from "@/shared/utils/SVGIcon";
import CalendarIcon from "/public/assets/icons/calendar_icon.svg";
import PageMotion from "@/shared/animations/page/page.motion";

const PostCard = () => {
  return (
    <PageMotion>
      <PostCardStyles.Container>
        <PostCardStyles.ImageWrapper>
          <PostCardStyles.Image
            src="/assets/images/doyeonism_square.jpg"
            alt="postcard"
            width={250}
            height={192}
            layout="responsive"
          />
        </PostCardStyles.ImageWrapper>

        <PostCardStyles.Content>
          <PostCardStyles.ContentWrapper>
            <PostCardStyles.Title>PostCard</PostCardStyles.Title>
            <PostCardStyles.Description>
              PostCard Description
            </PostCardStyles.Description>
          </PostCardStyles.ContentWrapper>
          <PostCardStyles.DateWrapper>
            <SVGIcon Icon={CalendarIcon} />
            <PostCardStyles.Date>2024-01-01</PostCardStyles.Date>
          </PostCardStyles.DateWrapper>
        </PostCardStyles.Content>
      </PostCardStyles.Container>
    </PageMotion>
  );
};

export default PostCard;
