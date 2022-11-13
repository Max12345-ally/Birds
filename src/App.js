import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import ShowBirds from './components/Show';

function App() {
  return (
    <div className="App">
      <div></div>
      <main>
        <h1 Birds className="Header">Audubon Society</h1>
          <h3 className="Block">Birds</h3>
            <div className="Item">
            <Routes>
                <Route  path='/' element={ <HomePage/> }/>
                <Route path='/Show/:name' element={ <ShowBirds/> }/>
            </Routes>
            </div>
      </main>
    </div>
  );
}

export default App;