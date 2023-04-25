import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/press-logo.png"
import { FaSearch } from "react-icons/fa";
import { changeCategory, fetchNews } from "../features/news";


export default function Navbar() {

    const dispatch = useDispatch()
    const { category } = useSelector(state => state.news)

    console.log({ category })

    useEffect(() => {
        dispatch(fetchNews(category));
    }, [category])

    return (
        <nav className="bg-[#aad6e8] bg-[#bffff8]- w-full h-[25rem]">
            <div className="max-w-7xl container mx-auto">
                <div className=" flex items-center justify-between py-4 px-4">
                    <img src={logo} alt="IFN Press" className="h-16 cursor-pointer" />
                    <span className="bg-[#7ecceb] rounded-full hover:bg-[#4dbce8] p-2 cursor-pointer">
                        <FaSearch fontSize={20} />
                    </span>
                </div>
                <div className="px-6">
                    <ul className="flex gap-2">
                        {
                            ["General", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"].map((item, index) =>
                                <li key={index}
                                    className={`${category === item.toLowerCase() ? "bg-[#7ecceb]" : "bg-[#aad6e8] "}  font-semibold py-2 px-6 cursor-pointer text-gray-700 hover:bg-[#7ecceb]`}
                                    onClick={() => dispatch(changeCategory(item.toLowerCase()))}
                                >{item}</li>)
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}