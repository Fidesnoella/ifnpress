import { useEffect } from "react";
import Article from "./cards/Article";
import { fetchNews, selectNewsData, selectNewsStatus, selectNewsError } from "../features/trandingNews";
import { useDispatch, useSelector } from "react-redux";

export default function Articles() {

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
            <h1 className="py-4 text-2xl flex">Trending <span className="border-b-2 border-black w-full" /></h1>
            <div className="grid grid-cols-2 gap-8">
                {newsData.map(article => (
                    <Article img={article.urlToImage} title={article.title} text={article.description} key={article.url} />
                ))}
            </ div>
        </main>
    );
}
