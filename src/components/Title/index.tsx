import { Title as StyledTitle } from "./styles"

export type Props = {
  children: string
  fontSize?: number
}

const Title = (props: Props) => (
  <StyledTitle fontSize={props.fontSize}>{props.children}</StyledTitle>
)

export default Title
