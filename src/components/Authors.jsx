import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
    fetchPublishers, selectPublisher, selectPublisherError,
    selectPublisherStatus, setSelectedAuthor
} from "../features/publisher";

export default function Authors() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { category } = useSelector(state => state.news)
    const publishers = useSelector(selectPublisher)
    const status = useSelector(selectPublisherStatus);
    const error = useSelector(selectPublisherError);

    useEffect(() => {
        dispatch(fetchPublishers(category))
    }, [category])

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>{error}</div>;
    }

    function handleClick(publisher) {
        dispatch(setSelectedAuthor(publisher.id))
        window.scroll(0, 0)
        navigate(`/author/${publisher.id}`)
        console.log(publisher.id, "publisher-id");
    }

    return (
        <main>
            <h1 className="py-4 text-xl sm:text-2xl flex mx-3 sm:mx-0">Publishers <span className="border-b-2 border-black w-full" /></h1>
            <div className="max-h-[29.6rem] overflow-y-auto mx-3 sm:mx-0 mt-4 overflow-auto">
                <div className="flex flex-wrap gap-2">
                    {
                        publishers.map((publisher) =>
                            <Link to={`/publisher/${publisher.id}`} onClick={() => handleClick(publisher)}>
                                <h5 className="bg-[#aad6e8] p-2 cursor-pointer text-gray-700 hover:bg-[#7ecceb]"
                                    key={publisher.id} >
                                    {publisher.name}
                                </h5>
                            </Link>
                        )
                    }
                    {/* {
                        authors.map((author) => {
                            if (!author.author) {
                                return null; // Skip this iteration
                            }

                            return (
                                <h5 className="bg-[#aad6e8] p-2 cursor-pointer text-gray-700 hover:bg-[#7ecceb]"
                                    key={author.url} onClick={() => handleClick(author)}>
                                    {author.source.name}
                                </h5>
                            );
                        })
                    } */}

                </div>
            </div>
        </main >
    );
}

