var express = require("express");

var app = express();
app.set('view engine', 'ejs')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var blog_posts = [];
var article = require('./article')
//  var posts=[];//temporary db to store posts

console.log("the server is listening at: http://localhost:2426/article")

app.listen(2426)
// app.use(express.bodyParser());
// app.use(express.logger())

var notImplemented = function (req, res) {
    res.sendStatus(501) //when you want to send just status prefer sendStatus command instead of send
}
//run CRUD operations
app.get('/article',article.index); 
    // res.render('posts', { blog_posts:blog_posts });//read posts


app.get('/article/new',article.new);//reading single post
//  function (req, res) {
//     //res.render concatenated with a template(html file) is a way cleaner approach bt for understanding we followed this untidy approach
//     res.render('form')

app.post('/article', article.create);//create single post
// function (req, res) {
//     blog_posts.push(req.body);
//     res.redirect('/article');
// });


app.put('/article/:articleId', notImplemented);//update single post
app.delete('/article/:articleId', notImplemented);//deleting single post
