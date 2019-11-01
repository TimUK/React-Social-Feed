import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
	paper: {
		marginTop:"3vh",
	  padding: "5px",
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
  });

class Home extends Component {
	constructor(props){
		super(props);
		this.posts = [];
		this.getPosts();
	}
	state={
		posts:[]
	}

	getPosts = async ()=>{
		var newposts = await fetch("/api/GetPosts");
		var newpostsjson = await(newposts.json());
		console.log(newpostsjson);
		this.setState({posts:newpostsjson});
	}

	componentDidMount(){
		console.log(this.state.post);
	}

	render = ()=>{
		const { classes } = this.props;
		
		return (
			<div id="mainContent" className={classes.root}>
				{this.state.posts.map((post,index)=>
					<Paper key={index} className={classes.paper}>
						<h1>{post.title}</h1>
						{post.body}<br/>
						<sub>- {post.author}</sub>
					</Paper>
				)}  
				
			</div>
		);
	}
}
export default withStyles(styles)(Home);