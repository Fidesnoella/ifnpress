import { useSelector } from "react-redux";
import { GeneralProps } from "../../types";
import { selectMode } from "../../features/toggleMode";

export default function TopNews({ title, author, img, date, articleOrder, handleClick }: GeneralProps):JSX.Element {
    const mode = useSelector(selectMode);
    return (
        articleOrder === "first" ?
            <div className="grid lg:row-span-2 md:col-span-2 w-full group h-[80rem] lg:h-[28.125rem] max-h-80 lg:max-h-[28.125rem] mb-32 sm:mb-0"
                onClick={handleClick}>
                <div className={`${mode === 'light' ? "sm:text-[#F5F5F5]  text-gray-600 " : "text-[#b1b2b4]" } relative cursor-pointer lg:max-h-[37.5rem]`}>
                    <img src={img ?? "https://images.pexels.com/photos/4065152/pexels-photo-4065152.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt="" className="w-full h-full object-cover max-h-80 lg:max-h-[28.125rem]" />
                    <div className="sm:absolute inset-0 bg-black opacity-50"></div>
                    <div className="sm:absolute bottom-4 left-2 flex gap-2 flex-col">
                        <span className="text-base xss:text-lg sm:text-xl md:text-3xl max-w-xl font-semibold tracking-tight group-hover:underline pt-2 md:pt-0">{title?.substring(0, 80)}...</span>
                        <span className="font-normal text-xs sm:text-sm right-2">{date}</span>
                    </div>
                    <p className={`${mode === 'light' ? "bg-[#aad6e8] group-hover:bg-[#4dbce8] text-gray-700" : "group-hover:bg-[#3c3c3d] text-[#9d9fa4] bg-black"} absolute top-2 left-2 p-1`}>
                        {author ?? "BBC"}
                    </p>
                </div>
            </div>
            :
            <div className="relative group cursor-pointer pb-32 xss:pb-24 sm:pb-0" onClick={handleClick}>
                <img src={img ?? "https://images.pexels.com/photos/4065152/pexels-photo-4065152.jpeg?auto=compress&cs=tinysrgb&w=1600"} className=" h-full w-full object-cover max-h-80 lg:max-h-none" />
                <div className="sm:absolute inset-0 bg-black opacity-50"></div>
                <p className={`absolute top-2 left-2 p-1 ${mode === 'light' ? "bg-[#aad6e8] group-hover:bg-[#4dbce8] text-gray-700" : "text-[#9d9fa4] bg-black group-hover:bg-[#3c3c3d]"} `}>
                    {author ?? "BBC"}
                </p>
                <div className={`${mode === 'light' ? "sm:text-[#F5F5F5] text-gray-600" : "text-[#b1b2b4]" } sm:absolute bottom-2 left-2 flex gap-1 flex-col pt-1`}>
                    <span className="text-base xss:text-lg sm:text-xl md:max-w-xs font-semibold tracking-tight group-hover:underline">{title?.substring(0, 50)}...</span>
                    <span className="font-normal text-xs sm:text-sm right-2">{date}</span>
                </div>
            </div>
    );
}
