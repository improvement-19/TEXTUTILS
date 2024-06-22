import React, { useState } from 'react'


export default function About(props) {

  // const [myStyle,setMyStyle] = useState({
  //   color : 'black' ,
  //   backgroundColor :'white',
  //   border : '2 px solid white'
  // })

  let myStyle ={
    color : props.mode==='dark'?'white':'black',
    backgroundColor : props.mode==='dark'?'black':'white',
    border :'2 px solid',
    borderColor :  props.mode==='dark'?'white':'black'
  }

  // const [btntext,setBtnText] = useState("Enable Dark mode");

  // const toggle = (e)=>{
  //   const current=e.target.style.color;
  //   if(current==='black'){
  //     setMyStyle({
  //       color : 'white',
  //       backgroundColor : 'black',
  //       border : '2 px solid white'
  //     })
  //     setBtnText("Enable light mode");
  //   }
  //   else{
  //     setMyStyle({
  //       color : 'black' ,
  //       backgroundColor :'white'
  //     })
  //     setBtnText("Enable Dark mode");
  //   }
  // }

  return (
    <div className='container' style={myStyle}>
      <h1 className='my 2'>About us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your texts </strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Textutills gives you a way to analyze the texts quickly and efficiently.  Be it word count or doing uppercase lower case
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Textutills is a free character counter tool that provides instant character count and word count for a given texts.It is suitable for writing words with word limit or charcter limit 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This word counter software works in any browser such as chrome,firefox,internet explorer ,safari,opera .It suits to count character in blogs,facebook,excels,pdfs,docs,essays etc.
      </div>
    </div>
  </div>
</div>
      {/* <div className='my-3'>
        <button type="button" onClick={toggle} className="btn btn-primary" style={myStyle}>{btntext} </button>
      </div> */}
    </div>
  )
}
