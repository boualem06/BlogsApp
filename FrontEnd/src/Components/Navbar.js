import {Link } from "react-router-dom";
import Menu from '@material-ui/icons/Menu'
function NavBar() {
   
    return (

        <div style={{ width: "100%" }} className="bg-red-300 px-8 py-2 flex justify-between ">
            <h1 className='text-white font-bold text-2xl '> Blogs App</h1>
            <div className=''>
                <button className=' hover:underline p-2 font-bold text-white'><Link to={"/"}>ALL BLOGS</Link></button>
                <button className='hover:underline p-2 font-bold text-white'><Link to={"/MyBlogs"}>MY BLOGS</Link></button>
                <button className='hover:underline p-2 font-bold text-white'><Link to={"/NewBlog"}>ADD BLOG</Link></button>
            </div>
            <div>
                <button className='  py-2 px-2 bg-blue-500 font-bold text-white text-lg rounded-md' onClick={()=>{localStorage.removeItem('jwt');window.location.reload()}}>Logout</button>
            </div>
        </div>
    )
}
export default NavBar;
