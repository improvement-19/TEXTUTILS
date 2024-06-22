import React,{useState} from 'react'

//react hook without making class based component u can use feature of class component in function based component
//const [count, setCount] = useState(0); if you update count it will be updated everywhere without reload 
//my is a class in bootstrap my-2 means upar se thoda space,my-3 means more space 
//btn btn-primary is a bootstrap class responsible for blue color in button 
//\s+ is a regular expression in js,with split function is used to split the text with newline 

export default function Textform(props) {
    
    const [text, setText] = useState('');
    //text="new text"; this is the wrong way you cant update the state in this way
    //setText("new text"); //correct way to update text using settext function 
    const handleUPClick = ()=>{
     // console.log("upper case clicked"+ text); //+text to see the change after event listening i.e with e
      let newText=text.toUpperCase();
      setText(newText);
      props.showAlert("Upper case done !","success");
    }

    const handleLoClick =() =>{
      let s=text.toLowerCase();
      setText(s);
      props.showAlert("lower case is done !","success");
    }

    const handleOnChange = (e) =>{   //whenever a event is fired we get a object like error exception, u can write anything in bracket and then edit value inside textbox 
    
      setText(e.target.value);      //target is a property of event object 
    }

    const handleClrclick=()=>{
      let txt='';
      setText(txt);
      props.showAlert("Text cleared !","success");
    }
    
    const handleReverse =()=>{
      let wordarray=text.split(' ');
      let reversedwordarray=wordarray.reverse();
      setText(reversedwordarray.join(' '));
      props.showAlert("Text reversed !","success");
    }
    
  return (
    <>
    <div className="container">
       <h1 style={{color: props.mode==='dark'?'white':'black'}} className='mb-3'>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox"  value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
</div>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUPClick}>Convert to upper case</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLoClick}> Convert to lower case </button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClrclick}>Clear the text</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleReverse}>Reverse</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}} >  
      <h1>your text summary</h1>
      <p>{text.split(" ").filter((parameter)=>{return parameter.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(/\s+/).filter((parameter)=>{return parameter.length!==0}).length} minutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:'nothing to preview'}</p>
    </div>
    </>
  )
}
