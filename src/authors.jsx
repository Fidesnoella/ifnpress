import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"
import { useEffect } from "react";
import { setSelectedArticle } from "./features/news";
import LatestNews from "./components/cards/LatestNews";
import { fetchArticles, selectArticles, selectArticlesStatus } from "./features/articles";
import LatestLoader from "./loaders/LatestLoader";

export default function authors() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const articles = useSelector(selectArticles)
    const status = useSelector(selectArticlesStatus)
    const { selectedAuthor: publisher } = useSelector(state => state.publisher)


    const filteredNews = articles.length > 0 ? articles.filter((article) => article.source.id === publisher) : [];

    const handleClick = (article) => {
        dispatch(setSelectedArticle(article))
        window.scrollTo(0, 50)
        navigate(`/article/${article.source.id || article.source.name}`)
    }

    if (status === 'failed') {
        return (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {Array(12).fill().map((_, index) => <LatestLoader key={index} />)}
            </div>
        )
    }

    return (
        <div className="mt-10 flex flex-col gap-4">
            <Link to={"/"} className="w-fit flex items-center mx-3 sm:mx-0 gap-2 text-[#6bc5e9] font-medium text-lg hover:underline"><FaArrowLeft />Back to home</Link>
            <h1 className="py-4 text-xl sm:text-2xl flex mx-4 sm:mx-0 max-w-xs whitespace-normal">All News of {publisher}</h1>
            {status === 'loading' ?
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {Array(12).fill().map((_, index) => <LatestLoader key={index} />)}
                </div>
                :
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {filteredNews?.slice(0, 15)?.map(article => (
                        <LatestNews img={article.urlToImage} title={article.title} text={article.description} date={article.publishedAt?.substring(0, 10)} key={article.url}
                            handleClick={() => handleClick(article)} />
                    ))}
                </div>
            }
        </div>
    );
}
