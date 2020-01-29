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
        data: this.state.figurePerAgency.map(el => el.revenues),
        backgroundColor : 
          ['rgba(230, 61, 104, 0.5)',
          'rgba(243, 180, 56, 0.5)',
          'rgba(250, 220, 51, 0.5)',
          'rgba(181, 250, 51 , 0.5)',
          'rgba(51, 250, 220 , 0.5)',
          'rgba(51, 178, 250, 0.5)',
          'rgba(51, 69, 250, 0.5)',
          'rgba(190, 51, 250 , 0.5)',
          'rgba(212, 158, 118 , 0.5)',
          'rgba(243, 180, 56, 0.5)',
          'rgba(181, 250, 51 , 0.5)',
          'rgba(51, 178, 250, 0.5)',
          'rgba(230, 61, 104, 0.5)',
          'rgba(243, 180, 56, 0.5)',
          'rgba(250, 220, 51, 0.5)',
          'rgba(181, 250, 51 , 0.5)',
          'rgba(51, 250, 220 , 0.5)',
          ],
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
