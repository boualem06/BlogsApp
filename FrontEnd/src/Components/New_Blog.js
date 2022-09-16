
import TextField from '@material-ui/core/TextField'
import { useState } from 'react'
import NavBar from './Navbar';
export default function New_Blog({ initialblog }) {
    let data = {};
    let blogToSubmit = {
        author: "",
        body: "",
        imagelink: "",
        place: "",
        title: ""
    };
    const [blog, setBlog] = useState({
        author: "",
        body: "",
        imagelink: "",
        place: "",
        title: ""
    });

    let getMe = async () => {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "accestoken": localStorage.getItem('jwt')
        }

        let response = await fetch("http://localhost:5000/me", {
            method: "GET",
            headers: headersList
        });

        data = await response.json();
        console.log(data);
    }


    const addblog = async () => {


        await getMe();
        blogToSubmit=blog ;
        blogToSubmit.author=data.name ;
        // setBlog({...blog,author:data.name}) ;
        console.log(blogToSubmit)

        // console.log(blog)
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "accestoken": localStorage.getItem('jwt'),
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify(blogToSubmit);

        let response = await fetch("http://localhost:5000/add", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data2 = await response.json();
        console.log(data2);

    }
    return (
        <div style={{ width: "100%" }} className="flex flex-col justify-center items-center py-2 ">
            <NavBar></NavBar>
            <div className='mt-4 sm:w-full md:w-1/2  flex flex-col justify-center items-center  gap-8 border px-4 py-2 rounded-lg shadow-xl'>
                <h1 className='text-3xl font-bold  px-4 py-2 rounded-lg shadow drop-shadow-lg hover:drop-shadow-2xl cursor-pointer text-pink-400 '> Add A New Blog </h1>
                <TextField defaultValue={initialblog.title} onChange={(e) => { setBlog({ ...blog, title: e.target.value }) }} className="w-full" variant="outlined" Size="Normal" id="standard-basic" label="Title" />
                <TextField defaultValue={initialblog.body} onChange={(e) => { setBlog({ ...blog, body: e.target.value }) }} className="w-full" minRows={8} variant="outlined" Size="Normal" multiline="true" required="true" id="standard-basic" label="Blog" />
                <TextField defaultValue={initialblog.imagelink} onChange={(e) => { setBlog({ ...blog, imagelink: e.target.value }) }} className="w-full" variant="outlined" Size="Normal" required="true" id="standard-basic" label="Image Url" />
                <TextField defaultValue={initialblog.place} onChange={(e) => { setBlog({ ...blog, place: e.target.value }) }} className="w-full" variant="outlined" Size="Normal" required="true" id="standard-basic" label="Place" />
                <button onClick={addblog} className=' hover:drop-shadow-lg hover:shadow-2xl  bg-blue-500 text-xl text-white font-bold px-4 py-2 border rounded-2xl'>Submit</button>
            </div>
        </div>
    )
}

