import styled from "styled-components"
import { P } from "../../components/Paragraph/styles"
import { Title } from "../../components/Title/styles"

export const Name = styled(Title)`
  margin-bottom: 6px;
`

export const Description = styled(P)`
  margin-top: 10px;
  margin-bottom: 18px;
`

export const ButtonTheme = styled.button`
  padding: 8px;
  margin-bottom: 60px;
  color: ${(props) => props.theme.bgColor};
  font-size: 10px;
  font-weight: bold;
  border-radius: 12px;
  border: none;
  background-color: ${(props) => props.theme.mainColor};
  cursor: pointer;

  @media (max-width: 600px) {
    width: 120px;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 600px) {
    text-align: center;
  }
`
