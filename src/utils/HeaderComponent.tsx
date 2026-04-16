import hamburgerIcon from "../assets/images/icon-hamburger.svg"
import closeIcon from "../assets/images/icon-close.svg";
import { useState, useEffect } from 'react';

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
    const [heading, setHeading] = useState("");
    const headingVal = "Immersive experiences that deliver";
    let index = 0;
    const speed = 100;

    useEffect(() => {
        typeWriter();

        function typeWriter() {
            if (index < headingVal.length) {
                setHeading(headingVal.substring(0, index + 1));
                index++;
                setTimeout(typeWriter, speed);
            }
        }
    }, [])

    return (
        <header className="[ grid ] [ p-[20px] ] [ min-h-[650px] w-screen ] [ bg-[url(assets/images/mobile/image-hero.jpg)] bg-center bg-cover bg-no-repeat ] select-none">
            <section hidden={isHeaderHidden} aria-hidden={isHeaderHidden} className="[ flex flex-row items-center justify-between ] [ h-min ]">
                <p className="[ text-white text-left ] [ font-medium ]">loopstudios</p>
                <button onClick={() => handleMenu(setIsHeaderHidden, setIsMenuHidden, isHeaderHidden, isMenuHidden)} 
                    className="[ rounded-sm p-1 ] [ hover:cursor-pointer transition delay-50 duration-150 ease-in-out hover:scale-120 active:scale-120 ]" aria-label="drop-down menu" aria-controls="HeaderMenu">
                    <img src={hamburgerIcon} className="pointer-events-none" aria-hidden="true" />
                </button>
            </section>

            <h1 className="[ self-start ] [ uppercase text-4xl text-left text-slate-300 tracking-wider font-light ] [ p-5 ] [ border-2 border-slate-300 ]" hidden={isHeaderHidden} aria-hidden={isHeaderHidden}>
                {heading}
            </h1>

            <section id="HeaderMenu" className="grid grid-cols 1 auto-rows-min gap-35 m-[-20px] p-5 bg-black text-white" hidden={isMenuHidden} aria-hidden={isMenuHidden} aria-expanded={!(isMenuHidden)}>
                <div className="flex justify-between self-start">
                    <p className="text-2xl font-bold">loopstudios</p>
                    <button onClick={() => handleMenu(setIsHeaderHidden, setIsMenuHidden, isHeaderHidden, isMenuHidden)} 
                            className="hover:cursor-pointer transition delay-50 duration-150 ease-in-out hover:scale-120 active:scale-120" aria-label="close-menu">
                        <img src={closeIcon} className="pointer-events-none" aria-hidden="true" aria-controls="HeaderMenu"/>
                    </button>
                </div>

                <nav className="text-3xl/15 text-left font-light uppercase select-none">
                    <ul>
                        <li className="transition delay-50 duration-150 ease-in-out hover:scale-102 hover:text-purple-500 active:scale-102 active:text-purple-500"><a href="#">About</a></li>
                        <li className="transition delay-50 duration-150 ease-in-out hover:scale-102 hover:text-purple-500 active:scale-102 active:text-purple-500"><a href="#">Careers</a></li>
                        <li className="transition delay-50 duration-150 ease-in-out hover:scale-102 hover:text-purple-500 active:scale-102 active:text-purple-500"><a href="#">Events</a></li>
                        <li className="transition delay-50 duration-150 ease-in-out hover:scale-102 hover:text-purple-500 active:scale-102 active:text-purple-500"><a href="#">Products</a></li>
                        <li className="transition delay-50 duration-150 ease-in-out hover:scale-102 hover:text-purple-500 active:scale-102 active:text-purple-500"><a href="#">Support</a></li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}