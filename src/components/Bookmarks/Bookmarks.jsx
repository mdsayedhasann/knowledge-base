/* eslint-disable no-unused-vars */
import React from "react";
import Bookmark from "../Bookmark/Bookmark";

// eslint-disable-next-line react/prop-types
const Bookmarks = ({ bookmark }) => {
  return (
    <div>
      <h1> Bookmark: {bookmark.length} </h1>
      {
          bookmark.map(bookmar => <Bookmark key={bookmar.id} bookmar={bookmar}></Bookmark>)
      }
    </div>
  );
};

export default Bookmarks;
