import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Apply from './components/Apply';
import Books from './components/Books';
import ComplexForm from './components/ComplexForm';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Typography from './components/Typography';
import Alert from './components/Alert'

function App() {
   const [mode, setMode] = useState('light');
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

   const toggleMode = ()=>{

      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#021C31';
        showAlert("Dark mode has been enabled", "success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
      }
    }
  // return (
  //   <Router>
  //     <div>
  //       <Navbar toggleMode={toggleMode}/>
  //       <Alert alert={alert}/>
  //       <Routes>
  //         <Route path="/" element={<Typography />} />  
  //         <Route path="/about" element={<About />} />
  //         <Route path="/apply" element={<Apply />} />
  //         <Route path="/books" element={<Books />} />
  //         <Route path="/register" element={<Register />} />
  //         <Route path="/complex-form" element={<ComplexForm />} />
  //       </Routes>
  //     </div>
  //   </Router>
// );
   
    <Router>
      <div>
        <Navbar toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
          <Route path="React_Resume/" element={<Typography />} />  
          <Route path="React_Resume/about" element={<About />} />
          <Route path="React_Resume/apply" element={<Apply />} />
          <Route path="React_Resume/books" element={<Books />} />
          <Route path="React_Resume/register" element={<Register />} />
          <Route path="React_Resume/complex-form" element={<ComplexForm />} />
        </Routes>
      </div>
    </Router>
);
}

export default App;
