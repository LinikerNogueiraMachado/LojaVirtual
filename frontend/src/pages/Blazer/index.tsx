
import BlazerPreto from 'assets/img/blazer/blazer-slim1-botao-preto.png';
import BlazerGray from 'assets/img/blazer/blazer-slim1-botao-gray.png';
import BlazerBlue from 'assets/img/blazer/blazer-slim2-botoes-blue.png';

function Blazer() {

    return (

        <>
            <h1 className='title'>Confira nossos coletes</h1>
            <div className="container-display">
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Blazer social</span>
                        <img className='img-cole' src={BlazerPreto} alt="Colete-001" />
                        <h1>R$ 99,90</h1>
                    </div>
                </div>
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Blazer social</span>
                        <img className='img-cole' src={BlazerGray} alt="Colete-001" />
                        <h1>R$ 99,90</h1>
                    </div>
                </div>
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Blazer social</span>
                        <img className='img-cole' src={BlazerBlue} alt="Colete-001" />
                        <h1>R$ 99,90</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blazer;