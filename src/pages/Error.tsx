import { useSelector } from "react-redux"
import { selectMode } from "../features/toggleMode"
import pressLogo from '../assets/press-logo.png';
import ifnpress from '../assets/ifnpress.png';
import sad from "../assets/sad.gif";
import { useNavigate } from "react-router-dom";


export default function Error(): JSX.Element {
  const mode = useSelector(selectMode)
  const navigate = useNavigate()
  return (
    <div className="h-screen bg-[#f4f3f0]">
      <div className={`${mode === 'light' ? 'bg-[#aad6e8]' : "bg-[#202124] text-white"}`}>
        <div className="max-w-7xl container mx-auto py-6">
          <img src={mode === 'light' ? pressLogo : ifnpress} alt="IFN Press" className="h-12 xss:h-16 cursor-pointer" />
        </div>
      </div>
      <div className="max-w-7xl container mx-auto pt-24">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-[#03cccc] font-bold text-4xl">OOOPS!!!</h1>
          <img src={sad} alt="sad" className="w-28" />
          <p className="text-center text-lg">
            Sorry! Something went wrong.<br />
            Try something else while we fix it!
          </p>
          <button className={`${mode === 'light' ? "bg-[#5ebde2] hover:bg-[#7ecceb] text-gray-700" : "bg-black hover:bg-[#4b4c4e] text-gray-300"} font-semibold py-2 px-6 cursor-pointer`}
            onClick={() => navigate("/")}>
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  )
}
