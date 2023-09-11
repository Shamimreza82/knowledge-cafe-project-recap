import "./App.css";
import Bookmarks from "./Component/Boomarks/Bookmarks";
import Header from "./Component/Header/Header";
import SideBookmar from "./Component/SideBookmarks/SideBookmar";

function App() {
  return (
    <main>
      <Header></Header>
      <div className="flex justify-between lg:w-[78%] m-auto">
        <Bookmarks></Bookmarks>
        <SideBookmar></SideBookmar>
      </div>
    </main>
  );
}

export default App;
