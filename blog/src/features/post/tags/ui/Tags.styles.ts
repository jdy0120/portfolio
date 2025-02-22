import styled from "@emotion/styled";

const TagsStyles = {
  Container: styled.div`
    width: 100%;

    display: flex;
    gap: 8px;
  `,

  Tag: styled.span`
    padding: 2px 10px;
    border-radius: 12px;
    background-color: #f0f6ff;

    font-family: "Pretendard";
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;

    color: ${({ theme }) => theme.colors.primary.text};
  `,
};

export { TagsStyles };
