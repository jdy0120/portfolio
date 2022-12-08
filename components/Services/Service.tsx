import React from "react";
import ServiceBox from "./ServiceBox";
import styled from "styled-components";
import optimazation from "public/assets/optimization.png";
import clean from "public/assets/broom.png";
import web from "public/assets/world-wide-web.png";
import useScrollFadeIn from "../utils/hooks/animation";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 13rem;
  @media (max-width: 853px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
  a {
    text-decoration: none;
    color: #1e1e1e;
  }
`;

const serviceList = [
  {
    icon: optimazation,
    title: `최적화에 대한 진심`,
    description: `최적화를 위해 다음 3가지를 원칙으로 개발을 진행합니다. \n1. PageSpeed Insight를 기반으로 최적화를 진행한다. \n2. 번들사이즈 최소화를 위해 만들 수 있는 모듈은 직접 만든다. \n3. 사이즈가 큰 이미지는 압축한다.`,
    // url: "",
  },
  {
    icon: clean,
    title: `클린코드를 기반한 개발 스타일`,
    description: `대부분 개발자들은 사람마다 개발하는 스타일이 다르며 디테일한 코드는 다를 수 밖에 없습니다. 하지만 협업이라는 개발의 특성상 코드의 구조적 부분은 모두 동일해야한다고 생각합니다. \n저는 다음 클린코드에 맞춰 개발합니다.\n[카드를 클릭하면 이동합니다.]`,
    url: "https://github.com/labs42io/clean-code-typescript",
  },
  {
    icon: web,
    title: `커뮤니케이션 중시`,
    description: `개발 협업에 있어 커뮤니케이션은 가장 중요한 스킬이라고 생각합니다. 대부분 규모가 있는 플랫폼은 팀 단위로 만들어지기 때문이죠.\n저는 커뮤니케이션 능력을 높이기 위해 블로그와 유튜브를 운영하며 아는 것과 모르는 것을 확실히합니다.`,
    // url: "",
  },
];

const Service = () => {
  const fadeinUp = useScrollFadeIn("up", 1, 0);
  return (
    <Container {...fadeinUp}>
      {serviceList.map((data) => {
        return (
          <ServiceBox
            key={data.title}
            icon={data.icon}
            title={data.title}
            description={data.description}
            url={data.url ? data.url : undefined}
          />
        );
      })}
    </Container>
  );
};

export default Service;
