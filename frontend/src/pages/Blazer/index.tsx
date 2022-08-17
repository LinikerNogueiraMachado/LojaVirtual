
import BlazerPreto from 'assets/img/blazer/blazer-slim1-botao-preto.png';
import BlazerGray from 'assets/img/blazer/blazer-slim1-botao-gray.png';
import BlazerBlue from 'assets/img/blazer/blazer-slim2-botoes-blue.png';

function Blazer() {

    return (

        <>
            <h1 className='title'>Blazers</h1>
            <div className="container-display">
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Blazer social</span>
                        <img className='img-cole' src={BlazerPreto} alt="Blazers" />
                        <h1>R$ 99,90</h1>
                    </div>
                </div>
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Blazer social</span>
                        <img className='img-cole' src={BlazerGray} alt="Blazers" />
                        <h1>R$ 99,90</h1>
                    </div>
                </div>
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Blazer social</span>
                        <img className='img-cole' src={BlazerBlue} alt="Blazers" />
                        <h1>R$ 99,90</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blazer;