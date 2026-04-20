import hamburgerIcon from "../assets/images/icon-hamburger.svg"
import closeIcon from "../assets/images/icon-close.svg";
import { useState, useEffect } from 'react';

interface MobileProps {
    isHeaderHidden: boolean;
    setIsHeaderHidden: Function;
    isMenuHidden: boolean;
    setIsMenuHidden: Function;
    heading: string;
}

interface DesktopProps {
    heading: string;
}

function MobileHeader({isHeaderHidden, setIsHeaderHidden, isMenuHidden, setIsMenuHidden, heading}: MobileProps) {
    return (
        <div className="[ xl:hidden xl:aria-hidden ] [ min-h-full ]">
            <section id="DefaultHeader" className="grid grid-cols-1 gap-50" hidden={isHeaderHidden} aria-hidden={isHeaderHidden}>
                <div className="flex items-center justify-between">
                    <p className="[ text-3xl text-white text-left ] [ font-medium ]">loopstudios</p>
                    
                    <button onClick={() => handleMenu(setIsHeaderHidden, setIsMenuHidden, isHeaderHidden, isMenuHidden)} className="[ rounded-sm ] [ p-1 ] [ hover:cursor-pointer ] [ transition delay-50 duration-150 ease-in-out hover:scale-120 active:scale-120 ]" aria-label="drop-down menu" aria-controls="HeaderMenu">
                        <img src={hamburgerIcon} className="pointer-events-none" aria-hidden="true" />
                    </button>
                </div>

                <h1 className="[ self-start ] [ uppercase text-5xl md:text-7xl text-left text-white tracking-widest font-light ] [ p-5 ] [ border-2 border-white ] [ min-h-23 ] [ md:w-150 md:text-7xl ] animate-fade-in-textBox" hidden={isHeaderHidden} aria-hidden={isHeaderHidden}>
                    {heading}
                </h1>
            </section>

            <section id="HeaderMenu" className="[ grid grid-cols 1 auto-rows-min gap-35 ] [ p-10 -m-5 ] [ bg-black ] [ text-white ] [ animate-fade-in-dropDownMenu ] [ h-163 ] [ md:m-[-40px_-50px_-40px_-50px] md:p-[40px_50px_40px_50px] ]" hidden={isMenuHidden} aria-hidden={isMenuHidden} aria-expanded={!(isMenuHidden)}>
                <div className="flex justify-between self-start">
                    <p className="text-3xl font-bold">loopstudios</p>
                    <button onClick={() => handleMenu(setIsHeaderHidden, setIsMenuHidden, isHeaderHidden, isMenuHidden)} className="hover:cursor-pointer transition delay-50 duration-150 ease-in-out hover:scale-120 active:scale-120" aria-label="close-menu">
                        <img src={closeIcon} className="pointer-events-none" aria-hidden="true" aria-controls="HeaderMenu"/>
                    </button>
                </div>

                <nav className="[ text-3xl/15 text-left font-light uppercase ] [ select-none ]">
                    <ul>
                        <li className="transition delay-50 duration-150 ease-in-out hover:scale-102 hover:text-purple-500 active:scale-102 active:text-purple-500 animate-fade-in-about"><a href="#">About</a></li>
                        <li className="transition delay-50 duration-150 ease-in-out hover:scale-102 hover:text-purple-500 active:scale-102 active:text-purple-500 animate-fade-in-careers"><a href="#">Careers</a></li>
                        <li className="transition delay-50 duration-150 ease-in-out hover:scale-102 hover:text-purple-500 active:scale-102 active:text-purple-500 animate-fade-in-events"><a href="#">Events</a></li>
                        <li className="transition delay-50 duration-150 ease-in-out hover:scale-102 hover:text-purple-500 active:scale-102 active:text-purple-500 animate-fade-in-products"><a href="#">Products</a></li>
                        <li className="transition delay-50 duration-150 ease-in-out hover:scale-102 hover:text-purple-500 active:scale-102 active:text-purple-500 animate-fade-in-support"><a href="#">Support</a></li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}

function DesktopHeader({heading}: DesktopProps) {
    return (
        <div className="[ max-xl:hidden max-xl:aria-hidden ]">
            <section className="grid grid-cols-1 gap-100">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-5xl text-white text-left font-medium">loopstudios</p>

                    <nav className="[ text-white text-xl ] [ inline-flex gap-10 ]">
                        <a href="#" className="hover:border-b active:border-b">About</a>
                        <a href="#" className="hover:border-b active:border-b">Careers</a>
                        <a href="#" className="hover:border-b active:border-b">Events</a>
                        <a href="#" className="hover:border-b active:border-b">Products</a>
                        <a href="#" className="hover:border-b active:border-b">Support</a>
                    </nav>
                </div>

                <h1 className="[ place-self-start ] [ uppercase text-9xl text-left text-white tracking-widest font-light ] [ p-5 ] [ border-2 border-white ] [ w-242 min-h-45 ] [ animate-fade-in-textBox ]">
                    {heading}
                </h1>
            </section>
        </div>
    )
}

function handleMenu(setIsHeaderHidden: Function, setIsMenuHidden: Function, isHeaderHidden: boolean, isMenuHidden: boolean) {
    if (isHeaderHidden === false && isMenuHidden === true) {
        setIsHeaderHidden(true);
        setIsMenuHidden(false);
    } else {
        setIsHeaderHidden(false);
        setIsMenuHidden(true);
    }
}

export default function Header() {
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);
    const [isMenuHidden, setIsMenuHidden] = useState(true);
    const [heading, setHeading] = useState("");
    const headingVal = "Immersive experiences that deliver";
    let index = 0;
    const speed = 100;

    useEffect(() => {
        setTimeout(typeWriter, 1000);

        function typeWriter() {
            if (index < headingVal.length) {
                setHeading(headingVal.substring(0, index + 1));
                index++;
                setTimeout(typeWriter, speed);
            }
        }
    }, [])

    return (
        <header className="[ p-5 m-[0_-20px_0_-20px] md:p-[40px_50px_40px_50px] ] [ h-162.5 w-full xl:min-h-dvh ] [ bg-[url(assets/images/mobile/image-hero.jpg)] bg-center bg-cover bg-no-repeat md:bg-[url(assets/images/desktop/image-hero.jpg)] ] [ select-none ]">
            <MobileHeader 
                isHeaderHidden={isHeaderHidden}
                setIsHeaderHidden={setIsHeaderHidden}
                isMenuHidden={isMenuHidden}
                setIsMenuHidden={setIsMenuHidden}
                heading={heading}
            />

            <DesktopHeader
                heading={heading}
            />
        </header>
    );
}