import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
    fetchPublishers, selectPublisher,
    selectPublisherStatus, setSelectedAuthor, selectPublisherError
} from "../features/publisher";

export default function Authors() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { category } = useSelector(state => state.news)
    const publishers = useSelector(selectPublisher)
    const status = useSelector(selectPublisherStatus);
    const error = useSelector(selectPublisherError)

    useEffect(() => {
        dispatch(fetchPublishers(category))
    }, [category])

    if (status === 'failed') {
        return (
            <div>
                <p className="pt-10 px-4 text-xl font-medium">{error}</p>
            </div>
        )
    }

    function handleClick(publisher) {
        dispatch(setSelectedAuthor(publisher.id))
        window.scroll(0, 0)
        navigate(`/author/${publisher.id}`)
    }

    return (
        <main>
            <h1 className="py-4 text-xl sm:text-2xl flex mx-3 sm:mx-0">Publishers <span className="border-b-2 border-black w-full" /></h1>
            <div className="max-h-[29.6rem] overflow-y-auto mx-3 sm:mx-0 mt-4 overflow-auto">
                {status === 'loading' ?
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mx-3 sm:mx-0">
                        {Array(12).fill("").map((_, index) => <div className="h-12 w-full bg-[#e3e2e0]" key={index} />)}
                    </div>
                    :
                    <div className="flex flex-wrap gap-2">
                        {
                            publishers.map((publisher) =>
                                <Link to={`/publisher/${publisher.id}`} key={publisher.id} onClick={() => handleClick(publisher)}>
                                    <h5 className="bg-[#aad6e8] p-2 cursor-pointer text-gray-700 hover:bg-[#7ecceb]">
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

