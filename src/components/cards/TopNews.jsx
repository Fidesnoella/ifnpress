export default function TopNews({ title, author, img, date, articleorder, handleClick }) {
    return (
        articleorder === "first" ?
            <div className="grid lg:row-span-2 md:col-span-2 w-full h-full group" onClick={handleClick}>
                <div className="relative pb-32 xss:pb-20 sm:pb-0 cursor-pointer text-gray-600 sm:text-[#F5F5F5] lg:max-h-[37.5rem] ">
                    <img src={img ?? "https://images.pexels.com/photos/4065152/pexels-photo-4065152.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt="" className="w-full max-h-80 lg:max-h-[28.125rem] h-full object-cover" />
                    <div className="sm:absolute inset-0 bg-black opacity-50"></div>
                    <div className="sm:absolute bottom-4 left-2 flex gap-2 flex-col">
                        <span className="text-base xss:text-lg sm:text-xl md:text-3xl max-w-xl font-semibold tracking-tight group-hover:underline pt-2 md:pt-0">{title?.substring(0, 80)}...</span>
                        <span className="font-normal text-xs sm:text-sm right-2">{date}</span>
                    </div>
                    <p className="absolute top-2 left-2 bg-[#aad6e8] text-gray-700 p-1 group-hover:bg-[#4dbce8]">{author?.substring(0, 15) ?? "BBC"}</p>
                </div>
            </div>
            :
            <div className="relative group cursor-pointer pb-20 sm:pb-0" onClick={handleClick}>
                <img src={img ?? "https://images.pexels.com/photos/4065152/pexels-photo-4065152.jpeg?auto=compress&cs=tinysrgb&w=1600"} className=" h-full w-full object-cover max-h-80 lg:max-h-none" />
                <div className="sm:absolute inset-0 bg-black opacity-50"></div>
                <p className="absolute top-2 left-2 bg-[#aad6e8] text-gray-700 p-1 group-hover:bg-[#4dbce8]">{author?.substring(0, 15) ?? "BBC"}</p>
                <div className="sm:absolute bottom-2 left-2 flex gap-1 flex-col text-gray-600 sm:text-[#F5F5F5] pt-1">
                    <span className="text-base xss:text-lg sm:text-xl md:max-w-xs font-semibold tracking-tight group-hover:underline">{title?.substring(0, 50)}...</span>
                    <span className="font-normal text-xs sm:text-sm right-2">{date}</span>
                </div>
            </div>
    );
}
