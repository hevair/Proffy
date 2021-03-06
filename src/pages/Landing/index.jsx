import React from 'react';

import logoimg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import givClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import '../Landing/styles.css'

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoimg} alt="proffy" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                 <img src={landingImg}
                    alt="Plataforma de estudo"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </a>
                    <a href="" className="give-classes">
                        <img src={givClassesIcon} alt="Estudar" />
                        Dar aula
                    </a>
                </div>

                <span className="total-connections">
                    Total de 200 conexoes já realizada <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>

            </div> 
        </div>
    );
}

export default Landing;