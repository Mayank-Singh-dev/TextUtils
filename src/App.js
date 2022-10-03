// import logo from './logo.svg';
import React, {useState}  from 'react';
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";
// let name = 'Mayank Singh'
function App() {
  const [mode,setMode] = useState('light') //weather dark mode is enabled or not
  const [alert,setAlert] = useState(null)
  const showAlert = (message,type) =>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null)
      },3000)
  }

  const toogleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert(':Dark mode has been enabled','success')
      document.title = 'TextUtils-Dark mode'
      // setTimeout(()=>{
      //   document.title = 'TextUtils is Amazing'
      // },2000)
      // setTimeout(()=>{
      //   document.title = 'Download textUtils now'
      // },1500)
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert(':Light mode has been enabled','success')
      document.title = 'TextUtils-Light mode'
    }
  }
  return (
    <>
    {/* <Router> */}
      <NavBar title = 'TextUtils' mode = {mode} toogleMode={toogleMode} aboutText='About-Us'/>
      <Alert alert = {alert}/>
      
      {/* <NavBar/> */}
      <div className="container my-3"> 
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
          {/* this are the old method the above line is stacloverflow sol..  */}
            {/* <About/> */}
          {/* </Route> */}
          {/* <Route exact path="/" element={<TextForm/>}/> */}
            <TextForm showAlert= {showAlert} heading = 'Enter the text' mode = {mode}/>
          {/* </Route> */}
      {/* </Routes> */}
      </div>
      {/* </Router>   */}
    </>
  );
}

export default App;
