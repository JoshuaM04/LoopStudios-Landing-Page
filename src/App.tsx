import Header from "./components/Header.tsx";
import BodyComponent  from "./components/Body.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
  return (
    <div className="[ parent-container ] [ flex flex-col justify-between items-center gap-90 ] [ text-center ] [ min-h-screen w-full box-border] font-alata">
      <Header />
      <BodyComponent />
      <Footer />
    </div>
  )
}