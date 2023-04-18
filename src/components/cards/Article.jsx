export default function Article({ img, title, text }) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 cursor-pointer hover:bg-gray-100">
            <img className="rounded-t-lg" src={img} alt="" />
            <div className="p-2">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-500 dark:text-white">{title}</h5>
                <h6 className="mb-2 text-base font-bold tracking-tight text-gray-400 dark:text-white">{text}</h6>
                <p className="text-[#699dec] text-base">Continue reading</p>
            </div>
        </div>
    );
}
