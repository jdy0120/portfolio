import React from "react";
import styled from "styled-components";
import ImageBox from "./ImageBox";

const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #f1f1f1;
  border-radius: 10px;

  @media (max-width: 1100px) {
    width: 70%;
    .left {
      display: none;
    }
    .right {
      display: none;
    }
  }

  .left {
    scale: 0.8;
    transition: all 0.8 ease-out;
  }
  .mid {
    scale: 1.2;
    transition: all 0.8 ease-out;
  }
  .right {
    scale: 0.8;
    transition: all 0.8 ease-out;
  }
`;

const changeIndex = (n: number, m: number) => {
  if (n < 0) {
    return m - 1;
  }
  if (n >= m) {
    return 0;
  }
  return n;
};

const ChangeButton = styled.button`
  position: absolute;
  top: 40%;
  border: none;
  background-color: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.buttonText};
  padding: 20px;
  border-radius: 30%;
  &:hover {
    background-color: ${({ theme }) => theme.buttonText};
    color: ${({ theme }) => theme.buttonColor};
  }
`;

const ChangeButtonLeft = styled(ChangeButton)`
  left: 0;
`;

const ChangeButtonRight = styled(ChangeButton)`
  right: 0;
`;

interface Props {
  content: {
    image: StaticImageData;
    imageurl: string;
    title: string;
    description: string;
    date: string;
  }[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Slider = ({ content, index, setIndex }: Props) => {
  const left = changeIndex(index - 1, content.length);
  const right = changeIndex(index + 1, content.length);

  // useEffect(() => {}, [index]);

  return (
    <Container>
      {[content[left], content[index], content[right]].map((data, idx) => {
        return <ImageBox key={idx} content={data} index={idx} />;
      })}

      <ChangeButtonLeft
        onClick={() => {
          setIndex(left);
        }}
      >{`<`}</ChangeButtonLeft>
      <ChangeButtonRight
        onClick={() => {
          setIndex(right);
        }}
      >{`>`}</ChangeButtonRight>
    </Container>
  );
};

export default Slider;
