import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Posts from "./Posts";
import PaginationPages from "./PaginationPages";
const PaginationMain = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // usestate for data fetching
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  //get current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = useCallback((pageNumbers) => {
    setCurrentPage(pageNumbers);
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-5">My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <PaginationPages
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default PaginationMain;
