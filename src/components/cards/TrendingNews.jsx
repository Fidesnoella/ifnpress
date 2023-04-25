export default function TrendingNews({ img, title, date, last = false }) {
    return (
        <div className={` border-gray-400 ${last ? "border-0" : "border-b"} hover:bg-[#e3e2e0] cursor-pointer`}>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <img src={img ?? "https://images.pexels.com/photos/4065152/pexels-photo-4065152.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt="" className="w-full h-36 object-cover container pb-2" />
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="mb-2 text-base font-bold tracking-tight text-gray-500">{title?.substring(0, 60)}...</h2>
                    <div className="flex justify-between gap-3">
                        <span className="text-gray-500 text-sm pb-2">{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}