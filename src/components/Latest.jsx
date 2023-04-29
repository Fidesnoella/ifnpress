import { useDispatch, useSelector } from "react-redux";
import { fetchNews, selectNews, selectNewsError, selectNewsStatus, setSelectedArticle } from "../features/news";
import { useEffect } from "react";
import LatestNews from "./cards/LatestNews";
import { useNavigate } from "react-router-dom";

export default function Latest() {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const newsData = useSelector(selectNews)
    const status = useSelector(selectNewsStatus)
    const error = useSelector(selectNewsError)

    useEffect(() => {
        dispatch(fetchNews())
    }, [])

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>{error}</div>;
    }

    const handleClick = (article) => {
        dispatch(setSelectedArticle(article))
        window.scrollTo(0, 50)
        navigate(`/article/${article.source.id || article.source.name}`)
    }

    return (
        <main className="w-full">
            <h1 className="mt-16 sm:mt-5 py-4 text-xl sm:text-2xl mx-3 sm:mx-0 flex whitespace-nowrap">Latest News<span className="border-b-2 border-black w-full" /></h1>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
                {newsData?.slice(10, 20)?.map(article => (
                    <LatestNews img={article.urlToImage} title={article.title} text={article.description} date={article.publishedAt?.substring(0, 10)} key={article.url}
                        handleClick={() => handleClick(article)} />
                ))}
            </ div>
        </main>
    );
}

