import Link from 'next/link'

const Navigation = () => (
    <header className="global-nav">
            <div className="wrapper">
                <nav>
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/#leistungen"><a>Leistungen</a></Link></li>
                        <li><Link href="/#about"><a>Über uns</a></Link></li>
                        <li><Link href="/#viewer"><a>Viewer</a></Link></li>
                        <li><Link href="/#bewerben"><a>Bewerben</a></Link></li>
                        <li><Link href="#footer"><a>Kontakt</a></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
)

export default Navigation