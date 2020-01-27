import React from 'react'
import axios from 'axios'
import {Bar} from 'react-chartjs-2';


class ByMonthGlobal extends React.Component {
  constructor () {
    super ()
    this.state = {
      figures : []
    }
  }

  componentDidMount (){
    this.getFigures();
  }

  getFigures = () =>{
    axios.get('http://localhost:8000/figures/per_month')
      .then (response => {
        this.setState({
          figures : response.data
        })
      })
  }

  getChartDatas= () => {
    return({
      labels : this.state.figures.map(el => el.time),
      datasets : [{
        label : 'Revenus',
        data: this.state.figures.map(el => el.revenues)
      }]
    })
  }


  render(){
    return(
      <div>
        <h2>Revenus globaux par mois</h2>
          <Bar
          data = {this.getChartDatas}
          options = {{}}
          />
      </div>
    )
  }
}

export default ByMonthGlobal;
