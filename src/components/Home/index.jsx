import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop:"3vh",
	  padding: theme.spacing(3, 2),
	  width:"50vw",
	  borderColor:"#212529",
	  //color:"#fff",
	  marginLeft:"auto",
	  marginRight:"auto"
	},
	root:{
		backgroundColor:"#999999",
		padding:"1px",
		maxHeight:"71vh",
		overflowY:"scroll"
	}
  }));

export default function Blank() {
	var posts = [
		{title:"hello",author:"Tim",body:"this is my first post"},
		{title:"Disney Frozen",author:"Anna",body:"Do you wanna build a snowman?"},
		{title:"More post?",author:"Postman Pat",body:"I can't deliver all these posts!"},
		{title:"Are you one of the Winkelvoss twins??",author:"Mark Zuckerberg",body:"You have stolen Facebook! You didn't create Facebook!"}
	];
	const classes = useStyles();
  return (
  	<div id="mainContent" className={classes.root}>
		{posts.map(post=>
			<Paper className={classes.paper}>
				<h1>{post.title}</h1>
				{post.body}<br/>
				<sub>- {post.author}</sub>
			</Paper>
		)}  
		  
	</div>
  );
}
