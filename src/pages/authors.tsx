import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"
import { useEffect } from "react";
import LatestNews from "../components/cards/LatestNews";
import { selectArticles, selectArticlesStatus } from "../features/articles";
import LatestLoader from "../loaders/LatestLoader";
import { Article, Publisher } from "../types";
import { useAppSelector, useActions } from "../store/hook"
import { selectMode } from "../features/toggleMode";

export default function authors(): JSX.Element {
    const navigate = useNavigate()
    const articles = useSelector(selectArticles)
    const status = useSelector(selectArticlesStatus)
    const mode = useSelector(selectMode); 

    const { publisher: allPublishers, selectedAuthor: publisher } = useAppSelector(state => state.publisher);
    const { fetchArticles, setSelectedArticle } = useActions();


    useEffect(() => {
        fetchArticles(publisher as unknown as string)
        if (publisher === null) {
            return navigate("/")
        }
    }, [publisher])

    const name = allPublishers && allPublishers.find(( item: Publisher ) => item.id === publisher)?.name

    const handleClick = (article: Article) => {
        setSelectedArticle(article)
        window.scrollTo(0, 50)
        navigate(`/article/${article.source.id || article.source.name}`)
    }
   
    if (status === "failed") {
        navigate('/error');
    }

    return (
        <div className="mt-10 flex flex-col gap-4">
            <Link to="/" className={`${mode === 'light' ? "text-[#6bc5e9]" : "text-gray-600"} w-fit flex items-center mx-3 sm:mx-0 gap-2 font-medium text-lg hover:underline`}>
                <FaArrowLeft />Back to home</Link>
            <h1 className="py-4 text-xl sm:text-2xl flex mx-4 sm:mx-0 max-w-xs sm:max-w-none whitespace-normal">All News of {name}</h1>
            {status === 'loading' ?
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {Array(12).fill("").map((_, index) => <LatestLoader key={index} />)}
                </div>
                :
                <div>
                    {
                        articles.length === 0 ?
                            <div className="mx-4 sm:mx-0">
                                <h1 className="py-6 text-xl sm:text-2xl flex max-w-lg">
                                    No articles from this publisher were found. Please try again later
                                </h1>
                                <button className="bg-[#aad6e8] font-semibold py-2 px-6 cursor-pointer text-gray-700 hover:bg-[#7ecceb]"
                                    onClick={() => navigate("/")}>Go Back Home</button>
                            </div>
                            :
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {articles?.slice(0, 15)?.map(article => (
                                    <LatestNews img={article.urlToImage} title={article.title} text={article.description}
                                        date={article.publishedAt?.substring(0, 10)} key={article.url}
                                        handleClick={() => handleClick(article)} />
                                ))}
                            </div>
                    }
                </div>
            }
        </div>
    );
}
