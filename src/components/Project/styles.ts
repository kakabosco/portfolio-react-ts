import styled from "styled-components"

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
  border-radius: 10px;
`
export const LinkButton = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.bgColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.buttonBgColor};
  text-decoration: none;
  padding: 8px;
  margin-top: 18px;
  border-radius: 10px;
`
