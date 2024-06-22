//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//let name="diya";
//you can't write alert.showAlert(...) because alert is not an object with a showAlert method. It is just the state variable that holds the current state value
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  
  const toggleMode =() =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#181965';
      showAlert("dark mode is enabled","success");
      document.title='Textutills - dark mode';
      // setInterval(() => {
      //   document.title='Textutills is amazing';
      // }, 2000);

      // setInterval(() => {
      //   document.title='Install Textutills Now';
      // }, 1500);   
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode enabled","success");
      document.title='Textutills - light mode';
    }
  }

  return (
  //  <></>  this is called fragments you can write the whole JSX in fragments 
  //className is a reserved word in javascript so in jsx we have to write classNameName 
  //<div classNameName='blank'>LEARN REACT </div>
  //javascript is always used in {} under JSX 
  // <>
  // <h1>hello {name}</h1>   
  // <nav>
  //   <li><a href='https://www.linkedin.com/in/dhairya67/' >Home</a></li>
  //   <li>About</li>
  //   <li>Contact</li>
  // </nav>
  // </>
  //Route path ="/xyz" kuch vi name de sakte ho then navbar.js mein <Link...to="/xyz">i.e same name dena hein
  <>
  <Router>
  <Navbar title="textutills" about="About textutills" mode={mode} toggleMode={toggleMode}>
  </Navbar>

  <Alert alert={alert}>

  </Alert>
  <div className='container my-3'>
  <Routes>
          <Route exact path="/xyz"  element={<About mode={mode} />}>
          </Route>

          <Route exact path="/" element={<Textform heading="Enter the texts" showAlert={showAlert} mode={mode}/>}>
                
          </Route>
  </Routes>
    

    {/* <About >

    </About> */}

  </div>
  </Router>
  </>
  );
}

export default App;
