import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"
import { selectSearchArticles, selectSearchArticlesStatus } from "./features/search";
import { setSelectedArticle } from "./features/news";
import LatestNews from "./components/cards/LatestNews";
import LatestLoader from "./loaders/LatestLoader";

export default function search() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const articles = useSelector(selectSearchArticles);
    const status = useSelector(selectSearchArticlesStatus);

    if (status === "failed") {
        return <div className="grid sm:grid-cols-2 gap-3">
            {Array(10).fill().map((_, index) => <LatestLoader key={index} />)}
        </div>;
    }

    const handleClick = (article) => {
        dispatch(setSelectedArticle(article))
        window.scrollTo(0, 50)
        navigate(`/article/${article.source.id || article.source.name}`)
    }

    return (
        <div className="mt-10 flex flex-col gap-4">
            <Link to={"/"} className="flex items-center mx-3 sm:mx-0 gap-2 text-[#6bc5e9] font-medium text-lg hover:underline"><FaArrowLeft />Back to home</Link>
            {status === "loading"
                ?
                <div className="grid sm:grid-cols-2 gap-3">{Array(10).fill().map((_, index) => <LatestLoader key={index} />)}</div>
                :
                <div>
                    {articles.length === 0 ?
                        <div>
                            <h1 className="py-4 text-xl sm:text-2xl flex whitespace-nowrap mx-4 sm:mx-0">
                                Result not found
                            </h1>
                            <button className="bg-[#aad6e8] font-semibold py-2 px-6 cursor-pointer text-gray-700 hover:bg-[#7ecceb]" onClick={() => navigate("/")}>Go Back Home</button>
                        </div>
                        :
                        <div>
                            <h1 className="py-4 text-xl sm:text-2xl flex whitespace-nowrap mx-4 sm:mx-0">Results related to your search</h1>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {articles?.slice(0, 10)?.map(article => (
                                    <LatestNews img={article.urlToImage} title={article.title} text={article.description} date={article.publishedAt?.substring(0, 10)} key={article.url}
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
