import logo from "../assets/press-logo.png"
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className='bg-[#aad6e8] w-full'>
            <div className="max-w-7xl container mx-auto flex items-center justify-between py-2 px-4">
                <img src={logo} alt="IFN Press" className="h-16 cursor-pointer" />
                <span className="bg-[#90a5c5] rounded-full hover:bg-[#7489a9] p-2 cursor-pointer">
                    <FaSearch fontSize={20} />
                </span>
            </div>
        </nav>
    );
}