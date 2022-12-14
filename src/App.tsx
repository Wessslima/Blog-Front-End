import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaTema from './components/temas/listatema/ListaTema';
import CadastroUsuario from './paginas/cadastro/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import store from './store/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Perfil from './components/perfil/Perfil';

function App() {
  return (

    <Provider store={store}>

      <ToastContainer/>

    <BrowserRouter>

      <Navbar />

        <div style={{minHeight: '100vh'}}>

          <Routes>

            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />

            <Route path="/perfil" element={<Perfil />} />

            <Route path="/home" element={<Home />} />

            <Route path="/cadastro" element={<CadastroUsuario />} />

            <Route path="/temas" element={<ListaTema />} />

            <Route path="/postagens" element={<ListaPostagem />} />

            <Route path="/formularioPostagem" element={<CadastroPost />} />

            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

            <Route path="/formularioTema" element={<CadastroTema />} />

            <Route path="/formularioTema/:id" element={<CadastroTema />} />

            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

            <Route path="/deletarTema/:id" element={<DeletarTema />} />

          </Routes>

        </div>
        
      <Footer />
      
    </BrowserRouter>

    </Provider>
  );
}

export default App;