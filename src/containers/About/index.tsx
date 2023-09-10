import Title from "../../components/Title"
import Paragraph from "../../components/Paragraph"
import { GithubSection } from "./styles"

const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vero illo
      aliquam provident officia dolore, quod at ea tempore nesciunt! Laborum
      ipsa aut totam, placeat natus eius laboriosam consequatur dicta.
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=kakabosco&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=kakabosco&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
