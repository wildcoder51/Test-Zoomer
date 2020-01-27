import React from 'react';
import './App.css';
import ByAgencyMonthly from './components/ByAgencyMonthly/ByAgencyMonthly';
import ByMonthGlobal from './components/ByMonthGlobal/ByMonthGlobal';
import ByAgency from './components/ByAgency/ByAgency'

function App() {
  return (
    <div className="App">
      <ByAgencyMonthly />
      <ByMonthGlobal />
      <ByAgency />
    </div>
  );
}

export default App;
