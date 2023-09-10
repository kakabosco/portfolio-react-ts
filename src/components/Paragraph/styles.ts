import styled from "styled-components"
import { Props } from "."

export const P = styled.p<Props>`
  font-size: ${(props) => props.fontSize || 14}px;
  color: ${(props) =>
    props.type === "main" ? props.theme.mainColor : props.theme.secondaryColor};
  line-height: 22px;
`
