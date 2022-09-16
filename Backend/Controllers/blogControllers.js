const Blog=require('../models/blog')



const add= (req, res) => {
     console.log(req.body) ;
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(err)
        })
        ;
}

const all=(req, res) => {

    Blog.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(err)
        })
        ;
}

const delet=(req,res)=>{
    Blog.findByIdAndDelete(req.body._id)
    .then((result)=>{res.send(result)})
}

const find_by_author= async(req,res)=>{
   const blogs= await Blog.find({"author":req.body.author})
  console.log(blogs) ;
  res.send(blogs) ;
}

const myBlogs=async(req,res)=>{
    console.log(req.user.name)
    const blogs= await Blog.find({"author":req.user.name})
    console.log(blogs) ;
    res.send(blogs) ;
}


module.exports={
    add,
    all,
    delet,
    find_by_author,
    myBlogs
    
}



