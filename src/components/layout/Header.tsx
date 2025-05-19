import { Outlet } from "react-router"
import logoRimacHeader from "/rimac_logo_header.png"
import phoneIcon from "/phone_icon.png"

export default function Header(){

    return(
        <>
            <div className="bgHeader">
                <header className="header container">
                    <div className="header__logo">
                        <img src={logoRimacHeader} alt="logo rimac"/>
                    </div>
                    <div className="info">
                        <button className="info__button--modal">¡Compra por este medio!</button>
                        <div>
                            <img src={phoneIcon} alt="phone" className="info__icon"/>
                            <button className="info__button--phone">(01) 411 6001</button>
                        </div>
                    </div>
                </header>
            </div>
            <Outlet/>
        </>
    )
} 