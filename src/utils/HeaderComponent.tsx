import hamburgerIcon from "../assets/images/icon-hamburger.svg"
import closeIcon from "../assets/images/icon-close.svg";
import { useState } from 'react';

function handleMenu(setIsHeaderHidden: Function, setIsMenuHidden: Function, isHeaderHidden: boolean, isMenuHidden: boolean) {
    if (isHeaderHidden === false && isMenuHidden === true) {
        setIsHeaderHidden(true);
        setIsMenuHidden(false);
    } else {
        setIsHeaderHidden(false);
        setIsMenuHidden(true);
    }
}

export function MobileHeader() {
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);
    const [isMenuHidden, setIsMenuHidden] = useState(true);

    return (
        <header className="[ grid ] [ p-[20px] ] [ min-h-[650px] w-screen ] [ bg-[url(assets/images/mobile/image-hero.jpg)] bg-center bg-cover bg-no-repeat ] select-none">
            <section hidden={isHeaderHidden} aria-hidden={isHeaderHidden} className="[ flex flex-row items-center justify-between ] [ h-min ]">
                <p className="[ text-white text-left ] [ font-medium ]">loopstudios</p>
                <button onClick={() => handleMenu(setIsHeaderHidden, setIsMenuHidden, isHeaderHidden, isMenuHidden)} 
                    className="[ rounded-sm p-1 ] [ hover:cursor-pointer hover:bg-black ] [ transition delay-150 duration-300 ease-in-out hover-translate-y-1 hover:scale-110]" aria-label="drop-down menu">
                    <img src={hamburgerIcon} aria-hidden="true" />
                </button>
            </section>

            <h1 hidden={isHeaderHidden} aria-hidden={isHeaderHidden} className="[ self-start ] [ uppercase text-4xl text-left text-slate-300 tracking-wider font-light ] [ p-5 ] [ border-2 border-slate-300 ]">Immersive experiences that deliver</h1>

            <section className="grid grid-cols 1 auto-rows-min gap-35 m-[-20px] p-5 bg-black text-white" hidden={isMenuHidden} aria-hidden={isMenuHidden}>
                <div className="flex justify-between self-start">
                    <p className="text-2xl font-bold">loopstudios</p>
                    <button onClick={() => handleMenu(setIsHeaderHidden, setIsMenuHidden, isHeaderHidden, isMenuHidden)} aria-label="close-menu"><img src={closeIcon} aria-hidden="true" /></button>
                </div>

                <nav className="text-3xl/15 text-left font-light uppercase select-none">
                    <ul>
                        <li className="transition delay-50 duration-150 ease-in-out hover:scale-102 hover:text-purple-500 active:scale-101"><button>About</button></li>
                        <li className="transition delay-50 duration-150 ease-in-out hover:scale-102 hover:text-purple-500 active:scale-101"><button>Careers</button></li>
                        <li className="transition delay-50 duration-150 ease-in-out hover:scale-102 hover:text-purple-500 active:scale-101"><button>Events</button></li>
                        <li className="transition delay-50 duration-150 ease-in-out hover:scale-102 hover:text-purple-500 active:scale-101"><button>Products</button></li>
                        <li className="transition delay-50 duration-150 ease-in-out hover:scale-102 hover:text-purple-500 active:scale-101"><button>Support</button></li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}