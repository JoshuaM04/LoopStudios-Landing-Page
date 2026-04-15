import interactiveImg from "../assets/images/mobile/image-interactive.jpg";

interface BodyProps {
  boxes: Array<String>;
  bgImage: Array<String>;
} 

export default function Body({ boxes, bgImage}: BodyProps) {
    let count = -1;
    
    return (
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
    )
}