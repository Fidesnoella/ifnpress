export default function TopNews({ title, author, img, date, articleorder, handleClick }) {
    return (
        articleorder === "first" ?
            <div className="grid row-span-2 col-span-2 w-full h-full group" onClick={handleClick}>
                <div className="relative cursor-pointer text-[#F5F5F5] max-h-[37.5rem] ">
                    <img src={img ?? "https://images.pexels.com/photos/4065152/pexels-photo-4065152.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt="" className="w-full max-h-[28.125rem] h-full object-cover" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute bottom-4 left-2 flex gap-2 flex-col">
                        <span className="text-3xl max-w-xl font-semibold tracking-tight group-hover:underline">{title?.substring(0, 80)}...</span>
                        <span className="font-normal text-sm right-2">{date}</span>
                    </div>
                    <p className="absolute top-2 left-2 bg-[#aad6e8] text-gray-700 p-1 group-hover:bg-[#4dbce8]">{author?.substring(0, 15) ?? "BBC"}</p>
                </div>
            </div>
            :
            <div className="flex gap-2 w-full h-full" onClick={handleClick}>
                <div className="relative text-[#F5F5F5] cursor-pointer group max-h-[18.75rem] w-full h-full">
                    <img src={img ?? "https://images.pexels.com/photos/4065152/pexels-photo-4065152.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt="" className="object-cover container pb-2 h-full max-w-[25rem] max-h-[14.0625rem] w-full" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute bottom-4 left-2 flex gap-2 flex-col">
                        <span className="text-xl max-w-xs font-semibold tracking-tight group-hover:underline">{title?.substring(0, 50)}...</span>
                        <span className="font-normal text-sm right-2">{date}</span>
                    </div>
                    <p className="absolute top-2 left-2 bg-[#aad6e8] text-gray-700 p-1 group-hover:bg-[#4dbce8]">{author?.substring(0, 15) ?? "BBC"}</p>
                </div>
            </div>
    );
}
