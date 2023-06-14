import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;

  }
`;

export const Content = styled.div`
  max-width: 1113px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }

  > h1 {
      font-size: 36px;
      font-weight: 500;
      padding: 24px 0;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }

  > a {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.PINK};

    list-style: none;

    display: flex;
    align-items: center;
    gap: 8px;

    margin-top: 12px;
  }

  .tags{
    display: flex;
    gap: 8px;
    margin-bottom: 40px;
  }


`;