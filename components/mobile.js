import Link from 'next/link'

const openNav = () => document.getElementById("menu-mobile").style.width = "25rem";
const closeNav = () => document.getElementById("menu-mobile").style.width = "0";

const MoveMobile = () => (
    <header className="mobile-global-nav">
            <nav className="menu" id="menu-mobile">
                <a onClick={closeNav} href="javascript:void(0)" className="menu-close menu-icons">
                </a>
                <li>
                    <a onClick={closeNav} href="javascript:void(0)" className="menu-close menu-icons"></a>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Über uns</a>
                </li>
                <li>
                    <a href="/">Viewer</a>
                </li>
            </nav>
            <section className="items">
                <div className="wrapper">
                    <a onClick={openNav} href="javascript:void(0)" className="menu-icons">
                        <i className="fas fa-bars"></i>
                    </a>
                    <a href="/" className="logo-mobile"></a>
                </div>
            </section>
        </header>
)

export default MoveMobile