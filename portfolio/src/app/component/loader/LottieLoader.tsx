import styled from "@emotion/styled";
import { Typography } from "antd";

import LoadingLottie from "../../assets/images/lottie/deep-loading.json";
import { useThemeStore } from "@/app/lib/zustand/themeStore";
interface LoadingTextProps {
  darkmode: string;
}

const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: inherit;
  flex-direction: column;
`;

const LoadingText = styled(Typography.Text)<LoadingTextProps>`
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
  color: ${(props) =>
    props.darkmode === "true"
      ? "rgba(255, 255, 255, 0.8)"
      : "rgba(0,0,0,0.7)"};
`;

const lottieOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid meet",
  },
  animationData: LoadingLottie,
};

interface Props {
  text: string;
}
const ChartLoader = (props: Props) => {
  const { text } = props;
  const { useDark } = useThemeStore();

  return (
    <LoadingContainer>
      <LoadingText darkmode={useDark ? "true" : "false"}>
        {text}
      </LoadingText>
    </LoadingContainer>
  );
};

export default ChartLoader;
