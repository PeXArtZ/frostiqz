import Link from 'next/link'

const BrandFoot = () => (
    <div>
        <footer id="footer">
            <section className="footer">
                <div className="wrapper">
                    <h3>Kontakt</h3>
                    <hr />
                    <p>
                        Hier findest du alle Möglichkeiten, um mit uns Kontakt aufzunehmen.
                    </p>
                    <div className="kontakt">
                        <div className="email">
                            <i className="fas fa-at"></i>
                            <h4>E-Mail</h4>
                            <Link href="mailto:kontakt@frostiqz.de"><a>kontakt@frostiqz.de</a></Link>
                        </div>
                        <div className="teamspeak">
                            <i className="fab fa-teamspeak"></i>
                            <h4>TeamSpeak</h4>
                            <Link href="ts3server://frostiqz.de?"><a>Frostiqz.de</a></Link>
                        </div>
                        <div className="twitter">
                            <i className="fab fa-twitter"></i>
                            <h4>Twitter</h4>
                            <Link href="https://www.twitter.com/pexfx_"><a target="_blank">Twitter.com/pexfx_</a></Link>
                        </div>
                    </div>
                    <p>
                        © 2019 Frostiqz
                    </p>
                    <p>
                        Webdesign by <Link href="https://tobias-voigt.net"><a target="_blank">Tobias Voigt</a></Link>.
                    </p>

                    <nav className="legal">
                        <Link href="/impressum"><a>Impressum</a></Link>
                        <Link href="/datenschutz"><a>Datenschutzerklärung</a></Link>
                        <Link href="https://rank.frostiqz.de"><a target="_blank">Panel</a></Link>
                    </nav>
                </div>
            </section>
        </footer>
    </div>
)

export default BrandFoot