import React from 'react'
import ByAgencyMonthly from './components/ByAgencyMonthly/ByAgencyMonthly';
import ByMonthGlobal from './components/ByMonthGlobal/ByMonthGlobal';
import ByAgency from './components/ByAgency/ByAgency'

function Rendering (props){

  if (props.value === 'ByAgencyMonthly'){
    return <ByAgencyMonthly />
  }
  if (props.value === 'ByAgency'){
    return <ByAgency/>
  }
  if (props.value === 'ByMonthGlobal'){
    return <ByMonthGlobal />
  }
    
}

export default Rendering;
