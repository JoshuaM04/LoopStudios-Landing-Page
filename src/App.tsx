import hamburgerIcon from "./assets/images/icon-hamburger.svg";

export default function App() {
  return (
    <div className="[ parent-container ] [ flex flex-col justify-between items-center ] [ text-center ] [ p-[20px] ] [ min-h-screen ]">
      <header className="[ grid grid-cols-1 ] [ bg-[url(assets/images/mobile/image-hero.jpg)] bg-center bg-contain bg-no-repeat ] [ m-[-20px] ] [ min-h-[650px] ]">
        <div className="[ flex flex-row items-center justify-between ] [ m-[20px] mb-[-20px] ] [ h-min ]">
          <p className="[ text-white text-left ] [ font-medium ]">loopstudios</p>
          <button className="[ rounded-sm p-1 ] [ hover:cursor-pointer hover:bg-indigo-500 ]" aria-label="drop-down menu"><img src={hamburgerIcon} /></button>

          <nav hidden={true} aria-hidden="true">
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Products</li>
              <li>Support</li>
            </ul>
          </nav>
        </div>

        <h1 className="[ uppercase text-3xl text-left text-slate-300 ] [ border-2 border-slate-300 ] [ p-2 ml-[20px] mr-[20px] ] [ h-[128px] w-[335px] ]">Immersive experiences that deliver</h1>
      </header>

      <main className="w-xs">
        <figure>
          <h2>The leader in interactive VR</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual reality
            projects for some of the best companies around the globe. Our award-winning
            creations have transformed businesses through digital experiences that bind
            to their brand.
          </p>
        </figure>

        <h2>Our creations</h2>

        <div hidden={true} aria-hidden="true">
          Deep earth
          Night arcade
          Soccer team VR
          The grid
          From up above VR
          Pocket borealis
          The curiosity
          Make it fisheye
        </div>
        <button className="uppercase">See all</button>
      </main>

      <footer>
        <h3>loopstudios</h3>

        <nav>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </nav>

        <p>© 2021 Loopstudios. All rights reserved.</p>
      </footer>
    </div>
  )
}