import styled from "styled-components";

const Container = styled.article`
  display: flex;
  align-items: center;
  margin: 10px 0 10px 0;
`;

const Box = styled.div`
  width: 5em;
  height: 5em;
  background: white;
  border-radius: 5px;
  box-shadow: 5px 5px 5px gray;
  justify-content: center;
`;

const Img = styled.img`
  width: 5m;
  height: 5em;
`;

const Name = styled.p`
  margin: 0 0 0 10px;
  padding: 0;
  font-size: 2em;
`;

interface Props {
  SkillName: string;
  icon: string;
}

const SkillStyle = ({ SkillName, icon }: Props) => {
  return (
    <Container>
      <Box>
        <Img src={icon} />
      </Box>
      <Name>{SkillName}</Name>
    </Container>
  );
};

export default SkillStyle;
