export default function TopNews({ img, author, date }) {
    return (
        <div className="relative text-white">
            <img src={img} alt="" className="w-full h-full" />
            <span className="absolute bottom-2 left-2">{author}</span>
            <span className="absolute bottom-2 right-2">{date}</span>
        </div>
    );
}
