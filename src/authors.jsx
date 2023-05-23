import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"
import { useEffect } from "react";
import { setSelectedArticle } from "./features/news";
import LatestNews from "./components/cards/LatestNews";
import { fetchArticles, selectArticles, selectArticlesError, selectArticlesStatus } from "./features/articles";
import LatestLoader from "./loaders/LatestLoader";

export default function authors() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const articles = useSelector(selectArticles)
    const status = useSelector(selectArticlesStatus)
    const error = useSelector(selectArticlesError)
    const { publisher: allPublishers, selectedAuthor: publisher } = useSelector(state => state.publisher)

    useEffect(() => {
        dispatch(fetchArticles(publisher))
    }, [publisher])

    if (JSON.stringify(publisher) === "{}") {
        return navigate("/")
    }
    const name = allPublishers?.find(item => item.id == publisher).name

    const filteredNews = articles.length > 0 ? articles.filter((article) => article.source.id === publisher) : [];

    const handleClick = (article) => {
        dispatch(setSelectedArticle(article))
        window.scrollTo(0, 50)
        navigate(`/article/${article.source.id || article.source.name}`)
    }

    if (status === 'failed') {
        return (
            <div>
                <p className="pt-10 text-xlc font-medium">{error}</p>
            </div>
        )
    }

    return (
        <div className="mt-10 flex flex-col gap-4">
            <Link to={"/"} className="w-fit flex items-center mx-3 sm:mx-0 gap-2 text-[#6bc5e9] font-medium text-lg hover:underline"><FaArrowLeft />Back to home</Link>
            <h1 className="py-4 text-xl sm:text-2xl flex mx-4 sm:mx-0 max-w-xs sm:max-w-none whitespace-normal">All News of {name}</h1>
            {status === 'loading' ?
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {Array(12).fill().map((_, index) => <LatestLoader key={index} />)}
                </div>
                :
                <div>
                    {
                        filteredNews.length === 0 ?
                            <div>
                                <h1 className="py-6 text-xl sm:text-2xl flex mx-4 sm:mx-0 max-w-lg">
                                    No articles from this publisher were found. Please try again later
                                </h1>
                                <button className="bg-[#aad6e8] font-semibold py-2 px-6 cursor-pointer text-gray-700 hover:bg-[#7ecceb]" onClick={() => navigate("/")}>Go Back Home</button>
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
            }
        </div>
    );
}
