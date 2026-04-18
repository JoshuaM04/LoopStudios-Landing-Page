import interactiveImg from "../assets/images/mobile/image-interactive.jpg";

export default function Body() {
    const boxes = ["DEEP EARTH", "NIGHT ARCADE", "SOCCER TEAM VR", "THE GRID", "FROM UP ABOVE VR", "POCKET BOREALIS", "THE CURIOSITY", "MAKE IT FISHEYE"];
    const bgImageMobile = ["bg-[url(assets/images/mobile/image-deep-earth.jpg)]", "bg-[url(assets/images/mobile/image-night-arcade.jpg)]", "bg-[url(assets/images/mobile/image-soccer-team.jpg)]", "bg-[url(assets/images/mobile/image-grid.jpg)]", 
                            "bg-[url(assets/images/mobile/image-from-above.jpg)]", "bg-[url(assets/images/mobile/image-pocket-borealis.jpg)]", "bg-[url(assets/images/mobile/image-curiosity.jpg)]", "bg-[url(assets/images/mobile/image-fisheye.jpg)]"];
    const bgImageDesktop = ["bg-[url(assets/images/desktop/image-deep-earth.jpg)]", "bg-[url(assets/images/desktop/image-night-arcade.jpg)]", "bg-[url(assets/images/desktop/image-soccer-team.jpg)]", "bg-[url(assets/images/desktop/image-grid.jpg)]", 
                            "bg-[url(assets/images/desktop/image-from-above.jpg)]", "bg-[url(assets/images/desktop/image-pocket-borealis.jpg)]", "bg-[url(assets/images/desktop/image-curiosity.jpg)]", "bg-[url(assets/images/desktop/image-fisheye.jpg)]"];
    let count = -1;
    
    return (
        <main className="grid grid-cols-1 gap-20 w-full md:gap-50">
            <section className="flex flex-col gap-5 items-center md:items-start w-full md:relative md:max-w-200 md:place-self-center 2xl:min-w-350">
                <img src={interactiveImg} alt="A man in a blue t-shirt wearing a VR-headset and is in a T-Rex like posture with his arms." className="md:h-90 md:w-130 2xl:h-130 2xl:w-200" />

                <div className="flex flex-col md:text-left md:gap-5 md:w-98 md:absolute md:top-30 md:right-0 md:p-10 bg-white 2xl:top-50 2xl:w-190 2xl:p-20">
                    <h2 className="text-3xl tracking-wider font-light capitalize md:text-4xl 2xl:text-6xl 2xl:tracking-widest">The leader in interactive VR</h2>
                    <p className="text-gray-500 font-medium md:text-xs 2xl:text-lg">
                        Founded in 2011, Loopstudios has been producing world-class virtual reality
                        projects for some of the best companies around the globe. Our award-winning
                        creations have transformed businesses through digital experiences that bind
                        to their brand.
                    </p>
                </div>
            </section>

            <section className="grid grid-cols-1 gap-10 md:min-w-200 md:place-self-center 2xl:min-w-350">
                <div className="flex justify-center md:justify-between">
                    <h2 className="text-3xl tracking-wider font-light uppercase md:place-self-start 2xl:text-5xl">Our creations</h2>
                    <button className="uppercase tracking-wider border-2 w-30 2xl:w-50 2xl:text-xl 2xl:p-3 p-1 transition delay-150 duration-300 ease-in-out hover:scale-115 active:scale-115 select-none hover:cursor-pointer place-self-center max-md:hidden max-md:aria-hidden">See all</button>
                </div>

                <div className="grid grid-rows-8 gap-5 w-full md:grid-rows-2 md:grid-cols-4">
                {
                    boxes.map((item, index) => {
                    count++;
                    return (
                        <div>
                            <section key={index} 
                                     className={`[ text-white text-xl text-bottom font-light ] [ transition delay-150 duration-300 ease-in-out hover:scale-105 active:scale-105 hover:cursor-pointer ] [ ${bgImageMobile[count]} bg-center bg-cover bg-no-repeat ] [ p-5 ] [ min-h-30 ] [ relative ] md:hidden md-aria-hidden`}>
                                <h3 className="absolute bottom-5 select-none">{item}</h3>
                            </section>
                            <section key={index} 
                                     className={`[ text-white text-xl text-bottom font-light ] [ transition delay-150 duration-300 ease-in-out hover:scale-102 hover:grayscale active:grayscale active:scale-105 hover:cursor-pointer ] [ ${bgImageDesktop[count]} bg-center bg-cover bg-no-repeat ] [ p-5 ] [ min-h-80 2xl:min-h-150 ] [ relative ] max-md:hidden max-md:aria-hidden`}>
                                <h3 className="absolute bottom-10 2xl:text-3xl select-none">{item}</h3>
                            </section>
                        </div>   
                    )
                    })
                }
                </div>

                <button className="uppercase tracking-wider border-2 w-30 p-1 transition delay-150 duration-300 ease-in-out hover:scale-115 active:scale-115 select-none hover:cursor-pointer place-self-center md:hidden md:aria-hidden">See all</button>
            </section>
        </main>
    )
}