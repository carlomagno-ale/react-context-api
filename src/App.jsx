import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from './pages/Home'
import PostsList from "./pages/PostsList";

import PostContext from "./context/PostContext.jsx";

import SinglePost from "./pages/SinglePost.jsx";


export default function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {

        console.log(data)
        setPosts(data)


      })
  }, [])

  return (
    <>
      <PostContext.Provider value={{ posts: posts }}>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="post" element={<PostsList />} />
              <Route path="/post/:id" element={<SinglePost />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </PostContext.Provider>
    </>
  )
}