import { useDispatch, useSelector } from "react-redux";
import { fetchLatestNews, selectlatestNews, selectlatestNewsError, selectlatestNewsStatus } from "../features/latestNews";
import { useEffect } from "react";
import LatestNews from "./cards/LatestNews";

export default function Latest() {

    const dispatch = useDispatch();
    const newsData = useSelector(selectlatestNews)
    const status = useSelector(selectlatestNewsStatus)
    const error = useSelector(selectlatestNewsError)
    console.log(newsData, "latest");

    useEffect(() => {
        dispatch(fetchLatestNews())
    }, [])

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>{error}</div>;
    }

    return (
        <main>
            <h1 className="py-4 text-2xl flex whitespace-nowrap">Latest News<span className="border-b-2 border-black w-full" /></h1>
            <div>
                <div className="grid grid-cols-2 gap-8">
                    {newsData.map(article => (
                        <LatestNews img={article.urlToImage} title={article.title} text={article.description} />
                    ))}
                </ div>
            </div>
        </main>

    );
}
