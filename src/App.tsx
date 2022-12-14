import "./App.css";
import facebook from "./assets/facebook.svg";

function App() {
  return (
    <>
      <div className="wrap">
        <div>
          <form className="content">
            <input className="#" type="text" placeholder="Email ou telefone" />
            <input className="#" type="password" placeholder="Senha" />
            <button type="submit" className="enterButton">
              Entrar
            </button>
            <a href="#">Esqueceu a senha?</a>
            <hr></hr>
            <button className="newAccountButton">Criar nova conta</button>
          </form>
          <div className="contentForm">
            <p>
              <strong>Criar uma Página </strong>
              para um celebridade, uma marca ou uma empresa
            </p>
          </div>
        </div>
        <div className="contentText">
          <img className="logo" src={facebook} alt="Facebook" />

          <p>
            O Facebook ajuda você a se conectar e compartilhar com as pessoas
            que fazem parte da sua vida.
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
