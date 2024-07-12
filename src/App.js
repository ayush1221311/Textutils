import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'


function App() {

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    });
    const [btnText, setBtnText] = useState("Enable Dark Mode");
    
    const toggleStyle = () => {
    if (myStyle.color === "black") {
    setMyStyle({
    color: "white",
    backgroundColor: "black",
    border: "1px solid white",
    })
    setBtnText("Enable Light Mode")
    }
    else{
    setMyStyle({
    color: "black",
    backgroundColor: "white",
    border: "1px solid black",
    })
    setBtnText("Enable Dark Mode")
    }
    }


  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black' ;
      document.body.style.color = 'white' ;
      showAlert("Dark mode has been enabled", "success")
      toggleStyle();
      // document.title = 'TextUtils -Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white' ;
      document.body.style.color = 'black' ;
      showAlert("light mode has been enabled", "success")
      toggleStyle();
      // document.title = 'TextUtils -Dark Mode';
    }
  }
  return (
    <>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        <Route path="/about" element={<About myStyle={myStyle} Style={toggleStyle} Text={btnText}/>} />
      </Routes>
      </div>
    </Router>
    </>
  )
}

export default App;
