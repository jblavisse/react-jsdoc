import React from 'react';
import './App.css';

import Task from './Task';


function App() {
  return (
    <div className="App">
      <Task title="Ma tache numero uno" />
      <Task title="Ma tache numero deuxio" description="lorem ipsum" />
    </div>
  );
}

export default App;
