export default function LatestNews({ img, title, text, date, handleClick }) {
    return (
        <div className=" max-w-none sm:max-w-lg md:max-w-sm bg-white cursor-pointer hover:bg-[#e3e2e0] mx-3 sm:mx-0 overflow-hidden" onClick={handleClick}>
            <img src={img ?? "https://images.pexels.com/photos/4065152/pexels-photo-4065152.jpeg?auto=compress&cs=tinysrgb&w=1600&"} alt="" className="max-h-48 w-full bg-cover object-cover" />
            <div className="p-2">
                <h2 className="mb-2 gap-1 text-lg font-bold tracking-tight text-gray-500 dark:text-white flex flex-col">
                    {title?.substring(0, 80)}...
                    <span className="text-sm sm:text-base font-normal">{date}</span>
                </h2>
                <p className="mb-2 overflow-hidden text-base font-bold tracking-tight text-gray-400 dark:text-white">{text?.substring(0, 85)}...</p>
            </div>
        </div>
    );
}
