import Navbar from "./Navbar"
import Authors from "./Authors/"
import LatestNews from "./Latest"
import Footer from "./Footer"
import TrendingNews from "./Trending"
import Top from "./Top"

export default function News() {
    return (
        <main className="bg-[#f4f3f0]">
            <Navbar />
            <Top />
            <div className="grid grid-cols-3 max-w-7xl container mx-auto px-6 gap-x-10 flex-1">
                <div className="col-span-2">
                    <LatestNews />
                </div>
                <div className="flex flex-col gap-y-8">
                    <TrendingNews />
                    <Authors />
                </div>
            </div>
            <Footer />
        </main>
    );
}
