import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSearchArticles, selectSearchArticlesStatus, selectSearchArticlesError } from "./features/search";
import { setSelectedArticle } from "./features/news";
import LatestNews from "./components/cards/LatestNews";

export default function search() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const articles = useSelector(selectSearchArticles);
    const status = useSelector(selectSearchArticlesStatus);
    const error = useSelector(selectSearchArticlesError);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "failed") {
        return <div>{error}</div>;
    }

    const handleClick = (article) => {
        dispatch(setSelectedArticle(article))
        window.scrollTo(0, 50)
        navigate(`/article/${article.source.id || article.source.name}`)
    }

    return (
        <div>
            <div className="grid sm:grid-cols-2 gap-3">
                {articles?.slice(0, 10)?.map(article => (
                    <LatestNews img={article.urlToImage} title={article.title} text={article.description} date={article.publishedAt?.substring(0, 10)} key={article.url}
                        handleClick={() => handleClick(article)} />
                ))}
            </div>
        </div>
    );
}
