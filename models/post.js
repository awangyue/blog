var Db = require('./db');

function Post(post) {
    this.author = post.author;
    this.title = post.title;
    this.content = post.content;
    this.postDate = post.postDate;
}

module.exports = Post;

//存储一篇文章
Post.prototype.save = function(callback) {
    var post = {
        author: this.author,
        title: this.title,
        content: this.content,
        postDate: this.postDate
    };
    Db.insert('posts', post, function(err, post) {
        if(err) {
            return callback(err);
        }
        callback(null, post.ops[0]);
    });
};

//获取全部文章
Post.getAll = function(callback) {
    var query = {}
    Db.find('posts', query, function(err, posts) {
        if(err) {
            return callback(err);
        }
        callback(null, posts);
    });
};

//通过id获取一篇文章
Post.getOneById = function(id, callback) {
    Db.findOneById('posts', id, function(err, post) {
        if(err){
            return callback(err);
        }
        callback(null, post);
    });
};