import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"
import { useEffect } from "react";
import { setSelectedArticle } from "./features/news";
import LatestNews from "./components/cards/LatestNews";
import { fetchArticles, selectArticles } from "./features/articles";

export default function authors() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const articles = useSelector(selectArticles)

    const { selectedAuthor: publisher } = useSelector(state => state.publisher)

    useEffect(() => {
        dispatch(fetchArticles(publisher))
    }, [publisher])

    const filteredNews = articles.length > 0 ? articles.filter((article) => article.source.id === publisher) : [];

    const handleClick = (article) => {
        dispatch(setSelectedArticle(article))
        window.scrollTo(0, 50)
        navigate(`/article/${article.source.id || article.source.name}`)
    }

    return (
        <div className="mt-10 flex flex-col gap-4">
            <Link to={"/"} className="flex items-center mx-3 sm:mx-0 gap-2 text-[#6bc5e9] font-medium text-lg hover:underline"><FaArrowLeft />Back to home</Link>
            <h1 className="py-4 text-xl sm:text-2xl flex whitespace-nowrap mx-4 sm:mx-0">All News of {publisher}</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredNews?.slice(0, 15)?.map(article => (
                    <LatestNews img={article.urlToImage} title={article.title} text={article.description} date={article.publishedAt?.substring(0, 10)} key={article.url}
                        handleClick={() => handleClick(article)} />
                ))}
            </div>
        </div>
    );
}
