/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import PropTypes from "prop-types";
import './blog.css'
import { FaBeer, FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleBookmark }) => {
  //   console.log({ blog });
  const { title, id, cover, author, author_img, posted_date, reading_time, hashtags  } = blog;
  return (
    <div className="blog mb-7">
        <img src={cover} alt="" />

        <div className="flex justify-between">
            {/* Aythor Info */}
            <div className="author flex justify-around items-center gap-5">
                <img src={author_img} alt="" />
                <div>
                <h3 className="text-xl font-semibold">{author}  </h3>
                <small> {posted_date} </small>
                </div>
                
            </div>

            {/* Time Read */}
            <div className="flex justify-around gap-3 items-center">
                <h3>{reading_time} read</h3>
                <div>
                <button onClick={() => handleBookmark(blog)}><FaBookmark></FaBookmark></button>
                <h3> </h3>
                </div>
            </div>
        </div>


        <h2 className="text-3xl font-bold w-2/3">{title}</h2>
        {
            hashtags.map(hash => <span> #<a href="">{hash}, </a> </span> )
        }

    </div>
  );
};

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
  
};
export default Blog;
