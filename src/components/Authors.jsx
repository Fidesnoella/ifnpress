import { useEffect } from "react";
import { fetchNews, selectNews, selectNewsError, selectNewsStatus } from "../features/news";
import { useDispatch, useSelector } from "react-redux";

export default function Authors() {

    const dispatch = useDispatch()
    const authors = useSelector(selectNews)
    const status = useSelector(selectNewsStatus);
    const error = useSelector(selectNewsError);

    useEffect(() => {
        dispatch(fetchNews('general'))
    }, [])

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>{error}</div>;
    }

    return (
        <main>
            <h1 className="py-4 text-2xl flex">Authors <span className="border-b-2 border-black w-full" /></h1>
            <div className="max-h-[29.6rem] overflow-y-auto mt-4 overflow-auto">
                <div className="flex flex-wrap gap-2">
                    {
                        authors.map((author) =>
                            <h5 className="bg-[#aad6e8] p-2 cursor-pointer text-gray-700 hover:bg-[#7ecceb]" key={author.url}>{author.author ?? "BBC"}</h5>
                        )
                    }
                </div>

            </div>
        </main >
    );
}

