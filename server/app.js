const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();
var posts = [
	{title:"hello",author:"Tim",body:"this is my first post"},
	{title:"Disney Frozen",author:"Anna",body:"Do you wanna build a snowman?"},
	{title:"More post?",author:"Postman Pat",body:"I can't deliver all these posts!"},
	{title:"Are you one of the Winkelvoss twins??",author:"Mark Zuckerberg",body:"You have stolen Facebook! You didn't create Facebook!"}
];
app.set('posts',posts);
const indexRouter = require("./routes/index");


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "build")));

app.use("/api", indexRouter);

app.get("*", (req, res) => {
	console.log("visit");
  res.sendFile("build/index.html", { root: __dirname });
});


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// TODO Web Template Studio: Add your own error handler here.
if (process.env.NODE_ENV === "production") {
  // Do not send stack trace of error message when in production
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send("Error occurred while handling the request.");
  });
} else {
  // Log stack trace of error message while in development
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.log(err);
    res.send(err.message);
  });
}

module.exports = app;
