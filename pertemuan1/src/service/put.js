import axios from 'axios';
import {OnlineRoot, RootPath} from './config'

const Put = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${root ? OnlineRoot : RootPath}/${path}`, data)
        .then((result)=> {
            resolve(result);
        }, (err)=> {
            reject(err);
        })
    })
    return promise;
}

export default Put;


// axios.put(`http://localhost:3004/posts/${this.state.fromBlogPost.id}`, this.state.fromBlogPost) .then((res) => {console.log(res);
//             this.getPostApi();
//             this.setState({
//                 isUpdate: false,
//                 fromBlogPost: {
//                     id: 1,
//                     title: '',
//                     body: '',
//                     userId: 1
//                 }
//             })
//         })