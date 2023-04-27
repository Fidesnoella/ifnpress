import { useSelector } from "react-redux";
import FullNews from "./components/cards/FullNews";
import { selectedArticle } from "./features/news";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"

export default function article() {
    const article = useSelector(selectedArticle)
    const navigate = useNavigate()
    useEffect(() => {
        if (!article?.title) {
            return navigate("/")
        }
    }, [])

    return (
        <div className="mt-10 flex flex-col gap-4">
            <Link to={"/"} className="flex items-center gap-2 text-[#6bc5e9] font-medium text-lg hover:underline mx-3 sm:mx-0"><FaArrowLeft />Back to home</Link>
            <FullNews img={article.urlToImage} title={article.title} date={article.publishedAt?.substring(0, 10)} text={article.content}
                url={article.url} />
        </div>
    );
}

