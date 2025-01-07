const router = require('express').Router();
const Post = require('../Models/Post');
const User = require('../Models/User');


//create a post
router.post('/' , async(req,res) => {
  const newPost = new Post(req.body);

  try{
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  }catch(err){
    res.status(500).json(err);  
  }
})

// update a post
router.put('/:id' , async(req , res) => {
  try{
    const post = await Post.findById(req.params.id);
    if(post.userId === req.body.userId){
      await post.updateOne({$set:req.body});
      res.status(200).json("the post has been updated");
    }
    else{
      res.status(403).json("you can update only your post")
    }

  }
  catch(err){
    res.status(500).json(err);
  }
})

// delete a post 
router.delete('/:id' , async(req , res) => {
  try{
    const post = await Post.findById(req.params.id);
    if(post.userId === req.body.userId){
      await post.deleteOne();
      res.status(200).json("the post has been deleted");
    }
    else{
      res.status(403).json("you can delete only your post")
    }

  }
  catch(err){
    res.status(500).json(err);
  }
})

// like ad dislike a post 
router.post('/:id/like' , async(req , res) => {
  try{
    const post = await Post.findById(req.params.id);
    if(!post.likes.includes(req.body.userId)){
      await post.updateOne({$push : {likes:req.body.userId}});
      res.status(200).json("the post has been liked")
    }
    else{
      await post.updateOne({$pull : {likes:req.body.userId}});
      res.status(200).json("the post has been disliked")
    }
  }
  catch(err){
    res.status(500).json(err);
  }
})


// get a post 
router.get('/:id' , async(req , res) =>{
  try{
    const post =await Post.findById(req.params.id);
    res.status(200).json(post)
  }
  catch(err){
    res.status(500).json(err);
  }
})

// get timeline post 
router.get('/timeline/:userId' , async (req , res) => {
  try{
    const currUser = await User.findById(req.params.userId);
    const userPost = await Post.find({userId : currUser._id});
    const friendPost = await Promise.all(
      currUser.following.map((freindId) => {
        return Post.find({userId: freindId})
      })
    )
    res.json(userPost.concat(...friendPost))
  }catch(err){
    res.status(500).json(err);
  }
})



module.exports = router;