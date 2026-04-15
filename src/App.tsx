import hamburgerIcon from "./assets/images/icon-hamburger.svg";
import interactiveImg from "./assets/images/mobile/image-interactive.jpg";
import facebookIcon from "./assets/images/icon-facebook.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";
import pinterestIcon from "./assets/images/icon-pinterest.svg";
import instagramIcon from "./assets/images/icon-instagram.svg";
// import { useState } from 'react';

/* interface MobileHeader {
  activeHeader: boolean;
  activeMenu: boolean;
} */

/* function MobileHeader(activeHeader: boolean, activeMenu: boolean) {
  console.log("Active Header: " + activeHeader);

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
} */

export default function App() {
  const boxes = ["DEEP EARTH", "NIGHT ARCADE", "SOCCER TEAM VR", "THE GRID", "FROM UP ABOVE VR", "POCKET BOREALIS", "THE CURIOSITY", "MAKE IT FISHEYE"];
  const bgImage = ["bg-[url(assets/images/mobile/image-deep-earth.jpg)]", "bg-[url(assets/images/mobile/image-night-arcade.jpg)]", "bg-[url(assets/images/mobile/image-soccer-team.jpg)]", "bg-[url(assets/images/mobile/image-grid.jpg)]", 
                  "bg-[url(assets/images/mobile/image-from-above.jpg)]", "bg-[url(assets/images/mobile/image-pocket-borealis.jpg)]", "bg-[url(assets/images/mobile/image-curiosity.jpg)]", "bg-[url(assets/images/mobile/image-fisheye.jpg)]"];
  // const [activeHeader, setActiveHeader] = useState(true);
  // const [activeMenu, setActiveMenu] = useState(false);
  let count = -1;

  // This will take the place of the header element in the App functional component. The header element should be moved within the return statement of the MobileHeader functional component
  /* <MobileHeader 
        activeHeader={activeHeader}
        activeMenu={activeMenu}
  /> */

  return (
    <div className="[ parent-container ] [ flex flex-col justify-between items-center gap-20 ] [ text-center ] [ p-[0_20px_0_20px] ] [ min-h-screen w-screen ]">

      <header className="[ grid ] [ p-5 ] [ min-h-[650px] w-screen ] [ bg-[url(assets/images/mobile/image-hero.jpg)] bg-center bg-cover bg-no-repeat ]">
        <section hidden={false} aria-hidden={false} className="[ flex flex-row items-center justify-between ] [ h-min ]">
          <p className="[ text-white text-left ] [ font-medium ]">loopstudios</p>
          <button className="[ rounded-sm p-1 ] [ hover:cursor-pointer hover:bg-indigo-500 ]" aria-label="drop-down menu"><img src={hamburgerIcon} /></button>
        </section>

        <nav hidden={true} aria-hidden={true}>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Products</li>
              <li>Support</li>
            </ul>
        </nav>

        <h1 hidden={false} aria-hidden={false} className="[ self-start ] [ uppercase text-4xl text-left text-slate-300 tracking-wider font-light ] [ p-5 ] [ border-2 border-slate-300 ]">Immersive experiences that deliver</h1>
      </header>

      <main className="flex flex-col gap-20">
        <section className="flex flex-col gap-5">
          <img src={interactiveImg} alt="A man in a blue t-shirt wearing a VR-headset and is in a T-Rex like posture with his arms." />

          <h2 className="text-3xl tracking-wider font-light capitalize">The leader in interactive VR</h2>

          <p className="text-gray-500 font-medium">
            Founded in 2011, Loopstudios has been producing world-class virtual reality
            projects for some of the best companies around the globe. Our award-winning
            creations have transformed businesses through digital experiences that bind
            to their brand.
          </p>
        </section>

        <section className="flex flex-col gap-10 items-center">
          <h2 className="text-3xl tracking-wider font-light uppercase">Our creations</h2>

          <div className="grid grid-rows-8 gap-5 w-full">
            {
              boxes.map((item, index) => {
                count++;
                return (
                  <section key={index} className={`[ text-white text-xl text-bottom font-light ] [ ${bgImage[count]} bg-center bg-cover bg-no-repeat ] [ p-5 ] [ min-h-30 ] [ relative ]`}>
                    <h3 className="absolute bottom-5">{item}</h3>
                  </section>
                )
              })
            }
          </div>

          <button className="uppercase tracking-wider border-2 w-30 p-1">See all</button>
        </section>
      </main>

      <footer className="flex flex-col gap-10 justify-between bg-black text-white text-xs relative bottom-0 w-screen p-10">
        <h3 className="text-2xl font-semibold">loopstudios</h3>

        <nav>
          <ul className="flex flex-col gap-5">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </nav>

        <section className="flex justify-center gap-5">
          <button aria-label="Facebook link"><img src={facebookIcon} aria-hidden="true" /></button>
          <button aria-label="Twitter link"><img src={twitterIcon} aria-hidden="true" /></button>
          <button aria-label="Pinterest link"><img src={pinterestIcon} aria-hidden="true" /></button>
          <button aria-label="Instagram link"><img src={instagramIcon}  aria-hidden="true"/></button>
        </section>
        
        <p className="text-gray-500">© 2021 Loopstudios. All rights reserved.</p>
      </footer>
    </div>
  )
}