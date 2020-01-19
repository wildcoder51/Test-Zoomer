import React from 'react';
import axios from 'axios';

class CallTestJson extends React.Component {
  constructor() {
    super()
    this.state = {
      test : []
    }
  }

  getStat = () =>{
    console.log('hello')
    axios.get('http://localhost:8000/figures/per-agency-monthly')
     
      .then (response => {
        this.setState({
         test : response.data
        })
      })
  }

  componentDidMount(){
    this.getStat();
  }

  render() {
    return (
      <div>
        <p>Hello</p>
      </div>
    );
  }
}

export default CallTestJson;
