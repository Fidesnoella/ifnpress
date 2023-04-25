import { Outlet, useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Top from "../Top";
import Trending from "../Trending";
import Authors from "../Authors";


export default function PageLayout() {
    const { id } = useParams()
    return (
        <main className="bg-[#f4f3f0]">
            <Navbar />
            {id ? null : <Top />}
            <div className="grid grid-cols-3 max-w-7xl container mx-auto px-6 gap-x-10 flex-1">
                <div className="col-span-2">
                    <Outlet />
                </div>
                <div className="flex flex-col gap-y-8">
                    <Trending />
                    <Authors />
                </div>
            </div>
            <Footer />
        </main>
    );
}
