import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content"
  ;

  > main {
    margin-top: 10px;
    grid-area: content;
    overflow-y: auto;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }
    
  }
  
  .inputs {
      display: flex;
      gap: 40px;
      margin-bottom: 40px;

      input {
        width: 100%;
      }
    }
  
  .tags {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    border-radius: 8px;
    margin-bottom: 40px;

    padding: 16px;
    background-color: ${({ theme }) =>theme.COLORS.BACKGROUND_700};
  }
`;

export const Form = styled.form`
  max-width: 1113px;
  margin: 38px auto;

  > section h2 {
    font-size: 20px;
    padding: 0;
    margin-top: 40px;
  }
  

  > header {
    display: flex;
    gap: 24px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    margin-bottom: 36px;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    button {
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    h1{
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    
  }
    .buttons {
     display: flex;
     gap: 40px;
     
    
     >:nth-child(1) {
      background-color: ${({ theme }) =>theme.COLORS.BACKGROUND_700};
      color: ${({ theme }) =>theme.COLORS.PINK};
     }
    }

`;