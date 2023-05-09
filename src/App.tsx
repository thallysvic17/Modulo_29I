import Sidebar from './Components/SideBar';
import Section1 from './Components/Section1';
import GlobalStyle, { Container } from './styles';
import Projetos from './Components/Projetos';


function App() {
  return (
    <>
      <GlobalStyle/>
      <Container>
        <Sidebar/>
        <main>
          <Section1 />
          <Projetos />
        </main>
      </Container>

    </>

  )
}

export default App;


