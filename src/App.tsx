import { MobileHeader } from "./components/Header.tsx";
import BodyComponent  from "./components/Body.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
  return (
    <div className="[ parent-container ] [ flex flex-col justify-between items-center gap-20 2xl:gap-100 ] [ text-center ] [ p-[0_20px_0_20px] ] [ min-h-screen max-w-screen box-border] font-alata">
      <MobileHeader />
      <BodyComponent />
      <Footer />
    </div>
  )
}