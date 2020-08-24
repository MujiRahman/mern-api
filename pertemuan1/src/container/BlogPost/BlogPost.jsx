import React, {Component, Fragment} from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';
import axios from 'axios';
// import { GLobalConsumer } from '../../context/context';
import API from '../../service/service';

class BlogPost extends Component {
    state= {
        post: [],
        fromBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false,
        comments: []
    }

    getPostApi = ()=> {
        API.getNewsBlog() .then(result => {
            this.setState({
                post: result
            })
        })
        API.getComments() .then(result => {
            this.setState({
                comments: result
            })
        })
        
        // axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        // .then((result)=>{
        //     this.setState({
        //         post: result.data
        //     })
        // })
    }

    postDataApi = () =>{
        API.postNewBlog(this.state.fromBlogPost).then((res) => {
            this.getPostApi();
            this.setState({
                fromBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        })
        // axios.post('http://localhost:3004/posts', this.state.fromBlogPost)
        // .then((res) => {console.log(res);
        // this.getPostApi();
        // this.setState({
        //     fromBlogPost: {
        //         id: 1,
        //         title: '',
        //         body: '',
        //         userId: 1
        //     }
        // })
        // }, (err) => {console.log(err);})
    }

    putDataApi = () => {
        API.putNewBlog(this.state.fromBlogPost.id, this.state.fromBlogPost) .then((res) => {
            this.getPostApi();
            this.setState({
                isUpdate: false,
                fromBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        })
        // axios.put(`http://localhost:3004/posts/${this.state.fromBlogPost.id}`, this.state.fromBlogPost) .then((res) => {console.log(res);
        //     this.getPostApi();
        //     this.setState({
        //         isUpdate: false,
        //         fromBlogPost: {
        //             id: 1,
        //             title: '',
        //             body: '',
        //             userId: 1
        //         }
        //     })
        // })
    }

    handlerRemove = (data) =>{
        API.deleteNewBlog(data) .then(res => {
            this.getPostApi();
        })
        // axios.delete(`http://localhost:3004/posts/${data}`)
        // .then((result) =>{this.getPostApi()})
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            fromBlogPost: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => { 
        let formBlogPostNew = {...this.state.fromBlogPost};
        let timeStemp = new Date().getTime();
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timeStemp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            fromBlogPost: formBlogPostNew
        },() => {
            // console.log(this.state.fromBlogPost)
        })

    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataApi();
        }else{
            this.postDataApi();
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }

    componentDidMount() {
        this.getPostApi();
    }

    render(){
        return(
            <Fragment>
                <p>BLog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.fromBlogPost.title} name="title" placeholder="masukan judul" onChange={this.handleFormChange}/>
                    <label htmlFor="body">Body content</label>
                    <textarea name="body" id="body" value={this.state.fromBlogPost.body} placeholder="masukan content"onChange={this.handleFormChange}/>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {/* {
                    this.state.comments.map(comment => {
                    return <p>{comment.name} - {comment.email}</p>
                    }) 
                } */}
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handlerRemove} update={this.handleUpdate} goDetail={this.handleDetail}/>
                    })
                }
                {/* <p>context: {this.props.state.totalOrder}</p> */}
            </Fragment>
        )
    }
}

// export default GLobalConsumer(BlogPost);
export default BlogPost;