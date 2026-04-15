import { MobileHeader } from "./utils/HeaderComponent.tsx";
import BodyComponent  from "./utils/Body.tsx";
import Footer from "./utils/FooterComponent.tsx";

export default function App() {
  return (
    <div className="[ parent-container ] [ flex flex-col justify-between items-center gap-20 ] [ text-center ] [ p-[0_20px_0_20px] ] [ min-h-screen w-screen ]">
      <MobileHeader />
      <BodyComponent />
      <Footer />
    </div>
  )
}