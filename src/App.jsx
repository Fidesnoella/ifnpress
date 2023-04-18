import Articles from "./components/Articles";
import Authors from "./components/Authors";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



export default function App() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3 max-w-7xl container mx-auto px-6 gap-x-10">
        <div className="col-span-2">
          <Articles />
        </div>
        <div>
          <Authors />
        </div>
      </div>
      <Footer />
    </>
  )
}

