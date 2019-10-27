const express = require("express");

const router = express.Router();

router.get("/GetPosts",(req,res)=>{
	res.send(res.app.get('posts'));
});

router.post("/CreatePost",(req,res)=>{
	var newpost = req.body[0];
	res.app.get('posts').push(newpost);
	res.send(res.app.get('posts'));
});

module.exports = router;
