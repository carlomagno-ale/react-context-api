import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from './pages/Home'
import PostsList from "./pages/PostsList";

import SinglePost from "./pages/SinglePost.jsx";


export default function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="post" element={<PostsList />} />
            <Route path="/post/:id" element={<SinglePost />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}