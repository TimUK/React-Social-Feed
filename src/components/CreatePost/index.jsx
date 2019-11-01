import React, { Component } from "react";
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
	paper:{
		marginTop:"3vh",
		width:"75vw",marginLeft:"auto",
		marginRight:"auto",
		padding: "5px",
	},
	root:{
		padding:"1px",
		backgroundColor:"#999999",
		
	},
	postButton:{
		marginTop:"1vh"
	}
});

 class CreatePost extends Component {
	 constructor(props){
		super(props);
	 }

	 state={
		 title:"",
		 author:"",
		 body:"",
	 }

	 createPostClick=()=>{
		 console.log(this.state.body);
		 var post = [{'title':this.state.title,'author':this.state.author,'body':this.state.body}];
		 console.log({stringified:JSON.stringify(post)});
		 fetch("/api/CreatePost",{
			method:"post",
			body:JSON.stringify(post),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		 });
		 window.location="/";
	 }

	 onTextChange= e=>{
		this.setState({[e.currentTarget.id]:e.currentTarget.value});
	 }
	 render(){
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<h4>Create Post</h4>
					Author:<br/>
					<input type="text" id="author" onChange={this.onTextChange} value={this.state.author}/><br/>
					Title:<br/>
					<input type="text" id="title" onChange={this.onTextChange} value={this.state.title}/><br/>
					Body:<br/>
					<input type="text" id="body" onChange={this.onTextChange} value={this.state.body}/><br/>
					<button onClick={this.createPostClick} className={classes.postButton}>Post</button>
				</Paper>
			</div>
		);
	 }
}
export default withStyles(styles)(CreatePost)