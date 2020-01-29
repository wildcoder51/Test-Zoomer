import React from 'react';
import './App.css';
import Rendering from './Rendering'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      value : 'ByAgency',
    }
  }

  renderFunction =(event)=>{
    this.setState ({
      value : event.target.value
    })
  }

  render(){
    return (
      <div className="App">
        <select onChange={this.renderFunction} value={this.state.value} >
          <option value='ByAgencyMonthly'>ByAgencyMonthly</option>
          <option value='ByAgency'>ByAgency</option>
          <option value='ByMonthGlobal'>GlobalMonthly</option>
        </select>
        <div className='container_chart'>
          <Rendering value={this.state.value} />
        </div>
      </div>
    );
  }
}

export default App;
