import { useState } from "react";
import "./App.css";
import Bookmarks from "./Component/Boomarks/Bookmarks";
import Header from "./Component/Header/Header";
import SideBookmar from "./Component/SideBookmarks/SideBookmar";

function App() {
  const [bookmark, setbookmark] = useState([])

  const handleBookmarks = (bookmark) => {
    console.log (" handle book marks", bookmark)
    setbookmark (bookmark)

  }

  return (
    <main>
      <Header></Header>
      <div className="flex justify-between lg:w-[78%] m-auto">
        <Bookmarks handleBookmarks={handleBookmarks}></Bookmarks>
        <SideBookmar bookmark={bookmark}></SideBookmar>
      </div>
    </main>
  );
}

export default App;
