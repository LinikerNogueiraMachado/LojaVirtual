import './style.css';

import Gravat from 'assets/img/gravat.svg';


function Navbar() {
    return (
        <>
            <header>
                <h1>stylish man</h1>
                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#coletes"> Coletes</a>
                    <a href="#gravatas"> Gravatas</a>
                    <a href="#blazer">Blazer casual</a>
                    <a href="#sapatos"> Sapatos</a>
                    <a href="#medida"> Sob Medida</a>
                </nav>
            </header>

            <div>
                <img src={Gravat} className='img-bg' alt="" />
            </div>
                
            <footer className="box-container">               
                        <h3>São Paulo - Brasil</h3>&nbsp;
                        <h5>&copy; 2022 - Liniker Nogueira Machado || </h5> &nbsp;
                        <h3>Acesse meu:</h3>
                        <a href="https://github.com/LinikerNogueiraMachado" target="_blank">
                            GitHub
                        </a>
                        <h3>Meios de contato</h3>
                        <a href="https://bit.ly/portifolio_liniker_nogueira" target="_blank">Whatssapp</a>
                        <a href="https://bit.ly/InstagramDev-Liniker" target="_blank">Instagram</a>
                        <a href="https://www.linkedin.com/in/liniker-nogueira-machado" target="_blank">Linkedin</a>
            </footer>
        </>
    );
}

export default Navbar;