import { Link } from "react-router-dom";
import { NewsProps } from "../../types";
import { selectMode } from "../../features/toggleMode";
import { useSelector } from "react-redux";

export default function FullNews({ img, date, title, text, url }: NewsProps) :JSX.Element {
    const mode = useSelector(selectMode);
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
            <Link to={url} target="_blank" className={`${mode === 'light' ? "hover:bg-[#7ecceb] bg-[#aad6e8] text-gray-700" : "bg-black  hover:bg-[#3c3c3d] text-[#9d9fa4]" } py-2 px-4 mx-2 font-semibold`}>
                Read More
            </Link>
        </div>
    );
}
