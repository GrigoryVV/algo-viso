import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import SortAlgo from './components/SortAlgo/SortAlgo';
// import PathAlgo from './components/PathAlgo/PathAlgo';
import ControlPanelContainer from './components/ControlPanel/ControlPanelContainer';
import { Route, Switch } from 'react-router-dom';



function App(props) {
  return (
    <div className="App">
      <HeaderContainer/>
      <ControlPanelContainer/>
      <Switch>
        <Route path="/sorting">
          <SortAlgo />
        </Route>
        <Route path="/pathfinding">
          <div className='notificationMSG'>
            Under Construction
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;