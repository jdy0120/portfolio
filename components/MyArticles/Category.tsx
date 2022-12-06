import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../utils/hooks/animation";

const Container = styled.div`
  width: 25%;
  height: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 820px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
`;

interface CategoryBoxProps {
  check: boolean;
}

const CategoryBox = styled.div<CategoryBoxProps>`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.buttonColor};
  margin: 0 0 20px 0;
  transition: all 0.2s;
  color: ${({ check, theme }) => (check ? theme.buttonText : "#232e35")};
  font-weight: ${({ check }) => (check ? `bold` : `normal`)};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 820px) {
    width: 8rem;
    height: 8rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
`;

const allCategory: { [key: string]: string } = {
  "1015841": "Javacript",
  "1015847": "프로젝트",
  "1015842": "React.js",
};

const printCategory = ["1015842", "1015847", "1015841"];

interface Props {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Category = ({ category, setCategory }: Props) => {
  const fadeInUp = useScrollFadeIn("up", 1, 0);

  return (
    <Container {...fadeInUp}>
      {printCategory.map((data) => {
        return (
          <CategoryBox
            check={data === category}
            key={data}
            onClick={() => setCategory(data)}
          >
            <p>{allCategory[data]}</p>
            <h3>{`>`}</h3>
          </CategoryBox>
        );
      })}
    </Container>
  );
};

export default Category;
