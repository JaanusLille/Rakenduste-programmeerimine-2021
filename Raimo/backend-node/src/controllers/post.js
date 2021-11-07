const Post = require('../models/Post')

exports.getPosts = async (req, res) => {
  const posts = await Post.find({})
  res.status(200).send(posts)
  // SIIN ASUB GET ENDPOINT !!!
}

exports.createPost = async (req, res) => {
  const {title, desc, user} = req.body;

  const newPost = {
    title,
    desc,
    user
  }

  const createdPost = new Post(newPost)
  const savedPost = await createdPost.save()
  res.status(200).send(`yay ${savedPost._id}`)
  // SIIN ASUB POST ENDPOINT !!!
}

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  var flag = 1;
  const post = await Post.findOneAndUpdate({ _id: id },{$inc: {quality: flag}}, req.body);
  if (!post) res.status(404).send("No post with that id found");
  const post2 = await Post.find({ _id: id })
  res.status(200).send(`Successfully updated the following post: \n ${post2}`)
  // SIIN ASUB UPDATE ENDPOINT !!!
}

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findOneAndDelete({ _id: id })
  if (!post) res.status(404).send("No post with id found")
  res.status(200).send(`Successfully deleted the following post: \n ${post}`)
  // SIIN ASUB DELETE ENDPOINT !!!
}