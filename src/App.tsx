import { MobileHeader } from "./utils/header.tsx";
import BodyComponent  from "./utils/Body.tsx";
import Footer from "./utils/footer.tsx";
import { useState } from 'react';

export default function App() {
  const boxes = ["DEEP EARTH", "NIGHT ARCADE", "SOCCER TEAM VR", "THE GRID", "FROM UP ABOVE VR", "POCKET BOREALIS", "THE CURIOSITY", "MAKE IT FISHEYE"];
  const bgImage = ["bg-[url(assets/images/mobile/image-deep-earth.jpg)]", "bg-[url(assets/images/mobile/image-night-arcade.jpg)]", "bg-[url(assets/images/mobile/image-soccer-team.jpg)]", "bg-[url(assets/images/mobile/image-grid.jpg)]", 
                  "bg-[url(assets/images/mobile/image-from-above.jpg)]", "bg-[url(assets/images/mobile/image-pocket-borealis.jpg)]", "bg-[url(assets/images/mobile/image-curiosity.jpg)]", "bg-[url(assets/images/mobile/image-fisheye.jpg)]"];
  const [activeHeader, setActiveHeader] = useState(true);
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className="[ parent-container ] [ flex flex-col justify-between items-center gap-20 ] [ text-center ] [ p-[0_20px_0_20px] ] [ min-h-screen w-screen ]">

      <MobileHeader 
        activeHeader={activeHeader}
        activeMenu={activeMenu}
      />

      <BodyComponent
        boxes={boxes}
        bgImage={bgImage}
      />

      <Footer />
    </div>
  )
}