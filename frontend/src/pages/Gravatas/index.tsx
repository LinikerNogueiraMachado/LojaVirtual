
import GravataBlack from 'assets/img/gravatas/gravata-black.png';
import GravataPink from 'assets/img/gravatas/gravata-pink.png';
import KitGravatas from 'assets/img/gravatas/gravatas-escuras.png';

function Gravatas() {

    return (

        <>
        <h1 className='title'>Gravatas</h1>
            <div className="container-display">
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Gravatas</span>
                        <img className='img-cole' src={GravataBlack} alt="gravatas" />
                        <h1>R$ 5,90</h1>
                    </div>
                </div>
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Gravatas</span>
                        <img className='img-cole' src={GravataPink} alt="gravatas" />
                        <h1>R$ 5,90</h1>
                    </div>
                </div>
                <div className="cards">
                    <div className='card' id='item-1'>
                        <span>Gravatas</span>
                        <img className='img-cole' src={KitGravatas} alt="gravatas" />
                        <h1>R$ 5,90</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gravatas;