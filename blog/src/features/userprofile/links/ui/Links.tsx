import React from "react";
import { LinkStyles } from "./Link.styles";
import GithubIcon from "/public/assets/icons/github_icon.svg";
import YoutubeIcon from "/public/assets/icons/youtube_icon.svg";
import LinkedinIcon from "/public/assets/icons/linkedin_icon.svg";
import SVGIcon from "@/shared/utils/SVGIcon";

const Links = () => {
  return (
    <LinkStyles>
      <SVGIcon Icon={GithubIcon} color="#000" />
      <SVGIcon Icon={YoutubeIcon} color="#000" />
      <SVGIcon Icon={LinkedinIcon} color="#000" />
    </LinkStyles>
  );
};

export default Links;
