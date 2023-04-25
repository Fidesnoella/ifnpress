import { useEffect } from "react";
import TopNews from "./cards/TopNews";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, selectNews, selectNewsError, selectNewsStatus, setSelectedArticle } from "../features/news";
import { useNavigate } from "react-router-dom";


export default function Top() {

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
        <main className="mx-auto container max-w-7xl px-6 -mt-64">
            <div className="grid grid-cols-3 grid-rows-2 gap-6 p-6 bg-white max-h-[500px]">
                {newsData?.slice(7, 10)?.map((article, index) => (
                    <TopNews articleorder={index === 0 ? "first" : "remaining"} img={article.urlToImage}
                        date={article.publishedAt?.substring(0, 10)} author={article.author} title={article.title}
                        text={article.description} key={article.url} handleClick={() => handleClick(article)} />
                ))}
            </ div>
        </main>
    );
}
