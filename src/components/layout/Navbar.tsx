import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import pressLogo from '../../assets/press-logo.png';
import ifnpress from '../../assets/ifnpress.png';
import { FaSearch, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { selectMode, setMode } from "../../features/toggleMode";
import { useActions } from "../../store/hook";
import MenuCategories from "../sections/MenuCategories";

export default function Navbar(): JSX.Element {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const mode = useSelector(selectMode);
    const { searchArticles } = useActions()
    const { id } = useParams()

    const handleSubmit = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            searchArticles(searchQuery) as unknown as string;
            navigate("/search/your_result")
            setSearchQuery("")
            setShowSearch(false)
        }
    };

    const handleSearch = () => {
        searchArticles(searchQuery) as unknown as string;
        navigate("/search/your_result");
        setSearchQuery("")
        setShowSearch(false)
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleToggleMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        dispatch(setMode(newMode));
    };

    return (
        <nav className={`${mode === 'light' ? 'bg-[#aad6e8]' : "bg-[#202124] text-white"} w-full relative 
        ${id ? "h-32 lg:h-44" : "h-[25rem]"}`}>
            <div className="max-w-7xl container mx-auto">
                <div className=" flex items-center justify-between py-4 pr-3 sm:px-4">
                    <Link to="/">
                        <img src={mode === 'light' ? pressLogo : ifnpress} alt="IFN Press" className="h-12 xss:h-16 cursor-pointer" />
                    </Link>
                    <div className="flex items-center gap-2 xss:gap-4">
                        <button onClick={handleToggleMode}>
                            <div className={`${mode === 'light' ? "bg-[#7ecceb] hover:bg-[#4dbce8]" : "bg-black hover:bg-[#303134]"} p-2 rounded-full cursor-pointer`}>
                                {mode === 'light' ? <FaSun fontSize={20} /> : <FaMoon fontSize={20} />}
                            </div>
                        </button>
                        <div className="hidden lg:block">
                            {showSearch &&
                                <div className="flex items-center">
                                    <input type="text" placeholder="search..." className="w-60 p-2 border border-[#f4f3f0] rounded-md text-black"
                                        value={searchQuery} onChange={handleChange} onKeyDown={handleSubmit} tabIndex={0} />
                                    <FaSearch className="-ml-7 cursor-pointer" fontSize={20} onClick={handleSearch} />
                                </div>
                            }
                        </div>
                        <div className={`${mode === 'light' ? "bg-[#7ecceb] hover:bg-[#4dbce8]" : "bg-black hover:bg-[#303134]"} p-2 rounded-full cursor-pointer`}
                            onClick={() => setShowSearch(!showSearch)}>
                            {showSearch ? <FaTimes fontSize={20} /> : <FaSearch fontSize={20} />}
                        </div>
                        <div className={`${mode === 'light' ? "bg-[#7ecceb] hover:bg-[#4dbce8]" : "bg-black hover:bg-[#303134]"}] rounded-full p-2 cursor-pointer block lg:hidden`}
                            onClick={() => setShowMenu(!showMenu)}>
                            {showMenu ? <FaTimes fontSize={20} /> : <FaBars fontSize={20} />}
                        </div>
                    </div>
                </div>
                <div className="px-6 hidden lg:block">
                    <ul className="flex">
                        <MenuCategories />
                    </ul>
                </div>
            </div>
            {
                showMenu &&
                <ul className={`lg:hidden absolute z-50 right-5 flex flex-col ${mode === 'light' ? "bg-[#7ecceb]" : "bg-black"} cursor-pointer`}>
                    <MenuCategories />
                </ul>
            }
            <div className="block lg:hidden" onKeyDown={handleSubmit} tabIndex={0}>
                {
                    showSearch &&
                    <div className="flex items-center absolute z-50 top-[4rem] xss:top-[4.6875rem] right-[4.25rem] xss:right-20">
                        <input type="text" placeholder="search..." className="text-black w-44 xss:w-52 p-2 border border-[#f4f3f0] rounded-md"
                            value={searchQuery} onChange={handleChange} />
                        <FaSearch className="-ml-7" fontSize={20} onClick={handleSearch} />
                    </div>
                }
            </div>
        </nav>
    );
}