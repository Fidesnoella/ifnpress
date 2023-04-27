import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrendingNews from "./cards/TrendingNews";
import { fetchNews, selectNews, selectNewsError, selectNewsStatus, setSelectedArticle } from "../features/news";
import { useNavigate } from "react-router-dom";

export default function Trending() {

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
        <main>
            <div className="flex flex-col gap-5 bg-white p-2 mt-10 mx-3 sm:mx-0">
                <h1 className="py-4 text-2xl flex whitespace-nowrap">Trending Headlines</h1>
                {newsData?.slice(0, 7)?.map((article, index) => (
                    <TrendingNews last={index === (newsData.length) - 2 ? true : false} img={article.urlToImage} title={article.title} key={article.url} text={article.description} date={article.publishedAt?.substring(0, 10)} handleClick={() => handleClick(article)} />
                ))}
            </ div>
        </main>
    );
}
