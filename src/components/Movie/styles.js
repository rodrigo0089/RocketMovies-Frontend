import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK_200};
  
  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;
  

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

    > p {
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    
    margin: 15px 0;
    max-height: 53px;
    
    line-height: 19px;
    
    overflow: hidden;
    text-overflow: ellipsis;
    
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

    > footer {
      width: 100%;
      display: flex;
      margin-top: 24px;
    }
  
`;