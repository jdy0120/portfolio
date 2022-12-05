import React from "react";
import Image from "next/image";
import styled, { css } from "styled-components";

interface ContainerProps {
  option: string;
}

const Container = styled.div<ContainerProps>`
  margin: auto;
  img {
    width: 40rem;
    height: auto;
  }

  div {
    ${({ option }) => {
      if (option === "left") {
        return css`
          transform: translateX(-110%) scale(0.8);
          transition: 500ms;
          opacity: 0.3;
        `;
      }

      if (option === "right") {
        return css`
          transform: translateX(110%) scale(0.8);
          transition: 500ms;
          opacity: 0.3;
        `;
      }

      if (option === "mid") {
        return css`
          opacity: 1;
          transform: scale(1.1);
          z-index: 99;
        `;
      }
    }}
  }
`;

type Item = {
  projectName: string;
  image: StaticImageData;
};

interface Props {
  item: Item;
  option: string;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const CardBox = ({ item, option, index, setIndex }: Props) => {
  const changeCard = () => {
    if (option === "left") {
      setIndex(index + 1);
    } else if (option === "right") {
      setIndex(index - 1);
    }
  };

  return (
    <Container option={option} onClick={changeCard}>
      <div>
        <Image src={item.image} alt="" />
      </div>
    </Container>
  );
};

export default CardBox;
