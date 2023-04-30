import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/press-logo.png"
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { changeCategory, fetchNews } from "../../features/news";
import { searchArticles } from "../../features/search";

export default function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [showSearch, setSetSearch] = useState(false)
    const [searchQuery, setSearchQuery] = useState("");
    const { category } = useSelector(state => state.news)
    const { id } = useParams()


    const getNews = () => {
        dispatch(fetchNews(category))
        if (id) return navigate("/")
    }

    useEffect(() => {
        getNews()
    }, [category])

    const handleSubmit = (e) => {
        if (e.key === "Enter") {
            dispatch(searchArticles(searchQuery));
        }
        navigate("/search/your_result")
    };

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <nav className={`bg-[#aad6e8] w-full relative ${id ? "h-48" : "h-[25rem]"}`}>
            <div className="max-w-7xl container mx-auto">
                <div className=" flex items-center justify-between py-4 pr-3 sm:px-4">
                    <Link to={"/"}>
                        <img src={logo} alt="IFN Press" className="h-12 xss:h-16 cursor-pointer" />
                    </Link>
                    <div className="flex items-center gap-2 xss:gap-4">
                        <div className="hidden lg:block" onKeyDown={handleSubmit} tabIndex={0}>
                            {showSearch &&
                                <div className="flex items-center">
                                    <input type="text" placeholder="search..." className="w-60 p-2 border border-[#f4f3f0] rounded-md" value={searchQuery} onChange={handleChange} />
                                    <FaSearch className="-ml-7" fontSize={20} />
                                </div>}
                        </div>
                        <div className="bg-[#7ecceb] p-2 rounded-full hover:bg-[#4dbce8] cursor-pointer" onClick={() => setSetSearch(!showSearch)}>
                            {showSearch ? <FaTimes fontSize={20} /> : <FaSearch fontSize={20} />}
                        </div>
                        <div className="bg-[#7ecceb] rounded-full hover:bg-[#4dbce8] p-2 cursor-pointer block lg:hidden" onClick={() => setShowMenu(!showMenu)}>
                            {showMenu ? <FaTimes fontSize={20} /> : <FaBars fontSize={20} />}
                        </div>
                    </div>
                </div>
                <div className="px-6 hidden lg:block">
                    <ul className="flex gap-2">
                        {
                            ["General", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"].map((item, index) =>
                                <li key={index}
                                    className={`${category === item.toLowerCase() ? "bg-[#7ecceb]" : "bg-[#aad6e8] "}  font-semibold py-2 px-6 cursor-pointer text-gray-700 hover:bg-[#7ecceb]`}
                                    onClick={() => dispatch(changeCategory(item.toLowerCase()))}
                                >
                                    {item}
                                </li>)
                        }
                    </ul>
                </div>
            </div>
            {
                showMenu &&
                <ul className="lg:hidden absolute z-50 right-5 -bottom-14 py-4 flex flex-col bg-[#7ecceb] gap-3 cursor-pointer w-1/2 items-end">
                    {
                        ["General", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"].map((item, index) => <li className={`${category === item.toLowerCase() ? "bg-[#4dbce8]" : "bg-[#7ecceb] "} hover:bg-[#4dbce8] p-2  text-gray-700 font-bold w-full text-center`}
                            key={index} onClick={() => dispatch(changeCategory(item.toLowerCase()))}>{item}</li>)
                    }
                </ul>
            }
            <div className="block lg:hidden" onKeyDown={handleSubmit} tabIndex={0}>
                {
                    showSearch &&
                    <div className="flex items-center absolute z-50 top-[4rem] xss:top-[4.6875rem] right-[4.25rem] xss:right-20">
                        <input type="text" placeholder="search..." className="w-44 xss:w-52 p-2 border border-[#f4f3f0] rounded-md" value={searchQuery} onChange={handleChange} />
                        <FaSearch className="-ml-7" fontSize={20} />
                    </div>
                }
            </div>
        </nav>
    );
}