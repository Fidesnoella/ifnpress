export default function TopNews({ title, author, img, date, articleorder }) {
    return (
        articleorder === "first" ?
            <div className="grid row-span-2 col-span-2 w-full h-full group">
                <div className="relative cursor-pointer text-[#F5F5F5]">
                    <img src={img ?? "https://images.pexels.com/photos/4065152/pexels-photo-4065152.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt="" className="w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute bottom-4 left-2 flex gap-2 flex-col">
                        <span className="text-3xl max-w-xl font-semibold tracking-tight group-hover:underline">{title?.substring(0, 80)}...</span>
                        <span className="font-normal text-sm right-2">{date}</span>
                    </div>
                    <p className="absolute top-2 left-2 bg-[#aad6e8] text-gray-700 p-1 group-hover:bg-[#4dbce8]">{author?.substring(0, 15) ?? "BBC"}</p>
                </div>
            </div>
            :
            <div className="flex gap-2 w-full h-full">
                <div className="relative text-[#F5F5F5] cursor-pointer group">
                    <img src={img ?? "https://images.pexels.com/photos/4065152/pexels-photo-4065152.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt="" className="object-cover container pb-2" />
                    <div class="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute bottom-4 left-2 flex gap-2 flex-col">
                        <span className="text-xl max-w-xs font-semibold tracking-tight group-hover:underline">{title?.substring(0, 50)}...</span>
                        <span className="font-normal text-sm right-2">{date}</span>
                    </div>
                    <p className="absolute top-2 left-2 bg-[#aad6e8] text-gray-700 p-1 group-hover:bg-[#4dbce8]">{author?.substring(0, 15) ?? "BBC"}</p>
                </div>
            </div>
    );
}
