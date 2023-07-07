import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrendingNews from "./cards/TrendingNews";
import { fetchNews, selectNews, selectNewsStatus, setSelectedArticle } from "../features/news";
import { useNavigate } from "react-router-dom";
import { Article } from "../types";

export default function Trending():JSX.Element {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const newsData = useSelector(selectNews)
    const status = useSelector(selectNewsStatus)

    useEffect(() => {
        dispatch(fetchNews("general") as any) 
    }, [])

    if (status === "failed") navigate('/error');

    const handleClick = (article: Article) => {
        dispatch(setSelectedArticle(article))
        window.scrollTo(0, 50)
        navigate(`/article/${article.source.id || article.source.name}`)
    }

    return (
        <main>
            <div className="flex flex-col gap-5 p-2 mt-10 mx-3 sm:mx-0 bg-white">
                <h1 className="py-4 text-xl sm:text-2xl flex whitespace-nowrap">Trending Headlines</h1>
                {
                    status === 'loading' ?
                        <div className="flex flex-col gap-2 w-full">
                            {Array(7).fill("").map((_, index) => <div className="h-40 bg-[#e3e2e0] mx-3 sm:mx-0" key={index} />)}
                        </div>
                        :
                        <div>
                            {newsData?.slice(0, 7)?.map((article, index) => (
                                <TrendingNews last={index === (newsData.length) - 2 ? true : false} img={article.urlToImage} title={article.title} key={article.url} text={article.description} date={article.publishedAt?.substring(0, 10)} handleClick={() => handleClick(article)} />
                            ))}
                        </div>
                }
            </ div>
        </main>
    );
}
