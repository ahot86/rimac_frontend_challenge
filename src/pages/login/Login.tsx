import * as component from "../../components"
import blurGreenDesktop from "/blur-rigth-green.png"
import blurPurppleDesktop from "/blur-left-purpple.png"
import blurGreenMobile from "/blur-top-green.png"
import blurPurppleMobile from "/blur-bottom-purpple.png"
import familyDesktop from "/family_desktop.png"
import familyMobile from "/family_mobile.png"

export function Login(){

    return(
        <div className="page-container">
            <section className="page-container__section">
                <img src={blurGreenDesktop} className="blur-green-desktop"/>
                <img src={blurPurppleDesktop} className="blur-purpple-desktop"/>
                <img src={blurGreenMobile} className="blur-green-mobile"/>
                <img src={blurPurppleMobile} className="blur-purpple-mobile"/>
                <div className="login-form-hero container">
                    <div className="login-form-hero__img family-img">
                        <img src={familyDesktop} className="family-img__desktop"/>
                        <img src={familyMobile} className="family-img__mobile"/>
                    </div>
                    <div className="login-form-hero__text">
                        <h1>Creado para ti y tu familia</h1>
                        <p>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
                    </div>
                    <div className="login-form-hero__form">
                        <p>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
                        <component.Form/>
                    </div>                    
                </div>                
            </section>
            <component.Footer/>
        </div>
    )
}