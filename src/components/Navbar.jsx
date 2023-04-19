import logo from "../assets/press-logo.png"
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav>
            <div className='bg-[#aad6e8] w-full'>
                <div className="max-w-7xl container mx-auto flex items-center justify-between py-2 px-4">
                    <img src={logo} alt="IFN Press" className="h-16 cursor-pointer" />
                    <span className="bg-[#90a5c5] rounded-full hover:bg-[#7489a9] p-2 cursor-pointer">
                        <FaSearch fontSize={20} />
                    </span>
                </div>
            </div>
            <div>
                <div className="max-w-7xl container mx-auto px-6 py-10">
                    <ul className="flex justify-between">
                        {
                            [1, 2, 3, 4, 5, 6, 7].map(() => <li className="bg-[#aad6e8] py-2 px-8 cursor-pointer text-gray-800 hover:bg-[#7ecceb]">business</li>)
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}