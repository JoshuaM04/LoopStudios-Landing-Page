import twitterIcon from "../assets/images/icon-twitter.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";

export default function Footer() {
    return (
        <footer className="flex flex-col gap-10 justify-between bg-black text-white text-xs relative bottom-0 w-screen p-10 select-none">
            <h3 className="text-2xl font-semibold">loopstudios</h3>

            <nav>
                <ul className="flex flex-col gap-5">
                    <li className="hover:text-purple-500 hover:scale-150 transition delay-50 duration-150 ease-in-out active:text-purple-500 active:scale-150"><a href="#">About</a></li>
                    <li className="hover:text-purple-500 hover:scale-150 transition delay-50 duration-150 ease-in-out active:text-purple-500 active:scale-150"><a href="#">Careers</a></li>
                    <li className="hover:text-purple-500 hover:scale-150 transition delay-50 duration-150 ease-in-out active:text-purple-500 active:scale-150"><a href="#">Event</a>s</li>
                    <li className="hover:text-purple-500 hover:scale-150 transition delay-50 duration-150 ease-in-out active:text-purple-500 active:scale-150"><a href="#">Products</a></li>
                    <li className="hover:text-purple-500 hover:scale-150 transition delay-50 duration-150 ease-in-out active:text-purple-500 active:scale-150"><a href="#">Support</a></li>
                </ul>
            </nav>

            <section className="flex justify-center gap-5">
                <button className="hover:scale-120 active:scale-120 transition delay-50 ease-in-out" aria-label="Facebook link">
                    <a href="https://www.facebook.com/" target="_blank">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="hover:fill-blue-200">
                            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" fill="#FFF" fill-rule="nonzero"/>
                        </svg>
                    </a>
                </button>
                <button className="hover:scale-120 active:scale-120 transition delay-50 ease-in-out" aria-label="Twitter link"><a href="https://x.com/home" target="_blank"><img src={twitterIcon} aria-hidden="true" /></a></button>
                <button className="hover:scale-120 active:scale-120 transition delay-50 ease-in-out" aria-label="Pinterest link"><a href="https://www.pinterest.com/" target="_blank"><img src={pinterestIcon} aria-hidden="true" /></a></button>
                <button className="hover:scale-120 active:scale-120 transition delay-50 ease-in-out" aria-label="Instagram link"><a href="https://www.instagram.com/" target="_blank"><img src={instagramIcon}  aria-hidden="true"/></a></button>
            </section>
            
            <p className="text-gray-500">© 2021 Loopstudios. All rights reserved.</p>
        </footer>
    )
}