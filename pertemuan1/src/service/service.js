import Get from './get'
import Post from './post'
import Put from './put';
import Delete from './delete';


const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true);
const postNewBlog = (data) => Post('posts', false, data);
const putNewBlog = (id, data) => Put(`posts/${id}`, false, data);
const deleteNewBlog = (id) => Delete(`posts/${id}`, false);


const API = {
    getNewsBlog,
    getComments,
    postNewBlog,
    putNewBlog,
    deleteNewBlog
}

export default API;