import React from "react";
import ServiceBox from "./ServiceBox";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 13rem;
`;

const Service = () => {
  return (
    <Container>
      <ServiceBox
        icon={`icon`}
        title={`UI/UX Design`}
        description={`turn what you have in mind of a digital product into reality`}
      />
      <ServiceBox
        icon={`icon`}
        title={`UI/UX Design`}
        description={`turn what you have in mind of a digital product into reality`}
      />
      <ServiceBox
        icon={`icon`}
        title={`UI/UX Design`}
        description={`turn what you have in mind of a digital product into reality`}
      />
    </Container>
  );
};

export default Service;
