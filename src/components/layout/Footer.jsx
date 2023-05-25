import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub } from "react-icons/fa"
import logo from "../../assets/press-logo.png"

export default function Footer() {
    return (
        <footer className="bg-[#aad6e8] w-full mt-20 md:mt-36 py-4">
            <div className="max-w-7xl container mx-auto px-4 flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-0">
                <div>
                    <Link to="/">
                        <img src={logo} alt="" className="w-32" />
                    </Link>
                </div>
                <div className="order-2 sm:order-none">
                    <p className="text-center">&copy; 2023 IFN Press, All rights reserved</p>
                </div>
                <div className="flex gap-8 sm:gap-4 order-1 sm:order-none">
                    <a href="mailto:fniragena@gmail.com">
                        <FaEnvelope fontSize={30} className="rounded-md bg-[#5ebde2] hover:bg-[#5092ac] p-1" />
                    </a>
                    <a href="https://github.com/Fidesnoella" target="_blank" className="rounded-md bg-[#5ebde2] hover:bg-[#5092ac] p-[0.1875rem]">
                        <FaGithub fontSize={25} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
