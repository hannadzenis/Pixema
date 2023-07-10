import React from 'react';
import './App.css';
import { Container } from './components/Container/container';
import { Header } from './components/elements/Header/header';
import { Movies } from './components/Movies/Movies';

function App() {
  return (
    <>
    <Container>
        <Header clickSearch={()=>{console.log('done')}}/>
        <Movies/>
    </Container>
    </>
  );
}

export default App;
