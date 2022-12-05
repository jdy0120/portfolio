import React from "react";
import ServiceBox from "./ServiceBox";
import styled from "styled-components";
import optimazation from "public/assets/optimization.png";
import clean from "public/assets/broom.png";
import web from "public/assets/world-wide-web.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 13rem;
  @media (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
`;

const serviceList = [
  {
    icon: optimazation,
    title: `최적화에 대한 진심`,
    description: ``,
  },
  {
    icon: clean,
    title: `클린코드의 정석`,
    description: ``,
  },
  {
    icon: web,
    title: `웹개발 전문`,
    description: ``,
  },
];

const Service = () => {
  return (
    <Container>
      {serviceList.map((data) => {
        return (
          <ServiceBox
            key={data.title}
            icon={data.icon}
            title={data.title}
            description={data.description}
          />
        );
      })}
    </Container>
  );
};

export default Service;
