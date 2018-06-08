var blog_posts=[];//deals with all gthe blog posts
// var hello ='hello';
module.exports.create=function(req,res){
// console.log(req.body);
// res.json(req.body);
blog_posts.push(req.body);
res.redirect('/article');
}
module.exports.index=function(req,res){
    res.render('posts', { blog_posts:blog_posts });//read posts
}
    // res.json(blog_posts);

module.exports.new=function(req,res){
   
    res.render('form')   
}