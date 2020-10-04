const {validationResult} = require('express-validator');
const BlogPost = require('../models/blog');


exports.createBlogPost = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const err = new Error('input value yang anda masukan salah');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    if(!req.file) {
        const err = new Error('image yang anda masukan tidak sesuai dengan katagori yang kita butuhkan');
        err.errorStatus = 422;
        throw err;
    }

    const title = req.body.title;
    const image = req.file.path;
    const body = req.body.body;


    const Posting = new BlogPost({
        title: title,
        body: body,
        image: image,
        author: {uid: 1, name: 'Muji Rahman' }
    })

    Posting.save()
    .then(result => {
        res.status(201).json({
            message: 'Create Blog Post Success',
            data: result
        });
    })
    .catch(err => {
        console.log('isi err', err)
    });

}

exports.getAllBlogPost = (req, res, next) => {
    BlogPost.find()
    .then(result => {
        res.status(200).json({
            message: 'data blog post telah berhasil dipanggil',
            data: result
        })
    })
    .catch(err => {
        next(err)
    })
}