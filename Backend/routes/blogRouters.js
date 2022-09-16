const express = require('express')
const router = express.Router();
const blogControllers=require('../Controllers/blogControllers')
const Blog=require('../models/blog')
const {protect}=require('../midleware/authmidleware') ;

// router.get('/',(req,res)=>{
//     console.log("the main page ")
// })
router.post('/add',protect,blogControllers.add) ;

router.get('/all',protect, blogControllers.all) ;

router.delete('/delete',protect,blogControllers.delet)

router.get('/author',protect,blogControllers.find_by_author) ;
router.get('/myblogs',protect,blogControllers.myBlogs)

module.exports=router ;

