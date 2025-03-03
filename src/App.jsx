import { BrowserRouter, Routes, Route } from "react-router-dom";


import HomePage from "./page/HomePage"
import AboutUs from "./page/ContactPage"
import Posts from './page/posts/Posts';
import SinglePost from './page/posts/SinglePost';



import DefaultLayout from "./layouts/DefaultLayout"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/aboutus" Component={AboutUs} />
            <Route path="/posts" Component={Posts} />
            <Route path="/posts/:id" Component={SinglePost} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App