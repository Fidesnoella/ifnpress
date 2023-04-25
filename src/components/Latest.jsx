import { useDispatch, useSelector } from "react-redux";
import { fetchNews, selectNews, selectNewsError, selectNewsStatus } from "../features/news";
import { useEffect } from "react";
import LatestNews from "./cards/LatestNews";

export default function Latest() {

    const dispatch = useDispatch();
    const newsData = useSelector(selectNews)
    const status = useSelector(selectNewsStatus)
    const error = useSelector(selectNewsError)
    console.log(newsData, "news");

    useEffect(() => {
        dispatch(fetchNews())
    }, [])

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>{error}</div>;
    }

    return (
        <main size={8}>
            <h1 className="mt-5 py-4 text-2xl flex whitespace-nowrap">Latest News<span className="border-b-2 border-black w-full" /></h1>
            <div>
                <div className="grid grid-cols-2 gap-8">
                    {newsData?.slice(10, 20)?.map(article => (
                        <LatestNews img={article.urlToImage} title={article.title} text={article.description} date={article.publishedAt?.substring(0, 10)} />
                    ))}
                </ div>
            </div>
        </main>

    );
}
