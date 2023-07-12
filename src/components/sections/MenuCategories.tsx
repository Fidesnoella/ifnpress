import { useDispatch, useSelector } from "react-redux";
import { selectMode } from "../../features/toggleMode";
import { CATEGORIES } from "../../data";
import { changeCategory } from "../../features/news";
import { useActions } from "../../store/hook";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const MenuCategories = (): JSX.Element => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const mode = useSelector(selectMode);
    const { fetchNews } = useActions()
    const { category } = useSelector((state: { news: { status: string, category: string } }) => state.news)
    const { id } = useParams()


    const getNews = () => {
        fetchNews(category) as unknown as string
        if (id) return navigate("/")
    }

    useEffect(() => {
        getNews()
    }, [category])

    return (
        <div>
            {
                mode === 'light' ?
                    <ul className="flex flex-col lg:flex-row lg:gap-2">
                        {
                            CATEGORIES.map((item, index) =>
                                <li key={index}
                                    className={`${category === item.toLowerCase() ? "bg-[#7ecceb]" : "bg-[#aad6e8]"} 
                                            font-semibold py-2 px-12 lg:px-6 cursor-pointer text-center text-gray-700 hover:bg-[#7ecceb]`}
                                    onClick={() => dispatch(changeCategory(item.toLowerCase()))}
                                >
                                    
                                    {item}
                                </li>)
                        }
                    </ul>
                    :
                    <ul className="flex flex-col lg:flex-row lg:gap-2">
                        {
                            CATEGORIES.map((item, index) =>
                                <li key={index}
                                    className={`${category === item.toLowerCase() ? "bg-black" : "bg-[#202124]"}
                                     font-semibold py-2 px-12 text-center lg:px-6 cursor-pointer text-[#9d9fa4] hover:bg-black`}
                                    onClick={() => dispatch(changeCategory(item.toLowerCase()))}
                                >
                                    {item}
                                </li>)
                        }
                    </ul>
            }
        </div>
    )
}

export default MenuCategories