import { useEffect } from "react";
import { useSelector } from "react-redux";
import TrendingNews from "./cards/TrendingNews";
import {  selectNews, selectNewsStatus } from "../features/news";
import { useNavigate } from "react-router-dom";
import { Article } from "../types";
import { selectMode } from "../features/toggleMode";
import { useActions } from "../store/hook";

export default function Trending():JSX.Element {
    const navigate = useNavigate()
    const newsData = useSelector(selectNews)
    const status = useSelector(selectNewsStatus)
    const mode = useSelector(selectMode)
    const { fetchNews, setSelectedArticle} = useActions()

    useEffect(() => {
        fetchNews("general") as unknown as string
    }, [])

    if (status === "failed") {
        navigate('/error');
    }

    const handleClick = (article: Article) => {
       setSelectedArticle(article)
        window.scrollTo(0, 50)
        navigate(`/article/${article.source.id || article.source.name}`)
    }

    return (
        <main>
            <div className={`flex flex-col gap-5 p-2 mt-10 mx-3 sm:mx-0 ${mode === 'light' ? 'bg-white' : 'bg-[#16171a]'}`}>
                <h1 className={`py-4 text-xl sm:text-2xl flex whitespace-nowrap ${mode === 'light' ? 'text-black' : 'text-white'}`}>Trending Headlines</h1>
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
