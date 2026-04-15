import hamburgerIcon from "../assets/images/icon-hamburger.svg"
import { useState } from 'react';

export function MobileHeader() {
    const [activeHeader, setActiveHeader] = useState(true);
    const [activeMenu, setActiveMenu] = useState(false);

    return (
        <header className="[ grid ] [ p-5 ] [ min-h-[650px] w-screen ] [ bg-[url(assets/images/mobile/image-hero.jpg)] bg-center bg-cover bg-no-repeat ]">
            <section hidden={!(activeHeader)} aria-hidden={!(activeHeader)} className="[ flex flex-row items-center justify-between ] [ h-min ]">
                <p className="[ text-white text-left ] [ font-medium ]">loopstudios</p>
                <button className="[ rounded-sm p-1 ] [ hover:cursor-pointer hover:bg-indigo-500 ]" aria-label="drop-down menu"><img src={hamburgerIcon} /></button>
            </section>

            <nav hidden={!(activeMenu)} aria-hidden={!(activeMenu)}>
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                </ul>
            </nav>

            <h1 hidden={!(activeHeader)} aria-hidden={!(activeHeader)} className="[ self-start ] [ uppercase text-4xl text-left text-slate-300 tracking-wider font-light ] [ p-5 ] [ border-2 border-slate-300 ]">Immersive experiences that deliver</h1>
        </header>
    );
}