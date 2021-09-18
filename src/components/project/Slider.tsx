import React, { useState } from "react";

import styled from "styled-components";

const SliderContainer = styled.article`
  width: 300px;
  height: 500px;
  background-color: white;
  border-radius: 5px;
`;

const Prev = styled.button`
  relative: absolute;
`;

const Next = styled.button`
  relative: absolute;
`;

const Slider = () => {
  const [projectIndex, setProjectIndex] = React.useState(0);

  const clickPrev = () => {
    setProjectIndex(projectIndex - 1);
  };

  const clickNext = () => {
    setProjectIndex(projectIndex + 1);
  };

  React.useEffect(() => {
    console.log(projectIndex);
  }, [projectIndex]);

  return (
    <SliderContainer>
      <Prev onClick={clickPrev} />
      <Next onClick={clickNext} />
    </SliderContainer>
  );
};

export default Slider;
