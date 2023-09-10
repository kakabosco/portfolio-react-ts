import { useState } from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle, { Container } from "./styles"
import Sidebar from "./containers/Sidebar"
import About from "./containers/About"
import Projects from "./containers/Projects"
import lightTheme from "./themes/light"
import darkTheme from "./themes/dark"

function App() {
  const [themeIsDark, setThemeIsDark] = useState(false)
  const toggleTheme = () => {
    setThemeIsDark(!themeIsDark)
  }

  return (
    <ThemeProvider theme={themeIsDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar toggleTheme={toggleTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
