import { useEffect } from "react";
import TopNews from "./cards/TopNews";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, selectNews, selectNewsError, selectNewsStatus } from "../features/news";


export default function Top() {

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
        <main className="mx-auto container max-w-7xl px-6 -mt-64">
            <div className="grid grid-cols-3 grid-rows-2 gap-6 p-6 bg-white max-h-[500px]">
                {newsData?.slice(7, 10)?.map((article, index) => (
                    <TopNews articleorder={index === 0 ? "first" : "remaining"} img={article.urlToImage} date={article.publishedAt?.substring(0, 10)} author={article.author} title={article.title} text={article.description} key={article.url} />
                ))}
            </ div>
        </main>
    );
}
