import styled from "@emotion/styled";

const InfoStyles = styled.span`
  ${({ theme }) => theme.typography.InfoText}
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export { InfoStyles };
