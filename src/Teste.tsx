import styled from "styled-components"

type ButtonProps = {
  main?: boolean
  fontSize?: string
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.main ? "green" : "blue")};
  font-size: ${(props) => props.fontSize || "16px"};
`

const ButtonDanger = styled(Button)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Button fontSize="20px" main>
        Clique aqui
      </Button>
      <Button>Clique aqui</Button>
      <ButtonDanger as="a">
        <span>Não Clique</span>
      </ButtonDanger>
    </>
  )
}

export default Teste
