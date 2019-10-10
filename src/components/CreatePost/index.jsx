import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
	paper:{
		marginTop:"3vh",
		width:"75vw",marginLeft:"auto",
		marginRight:"auto",
		padding: theme.spacing(3, 2),
	},
	root:{
		padding:"1px",
		backgroundColor:"#999999",
		
	}
}));

export default function CreatePost() {
	var classes=useStyles();
  return (
	  <div className={classes.root}>
		  <Paper className={classes.paper}>
	  		<h4>Create Post</h4>
			  Author:<br/>
			  Title:<br/>
			  Body:<br/>
		  </Paper>
	  </div>
  );
}
