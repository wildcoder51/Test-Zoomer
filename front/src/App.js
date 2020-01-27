import React from 'react';
import './App.css';
import ByAgencyMonthly from './components/ByAgencyMonthly/ByAgencyMonthly';
import ByMonthGlobal from './components/ByMonthGlobal/ByMonthGlobal'

function App() {
  return (
    <div className="App">
      <ByAgencyMonthly />
      <ByMonthGlobal />
    </div>
  );
}

export default App;
