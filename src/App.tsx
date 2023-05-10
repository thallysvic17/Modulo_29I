import {ThemeProvider} from 'styled-components'
import temaLight from './themes/light';
import temaDark from './themes/dark';
import GlobalStyle, { Container } from './Reset';
//temas do styled components
import { useState } from 'react';
import Sidebar from './Components/SideBar';
import Section1 from './Components/Section1';
import Projetos from './Components/Projetos';



function App() {

  const [DarkThemeUsed, setDarkThemeUsed] =useState(false)

  function trocaTema(){
    setDarkThemeUsed(!DarkThemeUsed)
  }

  return (
    <ThemeProvider theme={DarkThemeUsed? temaDark : temaLight}>
      <GlobalStyle/>
      <Container>
        <Sidebar trocaTema={trocaTema}/>
        <main>
          <Section1 />
          <Projetos />
        </main>
      </Container>

    </ThemeProvider>

  )
}

export default App;


