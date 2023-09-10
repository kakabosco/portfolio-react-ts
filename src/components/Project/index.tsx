import Title from "../Title"
import Paragraph from "../Paragraph"

import { Card, LinkButton } from "./styles"

const Project = () => {
  return (
    <Card>
      <Title>Projeto Lista de tarefas</Title>
      <Paragraph type="secondary">Projeto em React</Paragraph>
      <LinkButton>Visualizar</LinkButton>
    </Card>
  )
}

export default Project
