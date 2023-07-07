import { Link } from "react-router-dom";
import { NewsProps } from "../../types";

export default function FullNews({ img, date, title, text, url }: NewsProps) :JSX.Element {
    return (
        <div className="mx-3 sm:mx-0">
            <img src={img ?? "https://images.pexels.com/photos/4065152/pexels-photo-4065152.jpeg?auto=compress&cs=tinysrgb&w=1600&"} alt="" className="max-h-[31.25rem] w-full bg-cover object-cover" />
            <div className="p-2">
                <h2 className="mb-2 gap-1 text-xl sm:text-2xl font-bold tracking-tight text-gray-500 flex flex-col">
                    {title}
                    <span className="text-base font-normal">{date}</span>
                </h2>
                <p className="mb-2 text-base sm:text-lg font-bold tracking-tight text-gray-400">{text}</p>
            </div>
            <Link to={url} target="_blank" className="py-2 px-4 mx-2 text-gray-700 font-semibold hover:bg-[#7ecceb] bg-[#aad6e8]">
                Read More
            </Link>
        </div>
    );
}
