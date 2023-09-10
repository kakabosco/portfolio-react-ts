import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    list-style: none;
  }

  body {
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: ${(props) => props.theme.bgColor};

    @media (max-width: 600px) {
      padding-top: 16px;
      padding-bottom: 32px;
    }
  }
`

export default GlobalStyle

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 160px auto;
  column-gap: 56px;

  @media (max-width: 600px) {
    max-width: 80%;
    display: block;
  }
`
