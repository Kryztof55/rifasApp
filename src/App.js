import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './components/moleculas/navMenu'
import ContainerProductList from './containers/productosList'

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar  />
      <ContainerProductList />
    </div>
  );
}

export default App;
