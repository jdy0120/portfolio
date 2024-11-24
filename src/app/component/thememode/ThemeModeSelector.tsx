import { motion } from "framer-motion";
import styled from "@emotion/styled";
import CustomIcon from "../../component/common/CustomIcon";
import COLOR from "../../core/colors";
import { useThemeStore } from "@/app/lib/zustand/themeStore";

const MotionBox = styled(motion.div)`
  display: flex;
  flex: initial;
  justify-content: center;
  align-items: center;
`;

interface Props {
  size: number;
}
const ThemeModeSelector = (props: Props) => {
  const { size } = props;
  const { useDark } = useThemeStore();

  const toggleTheme = () => dispatch(setUseDark(!useDark));

  const spring = {
    type: "spring",
    bounceDamping: 0,
    bounceStiffness: 0,
  };

  const RotateVariants = {
    open: { rotateZ: [90, 0], transition: { spring } },
    closed: { rotateZ: [0, 90], transition: { spring } },
  };

  return (
    <MotionBox
      animate={useDark ? "open" : "closed"}
      variants={RotateVariants}
    >
      <CustomIcon
        onClick={() => toggleTheme()}
        style={{
          margin: 0,
          color: useDark
            ? COLOR.BTN_THEME_DARK
            : COLOR.BTN_THEME_LIGTH,
          fontSize: `${size}rem`,
          cursor: "pointer",
        }}
        type={useDark ? "icon-night" : "icon-brightness"}
      />
    </MotionBox>
  );
};

export default ThemeModeSelector;
