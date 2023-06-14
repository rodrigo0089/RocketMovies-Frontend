import styled from "styled-components";

export const Container = styled.span`
  width: fit-content;
  font-size: 12px;
  padding: 5px 14px;
  border-radius: 5px;
  margin-right: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};

`;