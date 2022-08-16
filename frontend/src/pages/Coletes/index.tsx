import './style.css';

import Colete001 from 'assets/img/coletes/colete001.png';

function Coletes() {

    return (

        <>
            <h1 className='h1-colet'>Confira nossos coletes</h1>
            <div className="container-colete">
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Colete Social</span>
                        <img className='img-cole' src={Colete001} alt="Colete-001" />
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, reiciendis?</h3>
                        <h1>R$ 99,90</h1>
                    </div>
                </div>
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Colete Social</span>
                        <img className='img-cole' src={Colete001} alt="Colete-001" />
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, reiciendis?</h3>
                        <h1>R$ 99,90</h1>
                    </div>
                </div>
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Colete Social</span>
                        <img className='img-cole' src={Colete001} alt="Colete-001" />
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, reiciendis?</h3>
                        <h1>R$ 99,90</h1>
                    </div>
                </div>
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Colete Social</span>
                        <img className='img-cole' src={Colete001} alt="Colete-001" />
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, reiciendis?</h3>
                        <h1>R$ 99,90</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Coletes;