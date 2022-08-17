
import GravataBlack from 'assets/img/gravatas/gravata-black.png';
import GravataPink from 'assets/img/gravatas/gravata-pink.png';
import KitGravatas from 'assets/img/gravatas/gravatas-escuras.png';

function Gravatas() {

    return (

        <>
        <h1 className='title'>Confira nossas gravatas</h1>
            <div className="container-display">
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Gravatas</span>
                        <img className='img-cole' src={GravataBlack} alt="Colete-001" />
                        <h1>R$ 5,90</h1>
                    </div>
                </div>
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Gravatas</span>
                        <img className='img-cole' src={GravataPink} alt="Colete-001" />
                        <h1>R$ 5,90</h1>
                    </div>
                </div>
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Gravatas</span>
                        <img className='img-cole' src={KitGravatas} alt="Kit-01" />
                        <h1>R$ 5,90</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gravatas;