import React from "react";
import styled from "styled-components";

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
  display: flex;
  justify-content: space-between;
  height: 90vh;
  align-items: center;
`;

const Introduce = styled.div`
  /* border: 1px solid red; */
  width: 40%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  hr {
    width: 1rem;
    border: 1px solid ${({ theme }) => theme.title};
  }

  p {
    margin: 0 10px 0 10px;
    color: ${({ theme }) => theme.subTitle};
    font-weight: bold;
    letter-spacing: 10px;
  }
`;

const Name = styled.div`
  h1 {
    color: ${({ theme }) => theme.title};
    font-size: 3.5rem;
  }

  span {
    color: ${({ theme }) => theme.buttonText};
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.title};
`;

const MyImage = styled.div`
  border: 1px solid red;
`;

const MyNameIs = () => {
  return (
    <Body>
      <OutContainer>
        <Container>
          <Introduce>
            <Title>
              <div>
                <hr />
              </div>
              <p>{`MY NAME IS`}</p>
            </Title>
            <Name>
              <h1>
                {`Doyeon `}
                <span>{`Cho.`}</span>
              </h1>
            </Name>
            <Description>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `}</Description>
            <p>
              {`youtube `}
              {`tistory `}
              {`깃허브`}
            </p>
          </Introduce>

          <MyImage>
            <h1>{`Image`}</h1>
          </MyImage>
        </Container>
      </OutContainer>
    </Body>
  );
};

export default MyNameIs;
