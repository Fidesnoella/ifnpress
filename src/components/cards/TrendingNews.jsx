export default function TrendingNews({ img, title, date, text, last = false, handleClick }) {
    return (
        <div className={` border-gray-400 ${last ? "border-0" : "border-b"} hover:bg-[#e3e2e0] cursor-pointer`} onClick={handleClick}>
            <div className="grid grid-cols-2 gap-2 w-full relative overflow-hidden">
                <div>
                    <img src={img ?? "https://images.pexels.com/photos/4065152/pexels-photo-4065152.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt="" className="w-full h-36 sm:h-48 lg:h-36 object-cover container pb-2" />
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="mb-2 text-sm xss:text-base sm:text-lg lg:text-base font-bold tracking-tight text-gray-500">
                        {title?.substring(0, 60)}...</h2>
                    <span className="text-gray-500 text-xs sm:text-sm absolute bottom-2">{date}</span>
                    <p className="hidden sm:block lg:hidden mb-2 text-base font-bold tracking-tight text-gray-400">{text?.substring(0, 85)}...</p>
                </div>
            </div>
        </div>
    );
}