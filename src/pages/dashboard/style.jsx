import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;

  .buttonsDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 15vw;
    margin-top: 30px;
  }
  button {
    width: 25%;
    max-width: 200px;
    height: 40px;
    border-radius: 40px;
    border: none;
    background-color: ${(props) => props.theme.button.backgroundColor};
    color: ${(props) => props.theme.button.textColor};
  }
  button:hover {
    filter: brightness(1.5);
  }

  .delBtn {
    width: 100%;
    color: ${(props) => props.theme.title};
    text-align: right;
  }
  .delBtn:hover {
    filter: brightness(1.5);
    text-decoration: underline;
  }

  .dashboardContent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 70vw;
    gap: 3vw;
    padding: 25px 0;
  }

  @media (max-width: 700px) {

    .dashboardContent {
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      width: 95vw;
      height: 50vh;
      overflow-x: auto;
    }
  }
`;
