
import { useEffect, useState } from 'react';
import Blog from './Blog'
import Navbar from './Navbar'
function BlogsList() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {

        const fetchdata = async () => {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "accestoken": localStorage.getItem('jwt'),
                "Content-Type": "application/json",
            }

            let response = await fetch("http://localhost:5000/all", {
                method: "GET",
                headers: headersList
            });

            let data = await response.json();
            console.log(data);
            setBlogs(data);

        }
        fetchdata();


    }, []);


    return (

        <div >
            <Navbar></Navbar>
            <div >
                {blogs.length != 0 ? blogs.map((elem) =>
                    (<div key={elem.id}> <Blog blog={elem} ></Blog> </div>)
                ) : <div>Loading </div>}
            </div>

        </div>
    )
}
export default BlogsList;
