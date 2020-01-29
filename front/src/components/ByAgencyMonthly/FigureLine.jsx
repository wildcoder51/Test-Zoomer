import React from 'react';
import {Line} from 'react-chartjs-2';

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
          height={500}
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

export default FigureLine;
