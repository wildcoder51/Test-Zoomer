import React from 'react'
import axios from 'axios'
import {Doughnut} from 'react-chartjs-2';


class ByAgency extends React.Component {
  constructor () {
    super ()
    this.state = {
      figurePerAgency : []
    }
  }

  componentDidMount (){
    this.getFiguresPerAgency();
  }

  getFiguresPerAgency = () =>{
    axios.get('http://localhost:8000/figures/per-agency')
      .then (response => {
        this.setState({
          figurePerAgency : response.data
        })
      })
  }

  getChartDatas= () => {
    return({
      labels : this.state.figurePerAgency.map(el => el.agency_name),
      datasets : [{
        data: this.state.figurePerAgency.map(el => el.revenues)
      }]
    })
  }


  render(){
    return(
      <div>
        <h2>Revenus global par Agence</h2>
          <Doughnut
          data = {this.getChartDatas}
          options = {{}}
          />
      </div>
    )
  }
}

export default ByAgency;
