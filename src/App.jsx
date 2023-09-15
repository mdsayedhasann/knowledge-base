import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  const [bookmark, setBookmark] = useState([])

  const handleBookmark = (blog) =>{
    console.log(blog);
    const newBookmarks = [...bookmark, blog]
    setBookmark(newBookmarks)
  }
  return (
    <>
      <Header></Header>

      <div className="flex justify-around">
        <div className="w-2/3"><Blogs handleBookmark={handleBookmark}></Blogs></div>
        <div className="w-1/3">
          <Bookmarks bookmark={bookmark}></Bookmarks>
        </div>
      </div>
      
    </>
  );
}

export default App;
