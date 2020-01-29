import React from 'react';
import axios from 'axios';
import FigureLine from './FigureLine';
import moment from 'moment'

class ByAgencyMonthly extends React.Component {
  constructor() {
    super()
    this.state = {
      figures : [],
    }
  }

// GET FIGURES

  getFigures = () =>{
    return axios.get('http://localhost:8000/figures/per-agency-monthly')
      .then (response => {
        this.setState({
          figures : response.data
        })
      })
  }

  async componentDidMount(){
    await this.getFigures();
    const array = this.state.figures;
    const results = array.reduce(this.groupByAgencyName, []);
    this.setState({ testData: results });
  }
  // GROUPBY 
  compareAgencyName = (agencyName, item) => {
    return agencyName === item.agency_name;
  }
  containAgency = (agencyName, items) => {
    return items.some(this.compareAgencyName.bind(null, agencyName));
  }
  groupByAgencyName = (memo, item) => {
    const agencyName = memo.filter(this.containAgency.bind(null, item.agency_name));
    if (agencyName.length > 0) {
      agencyName[0].push(item);
    } else {
      memo.push([item]);
    }
    return memo;
  }
  //

  // GET LABEL TIME

  getLabel = () => {
    if (this.state.testData){
      return this.state.testData[0].map(el => moment(el.time).format('MMMM'))
    }
  }

  // GET ALL AGENCES FIGURES 
  returnObjectFunction = () => {
    const color =
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
          ];
    const object = []
    for (let i = 0; i < this.state.testData.length; i++){
      object.push({
          label : this.state.testData[i][0].agency_name,
          data : this.state.testData[i].map(el => el.revenues),
          fill: false,
          borderColor: color[i],
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
      })
    }
    return (object)
  }
  //

  render() {
    return (
      <div>
        <h2>Revenus par mois par agence</h2>
        {this.state.testData ? <FigureLine chartDatas={{
          labels : this.getLabel(),
          datasets : this.returnObjectFunction()
        }} 
        /> : <p>Loading..</p>}
      </div>
    );
  }
}

export default ByAgencyMonthly;
