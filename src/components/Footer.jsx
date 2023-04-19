import { VscMail, VscGithub } from "react-icons/vsc"
import logo from "../assets/press-logo.png"

export default function Footer() {
    return (
        <footer className="bg-[#aad6e8] w-full mt-10 py-4">
            <div className="max-w-7xl container mx-auto px-4 flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-0">
                <div>
                    <img src={logo} alt="" className="w-32" />
                </div>
                <div className="order-2 sm:order-none">
                    <p>&copy; 2023 IFN Press</p>
                </div>
                <div className="flex gap-4 order-1 sm:order-none">
                    <a href="mailto:youremail@example.com"><VscMail fontSize={30} /></a>
                    <a href="https://github.com/Fidesnoella"><VscGithub fontSize={25} /></a>
                </div>
            </div>
        </footer>
    );
}
