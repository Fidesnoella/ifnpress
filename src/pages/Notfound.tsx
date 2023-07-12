import { useSelector } from "react-redux"
import { selectMode } from "../features/toggleMode"
import { Link, useNavigate } from "react-router-dom";
import pressLogo from '../assets/press-logo.png';
import ifnpress from '../assets/ifnpress.png';
import notFound from "../assets/404.png"


export default function NotFound(): JSX.Element {
  const mode = useSelector(selectMode)
  const navigate = useNavigate()
  return (
    <div className={`h-screen ${mode === 'light' ? 'bg-[#f4f3f0] text-black' : 'bg-[#303134] text-white' }`}>
      <div className={`${mode === 'light' ? 'bg-[#aad6e8]' : "bg-[#202124] text-white"}`}>
        <div className="max-w-7xl container mx-auto py-6">
          <Link to="/">
            <img src={mode === 'light' ? pressLogo : ifnpress} alt="IFN Press" className="h-12 xss:h-16 cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="max-w-7xl container mx-auto pt-24">
        <div className="flex flex-col items-center">
          <h1 className="text-[#03cccc] font-bold text-4xl">OOOPS!!!</h1>
          <img src={notFound} alt="sad" className="w-56 bg-[#f4f3f0] p-2 my-4" />
          <div className="flex flex-col gap-2">
          <p className="text-center text-xl font-semibold">Page not found</p>
          <p className="text-lg">We can't find the page you're looking for</p>
          </div>
          <button className={`${mode === 'light' ? "bg-[#5ebde2] hover:bg-[#7ecceb] text-gray-700" : "bg-black hover:bg-[#4b4c4e] text-gray-300"} font-semibold py-2 px-6 cursor-pointer mt-10`}
            onClick={() => navigate("/")}>
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  )
}
