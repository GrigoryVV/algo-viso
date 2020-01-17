import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main'
import ControlPanel from './components/ControlPanel/ControlPanel';



function App(props) {
  return (
    <div className="App">
      <Header/>
      <ControlPanel store={props.store}/>
      <Main/>
    </div>
  );
}

export default App;