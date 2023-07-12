import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"
import { selectSearchArticles, selectSearchArticlesStatus } from "../features/search";
import { setSelectedArticle } from "../features/news";
import LatestNews from "../components/cards/LatestNews";
import LatestLoader from "../loaders/LatestLoader";
import { Article } from "../types";
import { selectMode } from "../features/toggleMode";

export default function search(): JSX.Element {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const articles = useSelector(selectSearchArticles);
    const status = useSelector(selectSearchArticlesStatus);
    const mode = useSelector(selectMode)

    if (status === "failed") {
        navigate('/error');
    }

    const handleClick = (article: Article) => {
        dispatch(setSelectedArticle(article))
        window.scrollTo(0, 50)
        navigate(`/article/${article.source.id || article.source.name}`)
    }

    return (
        <div className="mt-10 flex flex-col gap-4">
            <Link to="/" className={`${mode === 'light' ? "text-[#6bc5e9]" : "text-gray-300"} w-fit flex items-center mx-3 sm:mx-0 gap-2 font-medium text-lg hover:underline`}>
                <FaArrowLeft />Back to home</Link>
            {status === "loading"
                ?
                <div className="grid sm:grid-cols-2 gap-3">{Array(10).fill("").map((_, index) => <LatestLoader key={index} />)}</div>
                :
                <div>
                    {articles.length === 0 ?
                        <div className="mx-4 sm:mx-0">
                            <h1 className={`${mode === 'light' ? "text-black" : "text-gray-200"} py-4 text-xl sm:text-2xl flex whitespace-nowrap`}>
                                Result not found
                            </h1>
                            <button className={`${mode === 'light' ? "bg-[#5ebde2] hover:bg-[#7ecceb] text-gray-700" : "bg-black hover:bg-[#4b4c4e] text-gray-300"} font-semibold py-2 px-6 cursor-pointer`}
                                onClick={() => navigate("/")}>
                                Go Back Home
                            </button>
                        </div>
                        :
                        <div>
                            <h1 className={`${mode === 'light' ? "text-black" : "text-gray-300"} py-4 text-xl sm:text-2xl flex sm:whitespace-nowrap mx-3 sm:mx-0`}>Results related to your search</h1>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {articles?.slice(0, 10)?.map((article:Article) => (
                                    <LatestNews img={article.urlToImage} title={article.title} text={article.description}
                                        date={article.publishedAt?.substring(0, 10)} key={article.url}
                                        handleClick={() => handleClick(article)} />
                                ))}
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    );
}
