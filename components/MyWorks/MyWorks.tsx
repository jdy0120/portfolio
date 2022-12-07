import React, { useState } from "react";
import styled from "styled-components";
import Titles from "./Tittles";
import Slider from "./Slider";
import img1 from "public/assets/project1.png";
import img2 from "public/assets/project2.png";
import img3 from "public/assets/project3.png";
import img4 from "public/assets/project4.png";
import Image from "next/image";

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const OutContainer = styled.div`
  width: 100%;
  max-width: 2000px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

interface InnerContainerProps {
  img: string;
}

const InnerContainer = styled.div<InnerContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .contentImage {
    width: 70%;
    content: url(${({ img }) => img});
    transition: all 1s ease;
    border: 5px solid #f1f1f1;
    height: auto;
    @media (max-width: 1100px) {
      width: 100%;
    }
  }
`;

const content = [
  {
    image: img1,
    imageurl: "/assets/project1.png",
    title: `image1`,
    description: `description`,
    date: `2022.11`,
  },
  {
    image: img2,
    imageurl: "/assets/project2.png",
    title: `image1`,
    description: `description`,
    date: `2022.11`,
  },
  {
    image: img3,
    imageurl: "/assets/project3.png",
    title: `image1`,
    description: `description`,
    date: `2022.11`,
  },
  {
    image: img4,
    imageurl: "/assets/project4.png",
    title: `image1`,
    description: `description`,
    date: `2022.11`,
  },
];

const MyWorks = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  console.log(content[index].image);
  return (
    <Body>
      <OutContainer>
        <Container>
          <Titles />
          <InnerContainer img={content[index].imageurl}>
            <Image
              className="contentImage"
              src={content[index].image}
              alt={"none"}
            />
            <Slider content={content} index={index} setIndex={setIndex} />
          </InnerContainer>
        </Container>
      </OutContainer>
    </Body>
  );
};

export default MyWorks;
