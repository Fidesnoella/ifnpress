import { useEffect } from "react";
import { fetchNews, selectNewsData, selectNewsStatus, selectNewsError } from "../features/trendingNews";
import { useDispatch, useSelector } from "react-redux";
import TrendingNews from "./cards/TrendingNews";

export default function Trending() {

    const dispatch = useDispatch();
    const newsData = useSelector(selectNewsData);
    const status = useSelector(selectNewsStatus);
    const error = useSelector(selectNewsError);

    useEffect(() => {
        dispatch(fetchNews())
    }, [dispatch])

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>{error}</div>;
    }

    return (
        <main>
            <h1 className="py-4 text-2xl flex whitespace-nowrap">Trending Headlines <span className="border-b-2 border-black w-full" /></h1>
            <div className="flex flex-col gap-5 bg-white p-2">
                {newsData.map(article => (
                    <TrendingNews img={article.urlToImage} title={article.title} author={article.author} date={article.publishedAt} key={article.url} />
                ))}
            </ div>
        </main>
    );
}
