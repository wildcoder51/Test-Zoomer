import React from 'react';
import { Doughnut, Line, Bar } from 'react-chartjs-2';

class FigureLine extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      chartData : props.chartDatas
    }
  }



  render(){
    return(
      <div>
        <Line
          data={this.state.chartData}
          options={{}}
        />
      </div>
    )
  }
}

export default FigureLine;