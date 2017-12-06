module.exports = {
    session: {
        secret: 'blog',
        name: 'blog',
        maxAge: 30 * 24 * 60 * 60 * 1000
    },
    mongodb: 'mongodb://localhost:27017/blog'
};