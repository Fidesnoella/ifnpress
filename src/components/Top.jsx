import { useEffect } from "react";
import { fetchTopNews, selectNewsData, selectNewsStatus, selectNewsError } from "../features/topNews";
import { useDispatch, useSelector } from "react-redux";
import TopNews from "./cards/TopNews";

export default function Top() {

    const dispatch = useDispatch();
    const newsData = useSelector(selectNewsData);
    const status = useSelector(selectNewsStatus);
    const error = useSelector(selectNewsError);

    useEffect(() => {
        dispatch(fetchTopNews())
    }, [dispatch])

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>{error}</div>;
    }

    return (
        <main className="mx-auto container max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-8 p-10 bg-white">
                {newsData.map(article => (
                    <TopNews img={article.urlToImage} author={article.author} date={article.publishedAt} key={article.url} />
                ))}
            </ div>
        </main>
    );
}
