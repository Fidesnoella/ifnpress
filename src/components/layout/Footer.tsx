import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub } from "react-icons/fa"
import pressLogo from '../../assets/press-logo.png';
import ifnpress from '../../assets/ifnpress.png';
import { useSelector } from "react-redux";
import { selectMode } from "../../features/toggleMode";

export default function Footer(): JSX.Element {
    const mode = useSelector(selectMode);
    return (
        <footer className={`${mode === 'light' ? 'bg-[#aad6e8]' : "bg-[#202124] text-white"} w-full mt-20 md:mt-36 py-4`}>
            <div className="max-w-7xl container mx-auto px-4 flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-0">
                <div>
                    <Link to="/">
                        <img src={mode === 'light' ? pressLogo : ifnpress} alt="IFN" className="w-32" />
                    </Link>
                </div>
                <div className="order-2 sm:order-none">
                    <p className={`${mode === 'light' ? "text-white" : "text-[#9d9fa4]"} text-center`}>&copy; 2023 IFN Press, All rights reserved</p>
                </div>
                <div className="flex gap-8 sm:gap-4 order-1 sm:order-none">
                    <a href="mailto:fniragena@gmail.com">
                        <FaEnvelope fontSize={30} className={`${mode === 'light' ? "bg-[#5ebde2] hover:bg-[#5092ac]" : "bg-black hover:bg-[#303134]"} rounded-md p-1`} />
                    </a>
                    <a href="https://github.com/Fidesnoella" target="_blank" className={`${mode === 'light' ? "bg-[#5ebde2] hover:bg-[#5092ac]" : "bg-black hover:bg-[#303134]"} rounded-md p-[0.1875rem]`}>
                        <FaGithub fontSize={25} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
