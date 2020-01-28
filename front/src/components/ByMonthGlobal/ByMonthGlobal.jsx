import React from 'react'
import axios from 'axios'
import {Bar} from 'react-chartjs-2';
import moment from 'moment'


class ByMonthGlobal extends React.Component {
  constructor () {
    super ()
    this.state = {
      figurePerMonth : []
    }
  }

  componentDidMount (){
    this.getFiguresPerMonth();
  }

  getFiguresPerMonth = () =>{
    axios.get('http://localhost:8000/figures/per_month')
      .then (response => {
        this.setState({
          figurePerMonth : response.data
        })
      })
  }

  getChartDatas= () => {
    return({
      labels : this.state.figurePerMonth.map(el => moment(el.time).format('MMMM')),
      datasets : [{
        label : 'Revenus',
        data: this.state.figurePerMonth.map(el => el.revenues.toFixed(0)),
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
          ],
        borderWidth : 2,
        hoverBackgroundColor : 'rgb(24, 21, 17,0.2)',
        barThickness: 30,
      }]
    })
  }

  render(){
    return(
      <div>
        <h2>Revenus globaux par mois</h2>
          <Bar
          data = {this.getChartDatas}
          height={300}
          options={{ 
            maintainAspectRatio: false,
            responsive : true,
            scales : {
              yAxes : [{
                ticks : {
                  callback : function(value,index,values){
                    return value + ' €' ;
                  }
                }
              }]
            }
          }}
          />
      </div>
    )
  }
}

export default ByMonthGlobal;
