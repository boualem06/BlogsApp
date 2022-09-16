import { Delete, Edit } from '@material-ui/icons';
import {Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar'
function Blog({ blog }) {
    const delet = () => {
        let headersList = {
            "Accept": "*/*",
            "accestoken": localStorage.getItem('jwt'),
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "_id": `${blog._id}`
        });

        fetch("http://localhost:5000/delete", {
            method: "DELETE",
            body: bodyContent,
            headers: headersList
        }).then((res) => {
            window.location.reload(false) ;
        })
    }
    return (
        <div style={{ width: "100%" }} className="bg-red- p-4 flex justify-center items-center" >
            <div className='w-1/2 flex-col items-center justify bg-gray-200 py-2 px-4 rounded-xl shadow drop-shadow-lg'>
                <div className='flex justify-end'>
                  {/* <Link to={"/NewBlog"}><Edit color='primary' fontSize="large" className='hover:bg-blue-200'></Edit></Link>   */}
                    <Delete onClick={() => delet()} color='secondary' fontSize="large" className='hover:bg-red-200'></Delete>
                </div>
                <div className='flex mt-6 mb-2'>
                    <Avatar className="bg-red-500">{((blog.author)[0]).toUpperCase()}</Avatar>
                    <div className='ml-2  flex justify-center items-center'>
                        <h1 className='font-bold'>{blog.title}</h1>
                    </div>
                </div>
                <div style={{ width: "100%" }} className='mb-6 flex  items-center justify-center'>
                    <img
                        src={blog.imagelink}
                        alt="new"
                    />
                </div>
                <div className='flex mb-4'>
                    <h1 className='font-bold lg:text-xl'>{blog.author}: </h1>
                    <h1 className=' flex justify-center items-center lg:text-lg'> recored in {blog.place}</h1>
                </div>
            </div>
        </div>
    )
}
export default Blog;