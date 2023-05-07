// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";



function App() {
  // it will tell whether dark mode is enabled or not
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled", "success");
        document.title = 'TextUtils - Dark Mode';
      }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
        document.title = 'TextUtils - Light Mode';
      }
      // let bgcolr = 'a';
      // let colr = 'b';
      // switch (mode) {
      //   case 'green':
      //     setMode('green');
      //     document.body.style.backgroundColor = 'green';
      //     showAlert("Green mode has been enabled", "success");
      //     bgcolr = 'green';
      //     colr = 'white';
      //     break;
      //   case 'blue':
      //     setMode('blue');
      //     document.body.style.backgroundColor = 'blue';
      //     showAlert("Blue mode has been enabled", "success");
      //     bgcolr = 'blue';
      //     colr = 'white';
      //     break; 
      //   case 'red':
      //     setMode('red');
      //     document.body.style.backgroundColor = 'red';
      //     showAlert("Red mode has been enabled", "success");
      //     bgcolr = 'red';
      //     colr = 'white';
      //     break;
      //   case 'dark':
      //     setMode('dark');
      //     document.body.style.backgroundColor = 'black';
      //     showAlert("Dark mode has been enabled", "success");
      //     bgcolr = 'black';
      //     colr = 'white';
      //     break;
      //   case 'light':
      //     setMode('light');
      //     document.body.style.backgroundColor = 'white';
      //     showAlert("light mode has been enabled", "success");
      //     bgcolr = 'white';
      //     colr = 'black';
      //     break;
      //   default:
      //     setMode('light');
      //     document.body.style.backgroundColor = 'white';
      //     showAlert("light mode has been enabled", "success");
      //     bgcolr = 'white';
      //     colr = 'black';
      // }
  }


  // for alert message
  const[alert, setAlert] = useState(null); // here my alert was null

  const showAlert = (message, type) => {         // now my alert is an object, set alert - alert ko set update karne ke liye hai aur show alert ek function hai jo madad karega function ko show karne me 
  // type me 1) red-danger 2) green-success 3)yellow - warning 4) blue 
      setAlert({
        msg: message, 
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
  }

  return (
    <>
    {/* <Router> */}



      <Navbar title = 'TextUtils' mode={mode} toggleMode={toggleMode} aboutText = "About TextUtils"/>
      <Alert alert={alert}/>


     <div className="container my-3">
        {/* here we passed show alert method to textform then we will use it in every button */}



        {/* <Routes> */}

          {/* <Route exact path="/about" element={<About/>} /> */}
            {/* <About /> */}
          {/* </Route> */}
  
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>}/> */}
            <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>
          {/* </Route> */}
        {/* </Routes> */}

        {/* <Routes>

          <Route path="/about">
            <About/>
          </Route>
          <Route path="/" >
            <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>
          </Route>


        </Routes> */}



      </div> 
      

      {/* <div className="container my-3">
        <About>  </About>
      </div>
       */}


    {/* </Router> */}
    </>
  );
}

export default App;