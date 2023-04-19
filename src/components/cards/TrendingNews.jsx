export default function TrendingNews({ img, title, author, date }) {
    return (
        <div className="border-b border-gray-400">
            <div className="grid grid-cols-2 gap-4 overflow-hidden">
                <div>
                    <img src={img} alt="" className="w-full h-full bg-cover pb-2" />
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="mb-2 text-base font-bold tracking-tight text-gray-500">{title}</h2>
                    <div className="flex justify-between gap-3">
                        <span className="text-gray-500 text-sm">{author}</span>
                        <span className="text-gray-500 text-sm">{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}