import React from "react";
import styled from "styled-components";
import InfoBox from "./InfoBox";
import Location from "public/assets/location.png";
import Phone from "public/assets/phone.png";
import Email from "public/assets/email.png";
import useScrollFadeIn from "../utils/hooks/animation";

const InfoData = [
  {
    icon: Location,
    title: `Address`,
    description: `서울`,
  },
  {
    icon: Phone,
    title: `Phone`,
    description: `+82 10-9489-9904`,
  },
  {
    icon: Email,
    title: `E-Mail`,
    description: `doyeonism.channel@gmail.com`,
  },
];

const Container = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 820px) {
    width: 95%;
    align-items: start;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 820px) {
    width: 100%;
    align-items: start;
  }
`;

const Address = () => {
  const fadeInUp = useScrollFadeIn("up", 1, 0);
  return (
    <Container {...fadeInUp}>
      <BoxContainer>
        {InfoData.map((data) => {
          return (
            <InfoBox
              key={data.title}
              icon={data.icon}
              title={data.title}
              description={data.description}
            />
          );
        })}
      </BoxContainer>
    </Container>
  );
};

export default Address;
