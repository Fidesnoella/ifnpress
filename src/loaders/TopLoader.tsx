import { articleOrderProps } from "../types";

export default function TopLoader({ articleOrder } : articleOrderProps): JSX.Element {
  return (
    articleOrder === "first" ?
      <div className="grid lg:row-span-2 md:col-span-2 w-full h-full group">
        <div className="w-full bg-[#e3e2e0] h-80 md:h-[21.5625rem] mb-16 sm:mb-0"></div>
      </div>
      :
      <div className="relative group cursor-pointer pb-20 sm:pb-0">
        <div className="w-full bg-[#e3e2e0] h-80 md:h-40"></div>
      </div>
  )
}


