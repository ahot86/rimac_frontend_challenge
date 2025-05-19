import logoRimacFooter from "/rimac_logo_footer.png"

export function Footer() {
    return (
        <div className="footer-container">
            <div className="container">
                <footer className="footer">
                    <div className="footer__logo">
                        <img src={logoRimacFooter} alt="logo rimac"/>
                    </div>
                    <p className="footer__info">© 2025 RIMAC Seguros y Reaseguros S.A.</p>
                </footer>
                
            </div>
        </div>
    )
}