import styled from 'styled-components';
import { GlobalStyles } from './index';
import { Device } from "./styles/breakpoints";
function App() {
  return (
    <Container>
      <GlobalStyles />
      <section className="contentSidebar">
        side bar
      </section>
      <section className="contentMenuBurguer">
        menu
      </section>
      <section className="contentRouter">
        main section
      </section>
    </Container>
  )
}
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;
  color: white;

  .contentSidebar{
    display: none;
    background-color: rgba(65, 5, 10, 0.5);
  }

  .contentMenuBurguer{
    position: absolute;
    background-color: rgba(5, 5, 10, 0.5);
  }

  .contentRouter{
    background-color: rgba(15, 5, 10, 0.5);
  }

  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;  
    }

`

export default App
