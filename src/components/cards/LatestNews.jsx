export default function LatestNews({ img, title, text }) {
    return (
        <div className="max-w-sm bg-white cursor-pointer hover:bg-gray-200 ">
            <img src={img} alt="" />
            <div className="p-2">
                <h2 className="mb-2 text-lg font-bold tracking-tight text-gray-500 dark:text-white">{title}</h2>
                <p className="mb-2 text-base font-bold tracking-tight text-gray-400 dark:text-white">{text}</p>
                <p className="text-[#5c96ed] text-base">Continue reading</p>
            </div>
        </div>
    );
}
