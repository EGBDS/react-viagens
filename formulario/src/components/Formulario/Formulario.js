import aviao from '../../assets/aviao.png';
import './Formulario.css';

function veri_envio(e) {
    e.preventDefault();
    console.log("Formulário enviado com sucesso!");
    alert("Formulário enviado!");
}


function Formulario() {
    return (
        <div className="formulario">
            <div className="form_all">
                <div className="img_orcamento">
                    <img src={ aviao }></img>
                    <h2>Solicite um orçamento</h2>
                </div>
                <form method="get" action="test/" onSubmit={ veri_envio } autocomplete="off">
                {/* o metodo get envia as informações aparecendo na url, já o post não mostra.... o action é aonde será pesquisada ou armazenada as informações */}
                    <h3>Informe seus dados</h3>
                    <label htmlFor="nome">Nome</label>
                    <br/>
                    <input type="text" id="nome" placeholder="Nome completo" required/>
                    <br/>
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input type="email" id="email" placeholder="Email para contato"/>
                    <br/>
                    <label htmlFor="celular">Celular</label>
                    <br/>
                    <input type="tel" id="celular" placeholder="(xx) xxxxx-xxxx" required/>
                    <br/>
                    <div className="datas">
                        <div>
                            <label htmlFor="data_ida">Data da ida</label>
                            <br/>
                            <input type="date" id="data_ida" required/>
                            <br/>
                        </div>
                        <div>
                            <label htmlFor="data_volta">Data da volta </label>
                            <br/>
                            <input type="date" id="data_volta" required/>
                            <br/>
                        </div>
                    </div>
                    <div className="origem_destino">
                        <div>
                            <label htmlFor="select_origem">Origem</label>
                            <br/>
                            <select name="select_origem" id="origem" required>
                                <option>Acre (AC)</option>
                                <option>Alagoas (AL)</option>
                                <option>Amapá (AP)</option>
                                <option>Amazonas (AM)</option>
                                <option>Bahia (BA)</option>
                                <option>Ceará (CE)</option>
                                <option>Distrito Federal (DF)</option>
                                <option>Espírito Santo (ES)</option>
                                <option>Goiás (GO)</option>
                                <option>Maranhão (MA)</option>
                                <option>Mato Grosso (MT)</option>
                                <option>Mato Grosso do Sul (MS)</option>
                                <option>Minas Gerais (MG)</option>
                                <option>Pará (PA)</option>
                                <option>Paraíba (PB)</option>
                                <option>Paraná (PR)</option>
                                <option>Pernambuco (PE)</option>
                                <option>Piauí (PI)</option>
                                <option>Rio de Janeiro (RJ)</option>
                                <option>Rio Grande do Norte (RN)</option>
                                <option>Rio Grande do Sul (RS)</option>
                                <option>Rondônia (RO)</option>
                                <option>Roraima (RR)</option>
                                <option>Santa Catarina (SC)</option>
                                <option>São Paulo (SP)</option>
                                <option>Segipe (SE)</option>
                            </select>
                            <br/>
                        </div>
                        <div >
                            <label htmlFor="select_destino">Destino</label>
                            <br/>
                            <select name="select_destino" id="destino" required>
                            <option>Acre (AC)</option>
                                <option>Alagoas (AL)</option>
                                <option>Amapá (AP)</option>
                                <option>Amazonas (AM)</option>
                                <option>Bahia (BA)</option>
                                <option>Ceará (CE)</option>
                                <option>Distrito Federal (DF)</option>
                                <option>Espírito Santo (ES)</option>
                                <option>Goiás (GO)</option>
                                <option>Maranhão (MA)</option>
                                <option>Mato Grosso (MT)</option>
                                <option>Mato Grosso do Sul (MS)</option>
                                <option>Minas Gerais (MG)</option>
                                <option>Pará (PA)</option>
                                <option>Paraíba (PB)</option>
                                <option>Paraná (PR)</option>
                                <option>Pernambuco (PE)</option>
                                <option>Piauí (PI)</option>
                                <option>Rio de Janeiro (RJ)</option>
                                <option>Rio Grande do Norte (RN)</option>
                                <option>Rio Grande do Sul (RS)</option>
                                <option>Rondônia (RO)</option>
                                <option>Roraima (RR)</option>
                                <option>Santa Catarina (SC)</option>
                                <option>São Paulo (SP)</option>
                                <option>Segipe (SE)</option>
                            </select>
                        </div>
                    </div>
                    <fieldset>
                        <legend>Quarto com cama infantil?</legend>
                        <div>
                            <input type="radio" name="cama_infantil" id="sim" value="SIM" required/>
                            <label htmlFor="sim">Sim</label>
                        </div>
                        <div>
                            <input type="radio" name="cama_infantil" id="nao" value="NAO" required/>
                            <label htmlFor="nao">Não</label>
                        </div>
                    </fieldset>
                    <fieldset required>
                        <legend>Preferência da hospedagem</legend>
                        <div>
                            <input type="checkbox" name="pref_hospedagem" value="Piscina" ></input>
                            <label>Piscina</label>
                        </div>
                        <div>
                            <input type="checkbox" name="pref_hospedagem" value="wifi" defaultChecked="checked"></input>
                            <label>Wi-Fi</label>
                        </div>
                        <div>
                            <input type="checkbox" name="pref_hospedagem" value="garagem"></input>
                            <label>Garagem</label>
                        </div>
                        <div>
                            <input type="checkbox" name="pref_hospedagem" value="suite"></input>
                            <label>Suite</label>
                        </div>
                    </fieldset>
                    <button type="submit" id="btn_submit">Solicitar orçamento</button>
                </form>
            </div>
        </div>
    )
}

export default Formulario;