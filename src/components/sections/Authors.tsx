import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectPublisher,
    selectPublisherStatus
} from "../../features/publisher";
import { selectedCategory } from "../../features/news";
import { useActions } from "../../store/hook";
import { Publisher } from "../../types";
import { selectMode } from "../../features/toggleMode";

export default function Authors():JSX.Element {
    const navigate = useNavigate()
    const category = useSelector(selectedCategory)
    const publishers = useSelector(selectPublisher)
    const status = useSelector(selectPublisherStatus);
    const mode = useSelector(selectMode);
    const { fetchPublishers, setSelectedAuthor } = useActions();

    useEffect(() => {
        fetchPublishers(category) as unknown as string
    }, [category])

    if (status === "failed") {
        navigate('/error');
    }

    function handleClick(publisher: Publisher) {
        setSelectedAuthor(publisher.id)
        window.scroll(0, 0)
        navigate(`/author/${publisher.id}`)
    }

    return (
        <main>
            <h1 className={`py-4 text-xl sm:text-2xl flex mx-3 sm:mx-0 ${mode === 'light' ? "text-black" : "text-white"}`}>Publishers <span className="border-b-2 border-black w-full" /></h1>
            <div className="max-h-[29.6rem] overflow-y-auto mx-3 sm:mx-0 mt-4 overflow-auto">
                {status === 'loading' ?
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mx-3 sm:mx-0">
                        {Array(12).fill("").map((_, index) => <div className="h-12 w-full bg-[#e3e2e0]" key={index} />)}
                    </div>
                    :
                    <div className="flex flex-wrap gap-2">
                        {
                            publishers && publishers.map((publisher) =>
                                <Link to={`/publisher/${publisher.id}`} key={publisher.id} onClick={() => handleClick(publisher)}>
                                    <h5 className={`${mode === 'light' ? "bg-[#aad6e8] hover:bg-[#7ecceb] text-gray-700" : "bg-black hover:bg-[#3c3c3d] text-gray-500"} p-2 cursor-pointer`}>
                                        {publisher.name}
                                    </h5>
                                </Link>
                            )
                        }
                    </div>
                }
            </div>
        </main >
    );
}

