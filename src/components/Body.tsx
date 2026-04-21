import interactiveImg from "../assets/images/mobile/image-interactive.jpg";

interface LayoutProps {
    boxes: Array<string>;
    bgImageMobile: Array<string>;
    bgImageDesktop: Array<string>;
    count: number;
}

function MobileLayout({boxes, bgImageMobile, bgImageDesktop, count}: LayoutProps) {
    return (
        <div className="[ xl:hidden xl:aria-hidden] [ grid grid-cols-1 gap-20 ] [ p-[0_20px_0_20px] ] [ w-full ] [ md:gap-50 ]">
            <section className="[ flex flex-col gap-5 items-center ] [ w-full ] [ md:relative md:w-200 md:place-self-center ]">
                <img src={interactiveImg} alt="A man in a blue t-shirt wearing a VR-headset and is in a T-Rex like posture with his arms." className="place-self-start md:h-90 md:w-130" />

                <div className="[ flex flex-col ] [ bg-white ] [ md:text-left md:gap-5 md:w-98 md:absolute md:top-30 md:right-0 md:p-10 ]">
                    <h2 className="[ text-3xl tracking-wider font-light capitalize ] [ md:text-4xl ]">The leader in interactive VR</h2>

                    <p className="[ text-gray-500 font-medium ] [ md:text-xs ]">
                        Founded in 2011, Loopstudios has been producing world-class virtual reality
                        projects for some of the best companies around the globe. Our award-winning
                        creations have transformed businesses through digital experiences that bind
                        to their brand.
                    </p>
                </div>
            </section>

            <section className="grid grid-cols-1 gap-10 md:min-w-200 md:place-self-center">
                <div className="flex justify-center md:justify-between">
                    <h2 className="text-3xl tracking-wider font-light uppercase md:place-self-start xl:text-5xl">Our creations</h2>
                    <button className="uppercase tracking-wider border-2 w-30 xl:w-50 xl:text-xl xl:p-3 p-1 transition delay-150 duration-300 ease-in-out hover:scale-115 active:scale-115 select-none hover:cursor-pointer place-self-center max-md:hidden max-md:aria-hidden">See all</button>
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
                                        className={`[ text-white text-xl text-bottom font-light ] [ transition delay-150 duration-300 ease-in-out hover:scale-102 hover:grayscale active:grayscale active:scale-105 hover:cursor-pointer ] [ ${bgImageDesktop[count]} bg-center bg-cover bg-no-repeat ] [ p-5 ] [ min-h-80 ] [ relative ] max-md:hidden max-md:aria-hidden`}>
                                    <h3 className="absolute bottom-10 select-none">{item}</h3>
                                </section>
                            </div>   
                        )
                    })
                }
                </div>

                <button className="uppercase tracking-wider border-2 w-30 p-1 transition delay-150 duration-300 ease-in-out hover:scale-115 active:scale-115 select-none hover:cursor-pointer place-self-center md:hidden md:aria-hidden">See all</button>
            </section>
        </div>
    )
}

function DesktopLayout({boxes, bgImageDesktop, count}: LayoutProps) {
    return (
        <div className="[ max-xl:hidden max-xl:aria-hidden ] [ grid grid-cols-1 gap-150 ] [ p-[0_20px_0_20px] ] [ w-full ]">
            <section className="[ flex flex-col gap-5 items-start place-self-center ] [ relative ] [ w-350 ]">
                <img src={interactiveImg} alt="A man in a blue t-shirt wearing a VR-headset and is in a T-Rex like posture with his arms." className="h-130 w-200" />

                <div className="[ flex flex-col gap-5 ] [ text-left ] [ absolute right-0 top-50 ] [ bg-white ] [ w-190 p-20 ]">
                    <h2 className="font-light capitalize text-6xl tracking-widest">The leader in interactive VR</h2>
                    <p className="text-gray-500 text-lg font-medium">
                        Founded in 2011, Loopstudios has been producing world-class virtual reality
                        projects for some of the best companies around the globe. Our award-winning
                        creations have transformed businesses through digital experiences that bind
                        to their brand.
                    </p>
                </div>
            </section>

            <section className="[ grid grid-cols-1 gap-10 place-self-center ] [ min-w-300 ]">
                <div className="flex justify-between">
                    <h2 className="[ text-5xl tracking-wider font-light uppercase ] [ place-self-start ]">Our creations</h2>
                    <button className="[ text-xl uppercase tracking-wider ] [ place-self-center ] [ border-2 ] [ p-3 ] [ w-50 ] [ transition delay-150 duration-300 ease-in-out hover:scale-115 active:scale-115 select-none hover:cursor-pointer ]">See all</button>
                </div>

                <div className="[ grid gap-5 grid-rows-2 grid-cols-4 ] [ w-full ]">
                {
                    boxes.map((item, index) => {
                        count++;

                        return (
                            <div>
                                <section key={index} className={`[ text-white text-xl text-bottom font-light ] [ ${bgImageDesktop[count]} bg-center bg-cover bg-no-repeat ] [ p-5 ] [ min-h-125 ] [ relative ] [ transition delay-150 duration-300 ease-in-out hover:scale-102 hover:grayscale active:grayscale active:scale-105 hover:cursor-pointer ]`}>
                                    <h3 className="[ text-3xl ] [ absolute bottom-10 ] [ select-none ]">{item}</h3>
                                </section>
                            </div>   
                        )
                    })
                }
                </div>
            </section>
        </div>
    )
}

export default function Body() {
    const boxes = ["DEEP EARTH", "NIGHT ARCADE", "SOCCER TEAM VR", "THE GRID", "FROM UP ABOVE VR", "POCKET BOREALIS", "THE CURIOSITY", "MAKE IT FISHEYE"];
    const bgImageMobile = ["bg-[url(assets/images/mobile/image-deep-earth.jpg)]", "bg-[url(assets/images/mobile/image-night-arcade.jpg)]", "bg-[url(assets/images/mobile/image-soccer-team.jpg)]", "bg-[url(assets/images/mobile/image-grid.jpg)]", "bg-[url(assets/images/mobile/image-from-above.jpg)]", "bg-[url(assets/images/mobile/image-pocket-borealis.jpg)]", "bg-[url(assets/images/mobile/image-curiosity.jpg)]", "bg-[url(assets/images/mobile/image-fisheye.jpg)]"];
    const bgImageDesktop = ["bg-[url(assets/images/desktop/image-deep-earth.jpg)]", "bg-[url(assets/images/desktop/image-night-arcade.jpg)]", "bg-[url(assets/images/desktop/image-soccer-team.jpg)]", "bg-[url(assets/images/desktop/image-grid.jpg)]", "bg-[url(assets/images/desktop/image-from-above.jpg)]", "bg-[url(assets/images/desktop/image-pocket-borealis.jpg)]", "bg-[url(assets/images/desktop/image-curiosity.jpg)]", "bg-[url(assets/images/desktop/image-fisheye.jpg)]"];
    let count = -1;
    
    return (
        <main className="grid grid-cols-1 gap-20 w-full md:gap-50 p-[0_20px_0_20px] snap-start scroll-mt-6">
            <MobileLayout 
                boxes={boxes}
                bgImageMobile={bgImageMobile}
                bgImageDesktop={bgImageDesktop}
                count={count}
            />

            <DesktopLayout 
                boxes={boxes}
                bgImageMobile={bgImageMobile}
                bgImageDesktop={bgImageDesktop}
                count={count}
            />
        </main>
    )
}