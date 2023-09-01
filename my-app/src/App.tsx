import './App.css';
import { Container } from './components/Container/container';
import { Header } from './components/elements/Header/header';
import { Movies } from './components/Movies/Movies';

function App() {
  function getSearchValue(searchInputValue: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
    <Container>
        <Header handleSearch={getSearchValue}/>
        <Movies searchInputValue={''}/>
    </Container>
    </>
  );
}

export default App;
