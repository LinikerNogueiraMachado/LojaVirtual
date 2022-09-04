
import ColeteBlack from 'assets/img/coletes/colete-black.png';
import ColeteWhite from 'assets/img/coletes/colete-white.png';

function Coletes() {

    return (

        <>
            <h1 className='title'>Coletes</h1>
            <div className="container-display">
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Colete Social</span>
                        <img className='img-cole' src={ColeteBlack} alt="coletes sociais" />
                        <h1>R$ 99,90</h1>
                    </div>
                </div>
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Colete Social</span>
                        <img className='img-cole' src={ColeteWhite} alt="coletes sociais" />
                        <h1>R$ 99,90</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Coletes;