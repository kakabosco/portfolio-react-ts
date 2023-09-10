import Avatar from "../../components/Avatar"
import Paragraph from "../../components/Paragraph"

import { Name, Description, ButtonTheme, SidebarContainer } from "./styles"

type Props = {
  toggleTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Name fontSize={20}>Kaique Bosco</Name>
      <Paragraph type="secondary" fontSize={16}>
        @kakabosco
      </Paragraph>
      <Description type="main" fontSize={12}>
        Front-End Engineer
      </Description>
      <ButtonTheme onClick={props.toggleTheme}>Trocar tema</ButtonTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar
