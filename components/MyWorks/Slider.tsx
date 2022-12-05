import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardBox from "./CardBox";
import img1 from "public/assets/project1.png";
import img2 from "public/assets/project2.png";
import img3 from "public/assets/project3.png";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const card = [
  { projectName: "1", image: img1 },
  { projectName: "1", image: img2 },
  { projectName: "1", image: img3 },
];

const mod = (n: number, m: number) => {
  const result = n % m;
  return result >= 0 ? result : result + m;
};

const focusOption = (
  i: number,
  index: number,
  indexLeft: number,
  indexRight: number
) => {
  if (i === index) {
    return `mid`;
  }

  if (i === indexRight) {
    return `right`;
  }

  if (i === indexLeft) {
    return `left`;
  }

  return `none`;
};

const Slider = () => {
  const [index, setIndex] = useState(0);

  const indexLeft = mod(index - 1, card.length);
  const indexRight = mod(index + 1, card.length);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIndex(index + 1);
  //   }, 1000);
  // }, [index]);

  return (
    <Container>
      <Carousel>
        {card.map((item, idx) => {
          const option = focusOption(idx, index, indexLeft, indexRight);
          return (
            <CardBox
              key={item.projectName}
              item={item}
              option={option}
              index={index}
              setIndex={setIndex}
            />
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Slider;
