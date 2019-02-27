import css from '../static/main.sass'
import NextHead from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer' 
import MoveMobile from '../components/mobile';

const Index = () => (
    <div className="page">
        <NextHead>
            
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous"></script>
            <script src="https://cdn.uwe-barthel.net/landing/static/style/js/function.js"></script>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
            <script src="/static/scripts/ts3.js"></script>

            <meta charSet="UTF-8"></meta>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta name="application-name" content="TeamSpeak 3 Vorstellungs-Website für Frostiqz.de - Website created by Tobias Voigt"></meta>
            <meta name="description" lang="de" content="Frostiqz.de ist ein nutzerfreundlicher TeamSpeak. Besuche uns noch heute!"></meta>
            <meta name="twitter:title" content="Tobias Voigt"></meta>
            <meta name="twitter:description" lang="de" content="Frostiqz.de ist ein nutzerfreundlicher TeamSpeak. Besuche uns noch heute!"></meta>
            <meta name="twitter:card" content="summary"></meta>
            <meta itemProp="name" content="Frostiqz.de"></meta>
            <meta itemProp="description" lang="de" content="TeamSpeak 3"></meta>
            <meta property="og:url" content="https://Frostiqz.de"></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:description" lang="de" content="Website"></meta>

            <title>Frostiqz.de » dein TeamSpeak!</title>

        </NextHead>
        <Header />
        <MoveMobile/>
        <section id="home-landing">
            <div className="wrapper">
                <div className="logo-landing-img"><div className="logo-landing"></div></div>
                <h1>Frostiqz.de</h1>
                <h2>...dein TeamSpeak!</h2>
            </div>
        </section>
        <section id="leistungen">
            <div className="wrapper">
                <h3>Leistungen</h3>
                <hr />
                <div className="leistungen-box">
                    <div className="leistungen-box-1">
                        <i className="fas fa-shield-alt"></i>
                        <h4>DDoS-Protection</h4>
                        <p>
                            Im heutigen Internet kommt es häufig zu DDoS-Attacken, welche viele Server in die Knie zwängen. Durch den guten DDoS-Schutz unseres
                            Hosters, bieten wir einen stabilen TeamSpeak-Server.
                        </p>
                    </div>
                    <div className="leistungen-box-2">
                        <i className="fas fa-comments"></i>
                        <h4>Support</h4>
                        <p>
                            Durch unsere aktiven Teammitglieder gewährleisten wir einen schnell, zuverlässigen Support zu nahezu allen Zeiten - egal ob per 
                            TeamSpeak, E-Mail oder Website!
                        </p>
                    </div>
                    <div className="leistungen-box-3">
                        <i className="fas fa-globe-europe"></i>
                        <h4>Verfügbarkeit</h4>
                        <p>
                            Aufgrund unseres stabilen vServers garantieren wir eine Verfügbarkeit von 7 Tagen die Woche, 24 Stunden am Tag - ohne
                            einen Ausfall.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section id="about">
            <div className="wrapper">
                <h3>Wer sind wir?</h3>
                <hr />
                <div className="boxen">
                    <div className="about-box-line-1">
                        <div className="about-pex">
                            <div className="about-pex-img"></div>
                                <h4>Tobi | PeX</h4>
                                <h5>Inhaber</h5>
                                <p>
                                    Tobi kümmert sich darum, dass der Server läuft & sich immer auf dem neuesten Stand befindet. Außerdem ist er 
                                    Vollzeit-Mutti für das Server-Team.
                                </p>
                                <div className="about-pex-social">
                                    <Link href="https://www.youtube.de/pexgraphics"><a target="_blank"><div className="about-yt"><i className="fab fa-youtube"></i></div></a></Link>
                                    <Link href="https://www.twitter.com/pexfx_"><a target="_blank"><div className="about-tw"><i className="fab fa-twitter"></i></div></a></Link>
                                    <Link href="https://www.instagram.com/tobi.css"><a target="_blank"><div className="about-in"><i className="fab fa-instagram"></i></div></a></Link>
                                </div>
                        </div>
                        <div className="about-tiejo">
                            <div className="about-tiejo-img"></div>
                                <h4>Jonas | Tiejo</h4>
                                <h5>Server-Admin</h5>
                                <p>
                                    Jonas ist stolzes Mitglied des Server-Teams, da es ihm viel Spaß bereitet, Macht zu haben.
                                </p>
                                <div className="about-tiejo-social">
                                    <Link href="https://www.twitter.com/jonas_tielck"><a target="_blank"><div className="about-tw"><i className="fab fa-twitter"></i></div></a></Link>
                                    <Link href="https://www.instagram.com/jonas.tlck"><a target="_blank"><div className="about-in"><i className="fab fa-instagram"></i></div></a></Link>
                                </div>
                        </div>
                    </div>
                    <div className="about-box-line-2">
                        <div className="about-mod">
                            <div className="about-toast-img"></div>
                            <div className="about-karahan-img"></div>
                            <div className="about-mod-heads">
                                <h4>Nico | toast!</h4>
                                <h4>Karahan | rack$</h4>
                            </div>
                            <h5>Moderatoren</h5>
                            <p>
                                Die beiden Moderatoren Nico & Karahan kümmern sich um das alltägliche Geschehen auf dem Server. Sie unterstützen die User und tragen neue Ideen
                                zum Server bei. Außerdem bringen sie regelmäßig den Müll raus und putzen das Büro.
                            </p>
                            <div className="about-mod-social">
                                <div className="about-toast-social">
                                    <Link href="https://www.youtube.com/channel/UCRpsOXiq2c99dTW_LUVpHMA"><a target="_blank"><div className="about-yt"><i className="fab fa-youtube"></i></div></a></Link>
                                    <Link href="https://twitter.com/prod_toast"><a target="_blank"><div className="about-tw"><i className="fab fa-twitter"></i></div></a></Link>
                                    <Link href="https://www.instagram.com/fijivshell"><a target="_blank"><div className="about-in"><i className="fab fa-instagram"></i></div></a></Link>
                                </div>
                                <div className="about-karahan-social">
                                    <Link href="https://www.youtube.com/channel/UCtEjcPAsCBzjX8sog0qKmrQ"><a target="_blank"><div className="about-yt"><i className="fab fa-youtube"></i></div></a></Link>
                                    <Link href="https://twitter.com/NaharaksRak"><a target="_blank"><div className="about-tw"><i className="fab fa-twitter"></i></div></a></Link>
                                    <Link href="https://www.instagram.com/lil_naharak/"><a target="_blank"><div className="about-in"><i className="fab fa-instagram"></i></div></a></Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="connect">
            <div className="wrapper">
                <h3>Interesse geweckt?</h3>
                <hr />
                <Link href="ts3server://frostiqz.de?"><a><button><i className="fab fa-teamspeak"></i><span>Join</span></button></a></Link>
            </div>
        </section>
        <section id="viewer">
            <div className="wrapper">
                <h3>Viewer</h3>
                <hr />
                <p>Hier kannst du sehen, wie unser TeamSpeak aufgebaut ist und welche User im Moment online sind.</p>
                <div className="ts3index-viewer" data-serverid="238382" data-style="width=100%25"><a href="https://ts3index.com/?page=server&id=238382">TS3index.com</a></div>
            </div>
        </section>
        <section id="bewerben">
            <div className="wrapper">
                <h3>Bewerben</h3>
                <hr />
                <p>
                    Wenn du dich für einen Rang bewerben möchtest, besuche uns doch auf unserem <Link href="ts3server://frostiqz.de?"><a>TeamSpeak</a></Link> oder
                    schreibe uns eine <Link href="mailto:kontakt@frostiqz.de"><a>E-Mail</a></Link>!
                </p>
            </div>
        </section>
        <Footer />
    </div>
)

export default Index