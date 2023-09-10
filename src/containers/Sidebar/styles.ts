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
  color: #eee;
  font-size: 10px;
  font-weight: bold;
  border-radius: 12px;
  border: none;
  background-color: #282a35;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 120px;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
