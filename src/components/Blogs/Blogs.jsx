import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useState(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div></div>;
};

export default Blogs;
