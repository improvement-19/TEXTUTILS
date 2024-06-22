import React from 'react'

export default function Alert(props) {

  const captitalize=(word)=>{
    const lower= word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  
  //with out {props.alert ...} the expression will not be treated as JSX 
  return (
    <div style={{height:'50px'}}> 
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{captitalize(props.alert.type)}</strong> : {props.alert.msg}   
    </div>}
    </div>
  )
}
