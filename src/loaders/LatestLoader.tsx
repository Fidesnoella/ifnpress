export default function LatestLoader({style}:{style?:string}):JSX.Element {
    return (
        <div className={`w-full h-56 bg-[#e3e2e0] mx-3 sm:mx-0 overflow-hidden animate-pulse ${style}`}></div>
    )
}

