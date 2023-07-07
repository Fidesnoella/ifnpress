import { Outlet, useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Top from "../Top";
import Trending from "../Trending";
import Authors from "../Authors";
import { useSelector } from "react-redux";
import { selectMode } from "../../features/toggleMode";

export default function PageLayout():JSX.Element {
    const { id } = useParams();
    const mode = useSelector(selectMode);
    return (
        <main className={`${mode === 'light' ? 'bg-[#f4f3f0]' : 'bg-[#303134]' }`}>
            <Navbar />
            {!id && <Top />}
            <div className="lg:grid lg:grid-cols-3 max-w-7xl container mx-auto px-0 sm:px-6 gap-x-0 lg:gap-x-10 flex-1">
                <div className="col-span-2">
                    <Outlet />
                </div>
                <div className="flex flex-col gap-y-8 w-full">
                    <Trending />
                    <Authors />
                </div>
            </div>
            <Footer />
        </main>
    );
}
