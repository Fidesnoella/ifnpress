import { useSelector } from "react-redux";
import FullNews from "../components/cards/FullNews";
import { selectedArticle } from "../features/news";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"
import { selectArticlesStatus } from "../features/articles";
import LatestLoader from "../loaders/LatestLoader";

export default function article(): JSX.Element {
    const navigate = useNavigate()
    const article = useSelector(selectedArticle)
    const status = useSelector(selectArticlesStatus)

    useEffect(() => {
        if (!article?.title) navigate("/")
    }, [])

    if (status === "failed") {
        navigate('/error');
    }

    return (
        <div className="mt-10 flex flex-col gap-4">
            <Link to="/" className="w-fit flex items-center gap-2 text-[#6bc5e9] font-medium text-lg hover:underline mx-3 sm:mx-0"><FaArrowLeft />Back to home</Link>
            {status === 'loading' ? <LatestLoader style='h-[38rem]' /> :
                article && <FullNews img={article.urlToImage} title={article.title} date={article.publishedAt?.substring(0, 10)} text={article.content}
                    url={article.url} />
            }
        </div>
    );
}

