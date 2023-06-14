import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  
  margin-bottom: 8px;
  border-radius: 10px;
  
  > input {
    height: 56px;
    width: auto;
    
    padding: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
  
  > svg {
    margin-left: 16px;
  }
`;