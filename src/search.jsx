import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"
import { selectSearchArticles, selectSearchArticlesStatus, selectSearchArticlesError } from "./features/search";
import { setSelectedArticle } from "./features/news";
import LatestNews from "./components/cards/LatestNews";

export default function search() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const articles = useSelector(selectSearchArticles);
    const status = useSelector(selectSearchArticlesStatus);
    const error = useSelector(selectSearchArticlesError);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "failed") {
        return <div>{error}</div>;
    }

    const handleClick = (article) => {
        dispatch(setSelectedArticle(article))
        window.scrollTo(0, 50)
        navigate(`/article/${article.source.id || article.source.name}`)
    }

    return (
        <div className="mt-10 flex flex-col gap-4">
            <Link to={"/"} className="flex items-center mx-3 sm:mx-0 gap-2 text-[#6bc5e9] font-medium text-lg hover:underline"><FaArrowLeft />Back to home</Link>
            <h1 className="py-4 text-xl sm:text-2xl flex whitespace-nowrap mx-4 sm:mx-0">Results of your search</h1>
            <div className="grid sm:grid-cols-2 gap-3">
                {articles?.slice(0, 10)?.map(article => (
                    <LatestNews img={article.urlToImage} title={article.title} text={article.description} date={article.publishedAt?.substring(0, 10)} key={article.url}
                        handleClick={() => handleClick(article)} />
                ))}
            </div>
        </div>
    );
}
