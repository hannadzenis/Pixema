import './App.css';
import { Container } from './components/Container/container';
import { RenderMovies } from './components/Movies/RenderMovies';
import { Header } from './components/elements/Header';
// import { Movies } from './components/Movies/Movies';
import { Navigation } from './components/elements/Navigation';

function App() {
  function getSearchValue(searchInputValue: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
    <Container>
        {/* <Navigation/> */}
        <Header></Header>
        <RenderMovies></RenderMovies>
    </Container>
    </>
  );
}

export default App;
