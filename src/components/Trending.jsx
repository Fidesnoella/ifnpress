import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrendingNews from "./cards/TrendingNews";
import { fetchNews, selectNews, selectNewsError, selectNewsStatus } from "../features/news";

export default function Trending() {

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


    return (
        <main>
            {/* <h1 className="py-4 text-2xl flex whitespace-nowrap">Trending Headlines <span className="border-b-2 border-black w-full" /></h1> */}
            <div className="flex flex-col gap-5 bg-white p-2 mt-10">
                <h1 className="py-4 text-2xl flex whitespace-nowrap">Trending Headlines</h1>
                {newsData?.slice(0, 7)?.map((article, index) => (
                    <TrendingNews last={index === (newsData.length) - 3 ? true : false} img={article.urlToImage} title={article.title} date={article.publishedAt?.substring(0, 10)} key={article.url} />
                ))}
            </ div>
        </main>
    );
}
