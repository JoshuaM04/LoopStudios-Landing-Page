export default function App() {
  return (
    <div className="parent-container min-h-screen [ grid grid-rows-3 justify-center items-center ] text-center">
      <header>
        <nav hidden={true} aria-hidden="true">
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </nav>

        <h1>Immersive experiences that deliver</h1>
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