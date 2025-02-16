import React from "react";
import { LinkStyles } from "./Link.styles";
import GithubIcon from "/public/assets/icons/github_icon.svg";
import YoutubeIcon from "/public/assets/icons/youtube_icon.svg";
import LinkedinIcon from "/public/assets/icons/linkedin_icon.svg";
import SVGIcon from "@/shared/utils/SVGIcon";
import { theme } from "@/shared/theme";

const LinkAnimationVariants = {
  hidden: { width: 0, opacity: 0.1 },
  visible: {
    width: "auto",
    opacity: 1,
    transition: { delay: 0.3, duration: 0.3 },
  },
};

const Links = () => {
  const handleClick =
    (url: string) => (e: React.MouseEvent<SVGElement>) => {
      e.stopPropagation();
      window.open(url, "_blank");
    };
  return (
    <LinkStyles
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={LinkAnimationVariants}
    >
      <SVGIcon
        Icon={GithubIcon}
        color={theme.colors.gray[600]}
        width={24}
        height={24}
        style={{ position: "absolute" }}
        onClick={handleClick("https://github.com/jdy0120")}
        isCursorPointer
      />
      <SVGIcon
        Icon={YoutubeIcon}
        color={theme.colors.gray[600]}
        width={24}
        height={24}
        style={{ position: "absolute" }}
        onClick={handleClick("https://www.youtube.com/@doyeonismdev")}
        isCursorPointer
      />
      <SVGIcon
        Icon={LinkedinIcon}
        color={theme.colors.gray[600]}
        width={24}
        height={24}
        style={{ position: "absolute" }}
        onClick={handleClick("https://www.linkedin.com/in/doyeonism")}
        isCursorPointer
      />
    </LinkStyles>
  );
};

export default Links;
