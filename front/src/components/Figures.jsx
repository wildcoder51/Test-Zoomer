import React from 'react';
import axios from 'axios';
import FigureLine from './FigureLine'

class Figures extends React.Component {
  constructor() {
    super()
    this.state = {
      figures : [],
      testData : [],
    }
  }

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

  getRevenues = () => {
    if (this.state.testData) {
      console.log(this.state.testData)
      this.state.testData[0].map(el => el.revenues)
    }
  }
  getLabel = () => {
    if (this.state.testData) {
      this.state.testData[0].map(el => el.time)
    }
  }

 
  render() {
    return (
      <div>
        <p>Statistiques</p>
        {this.state.testData ? <FigureLine chartDatas={{
          labels : this.getLabel(),
          datasets:[{
            labels : 'Revenues',
            data :this.getRevenues()
          }]
        }} 
        /> : <p>Loading...</p>}
      </div>
    );
  }
}

export default Figures;
