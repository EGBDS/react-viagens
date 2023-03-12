import aviao from '../../assets/aviao.png';
import './Locais.css';

function Formulario() {
    return (
        <div>
            <div>
                <img src={ aviao }></img>
                <h2>Solicite um orçamento</h2>
            </div>
            <form method="get" action="a"> 
            {/* o metodo get envia as informações aparecendo na url, já o post não mostra.... o action é aonde será pesquisada ou armazenada as informações */}
                <h3>Informe seus dados</h3>
                <label>Nome: </label>
                <br></br>
                <input type="text" id="nome" placeholder="Nome completo"/>
                <br></br>
                <label>Email</label>
                <br></br>
                <input type="email"/>
                <input type="submit">Solicitar orçamento</input>
            </form>
        </div>
    )
}

export default Formulario;