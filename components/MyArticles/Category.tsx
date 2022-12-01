import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 25%;
  height: auto;
  display: flex;
  flex-direction: column;
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
  return (
    <Container>
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
