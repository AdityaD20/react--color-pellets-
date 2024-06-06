 
 import { useState } from 'react';
 import './App.css';
 
 import Navbar from './components/Navbar';
  
 
 
 
  function App() {
   const [Mode, setMode ] = useState('light'); //wheather dark mode is enabled or not 
   const [alert, setAlert] = useState(null);
 
   const showAlert = (message, type)=>{
     setAlert({
       msg: message,
       type: type
     })
     setTimeout(() => {
       setAlert(null);
     }, 1500);
   }
 
 const toggleMode =()=>{
   if(Mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor = 'grey'
     showAlert("Dark Mode has been enabled", "success");
   }
   else  {
     setMode('light');
     document.body.style.backgroundColor = 'white';
     showAlert("Light Mode has been enabled", "success");
   }
 
 }
 
 
 

 //for blue mode
 const toggle11Mode =()=>{
  if(Mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#4f93eacc'
    showAlert("blue Mode has been enabled", "success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled", "success");
  }
}
 
 //for pink  mode
 const toggle22Mode =()=>{
  if(Mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'pink'
    showAlert("blue Mode has been enabled", "success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled", "success");
  }
}
 
//for yellow  mode
const toggle33Mode =()=>{
  if(Mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#f2f22ff0'
    showAlert("blue Mode has been enabled", "success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled", "success");
  }
}
 

 
   return (
 <>
  {/* <Navbar title="textutils2" aboutText="About textutils2"/>  */}
  {/*<Navbar/>    if the props  is not set then above Navbar convert into comments an server will choose defalut props which given in the navbar.js  */}
  <Navbar title="color" mode={Mode} toggleMode={toggleMode}    toggle11Mode={toggle11Mode}     toggle22Mode={toggle22Mode}   toggle33Mode={toggle33Mode} />
   
   
 
  </>
 
   );
 } 
 
 export default App;
 
  
 