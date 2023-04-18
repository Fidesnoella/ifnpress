import { useEffect } from "react";
import { fetchAuthors, selectAuthorsStatus, selectAuthorsError, selectAuthors } from "../features/publishers";
import { useDispatch, useSelector } from "react-redux";

export default function Authors() {

    const dispatch = useDispatch()
    const authors = useSelector(selectAuthors)
    const status = useSelector(selectAuthorsStatus);
    const error = useSelector(selectAuthorsError);

    console.log(authors)

    useEffect(() => {
        dispatch(fetchAuthors())
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
            <div className="max-h-80 overflow-y-auto mt-4 overflow-auto">
                <div className="flex flex-wrap gap-2">
                    {
                        authors.map((author) =>
                            <h5 className="bg-[#aad6e8] p-2 cursor-pointer text-gray-700 hover:bg-[#7ecceb]" key={author.id}>{author.name}</h5>
                        )
                    }
                </div>

            </div>
        </main>
    );
}

