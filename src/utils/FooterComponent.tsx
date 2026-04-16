import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";

export default function Footer() {
    return (
        <footer className="flex flex-col gap-10 justify-between bg-black text-white text-xs relative bottom-0 w-screen p-10 select-none">
            <h3 className="text-2xl font-semibold">loopstudios</h3>

            <nav>
                <ul className="flex flex-col gap-5">
                    <li className="hover:text-purple-500 hover:scale-150 transition delay-50 duration-150 ease-in-out active:text-purple-500 active:scale-150">About</li>
                    <li className="hover:text-purple-500 hover:scale-150 transition delay-50 duration-150 ease-in-out active:text-purple-500 active:scale-150">Careers</li>
                    <li className="hover:text-purple-500 hover:scale-150 transition delay-50 duration-150 ease-in-out active:text-purple-500 active:scale-150">Events</li>
                    <li className="hover:text-purple-500 hover:scale-150 transition delay-50 duration-150 ease-in-out active:text-purple-500 active:scale-150">Products</li>
                    <li className="hover:text-purple-500 hover:scale-150 transition delay-50 duration-150 ease-in-out active:text-purple-500 active:scale-150">Support</li>
                </ul>
            </nav>

            <section className="flex justify-center gap-5">
                <button className="hover:scale-120 active:scale-120 transition delay-50 ease-in-out" aria-label="Facebook link"><a href="https://www.facebook.com/" target="_blank"><img src={facebookIcon} aria-hidden="true" /></a></button>
                <button className="hover:scale-120 active:scale-120 transition delay-50 ease-in-out" aria-label="Twitter link"><a href="https://x.com/home" target="_blank"><img src={twitterIcon} aria-hidden="true" /></a></button>
                <button className="hover:scale-120 active:scale-120 transition delay-50 ease-in-out" aria-label="Pinterest link"><a href="https://www.pinterest.com/" target="_blank"><img src={pinterestIcon} aria-hidden="true" /></a></button>
                <button className="hover:scale-120 active:scale-120 transition delay-50 ease-in-out" aria-label="Instagram link"><a href="https://www.instagram.com/" target="_blank"><img src={instagramIcon}  aria-hidden="true"/></a></button>
            </section>
            
            <p className="text-gray-500">© 2021 Loopstudios. All rights reserved.</p>
        </footer>
    )
}