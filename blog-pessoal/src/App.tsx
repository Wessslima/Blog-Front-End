import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';

function App() {
  return(
    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
    <Routes> // Antigo Switch
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
    </Routes>
    </div>
    <Footer />
    </ BrowserRouter >
    );  
}

export default App;



// return(
//   <BrowserRouter>
//   <Navbar />
//   <div style={{ minHeight: '100vh' }}>
//   <Routes> // Antigo Switch
//   <Route path="/" element={<Login />} />
//   <Route path="/login" element={<Login />} />
//   <Route path="/home" element={<Home />} />
//   <Route path="/cadastro" element={<CadastroUsuario />} />
//   </Routes>
//   </div>
//   <Footer />
//   </ BrowserRouter >
//   )  




// return (

//   <Router>
//       <Navbar/>
//           <Switch>

//             <div style={{minHeight: '100vh'}}>

//               <Route exact path='/'>
//                   <Login/>
//               </Route>

//               <Route path='/login'>
//                   <Login/>
//               </Route>

//               <Route path='/home'>
//                   <Home/>
//               </Route>

//             </div>

//           </Switch>
//       <Footer/>
//   </Router>

// );
