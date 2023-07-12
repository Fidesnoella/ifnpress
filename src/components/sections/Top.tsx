import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, selectNews, selectNewsStatus, setSelectedArticle } from "../../features/news";
import TopNews from "../cards/TopNews";
import TopLoader from "../../loaders/TopLoader";
import { AppDispatch } from "../../store/store";
import { selectMode } from "../../features/toggleMode";

export default function Top():JSX.Element {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();
    const newsData = useSelector(selectNews)
    const status = useSelector(selectNewsStatus)
    const mode =  useSelector(selectMode)

    useEffect(() => {
        dispatch(fetchNews('')); 
    }, [])

    if (status === "failed") {
        navigate('/error');
    }

    const handleClick = (article : any) => {
        dispatch(setSelectedArticle(article))
        window.scrollTo(0, 50)
        navigate(`/article/${article.source.id || article.source.name}`)
    }

    return (
        <main className="sm:mx-auto sm:container sm:max-w-7xl px-3 sm:px-6 -mt-72 lg:-mt-64">
            <div className={`${mode === 'light' ? 'bg-white' : 'bg-[#16171a]'} grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-6 p-2 sm:p-6 relative z-20 lg:max-h-[500px]`}>
                {status === 'loading' ?
                    <>
                        {
                            Array(3).fill("").map((_, index) => <TopLoader key={index} articleOrder={index === 0 ? "first" : "remaining"} />)
                        }
                    </>
                    :
                    <>
                        {newsData?.slice(7, 10)?.map((article, index) => (
                            <TopNews articleOrder={index === 0 ? "first" : "remaining"} img={article.urlToImage}
                                date={article.publishedAt?.substring(0, 10)} author={article.source.name} title={article.title}
                                text={article.description} key={article.url} handleClick={() => handleClick(article)} />
                        ))}
                    </>
                }
            </ div>
        </main>
    );
}