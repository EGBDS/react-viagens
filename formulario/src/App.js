import './App.css';
import local_logo from './assets/local-logo.png';
import email from './assets/email.png';
import fb from './assets/fb.png';
import ig from './assets/ig.png';
import local from './assets/local.png';
import telefone from './assets/telefone.png';
import tt from './assets/tt.png';

import Locais from './components/Locais/Locais';
import Formulario from './components/Formulario/Formulario';


function App() {
  return (
    <div className="App">
      <header>
        <img src={local_logo}></img>
        <h1>Agência de Viagens</h1>
      </header>
      <main>
        <Formulario />
        <Locais />
      </main>
      <footer className="footer_agencia">
        <div className="footer_agencia_container">
            <ul className="contato">
            <h4 >Contato</h4>
              <li>
                <img src={ local }></img>
                <p>São José do Rio Preto - SP</p>
              </li>
              <li>
                <img src={ telefone }></img>
                <p>Telefone: (17)9999-9999</p>
              </li>
              <li>
                <img src={ email }></img>
                <p>Email: contato@agencia.com.br</p>
              </li>
            </ul>
            <ul className="redes_socias">
            <h4>Nossas Redes Sociais</h4>
              <li>
                <img src={ fb }></img>
                <p>/AgenciaDeViagem</p>
              </li>
              <li>
                <img src={ ig }></img>
                <p>@AgenciaDeViagem</p>
              </li>
              <li>
                <img src={ tt }></img>
                <p>@AgenciaDeViagem</p>
              </li>
            </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
