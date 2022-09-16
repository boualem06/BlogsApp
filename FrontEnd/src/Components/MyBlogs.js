import { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import Blog from "./Blog";
import Navbar from "./Navbar";
function MyBlogs() {
    const [data,setData]=useState([]) ;
   useEffect(()=>{
    const getMyBlogs=async()=>{
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "accestoken": localStorage.getItem('jwt')
           }
           
           let response = await fetch("http://localhost:5000/myblogs", { 
             method: "GET",
             headers: headersList
           });
           
           let data = await response.json();
           console.log(data);
           setData(data) ;
           
    }
    getMyBlogs()
   },[])
    return (
        <div>
        <Navbar></Navbar>
        {data.length != 0 ? data.map((elem) =>
            (<div key={elem.id}> <Blog blog={elem} ></Blog> </div>)
        ) : <div>Loading </div>}
        </div>
       
    )
}
export default MyBlogs;
