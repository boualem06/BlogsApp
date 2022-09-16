

import Blog from './Components/Blog'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import NewBlog from './Components/New_Blog'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from './Components/BlogsList'
import './App.css';
import PrivateRoutes from './Components/PrivateRoutes'
import MyBlogs from './Components/MyBlogs'

function App() {
  const initial = {
    author: "Boualem",
    body: "",
    imagelink: "",
    place: "",
    title: ""
  }
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path={'/'} element={<BlogList />} />
          <Route path={'/NewBlog'} element={<NewBlog initialblog={initial} />} />
          <Route path={'/MyBlogs'} element={< MyBlogs/>} />
          MyBlogs
        </Route>
        <Route path={'/Signup'} element={<SignUp />} />
        <Route exact path={'/login'} element={<Login />} />
      </Routes>
    </Router>
  );
}




export default App;
