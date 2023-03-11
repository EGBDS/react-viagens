import rio from '../../assets/rio.jpg';
import bahia from '../../assets/bahia.jpg';
import goias from '../../assets/goias.jpg';
import lencol from '../../assets/lencol.jpg';
import manaus from '../../assets/manaus.jpg';
import maranhao from '../../assets/maranhao.jpg';
import niteroi from '../../assets/niteroi.jpg';
import saopaulo from '../../assets/saopaulo.jpg';

import './Locais.css';

function Locais(){
    return (
        <div className="locais">
            <div>
                <h2>Ofertas</h2>
                <p>Com até 
                    <strong> 50% </strong> 
                de desconto</p>
                <div className="text_img_rio">
                        <img src={ rio } alt="Rio de Janeiro"></img>
                        <p>Rio de Janeiro</p>
                </div>
                <div className="locais_img">
                    <div>
                        <div className="text_img">
                            <img src={ manaus } alt="Manaus"></img>
                            <p>Manaus</p>
                        </div>
                        <div className="text_img">
                            <img src={ niteroi } alt="Niteroi"></img>
                            <p>Niteroi</p>
                        </div>
                    </div>
                    <div>
                        <div className="text_img">
                            <img src={ saopaulo } alt="São Paulo"></img>
                            <p>São Paulo</p>
                        </div>
                        <div className="text_img">
                            <img src={ maranhao } alt="Maranhão"></img>
                            <p>Maranhão</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2>Explore a Natureza</h2>
                <p>
                    Viaje conosco e veja o melhor que a natureza tem a oferecer
                </p>
                <div className="natureza_imgs">
                    <div className="natureza_img">
                        <img src={ lencol } alt="Lencol"></img>
                        <h3>Lençois Maranhenses, Brasil</h3>
                        <p>Ida e volta a partir de R$79,00</p>
                    </div>
                    <div className="natureza_img">
                        <img src={ goias } alt="Goias"></img>
                        <h3>Cachoreira Santa Bárbara, Brasil</h3>
                        <p>Ida e volta por R$139,00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Locais;