import SapatoBlack from 'assets/img/sapatos/sapato-black.png';
import SapatoBordo from 'assets/img/sapatos/sapato-bordo.png';
import SapatoBrown from 'assets/img/sapatos/sapato-brown.png';

function Sapatos() {

    return (

        <>
        <h1 className='title'>Sapatos</h1>
            <div className="container-display">
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Sapatos sociais</span>
                        <img className='img-cole' src={SapatoBlack} alt="Sapatos sociais" />
                        <h1>R$ 62,98</h1>
                    </div>
                </div>
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Sapatos sociais</span>
                        <img className='img-cole' src={SapatoBordo} alt="Sapatos sociais" />
                        <h1>R$ 62,98</h1>
                    </div>
                </div>
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Sapatos sociais</span>
                        <img className='img-cole' src={SapatoBrown} alt="Sapatos sociais" />
                        <h1>R$ 62,98</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sapatos;