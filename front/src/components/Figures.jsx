import React from 'react';
import axios from 'axios';
import FigureLine from './FigureLine'

class Figures extends React.Component {
  constructor() {
    super()
    this.state = {
      figures : [],
      chartData : {},
    }
  }

  getFigures = () =>{
    axios.get('http://localhost:8000/figures/per-agency-monthly')
      .then (response => {
        this.setState({
          figures : response.data
        })
      })
  }

  componentDidMount(){
    this.getFigures();
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    this.state.figures.map(figure =>(
      this.setState({
        chartData : {
          labels : [figure.time],
          datasets:[{
            labels : 'Revenues',
            data:[figure.revenues]
          }]
        }
      })
    ))
  }

  render() {
    return (
      <div>
        <p>Statistiques</p>
        <FigureLine chartDatas={this.state.chartData} />
      </div>
    );
  }
}

export default Figures;
