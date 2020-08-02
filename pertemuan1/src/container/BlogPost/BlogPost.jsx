import React, {Component, Fragment} from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    state= {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }

    getPostApi = ()=>{
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((result)=>{
            this.setState({
                post: result.data
            })
        })
    }

    putDataApi = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost) .then((res) => {console.log(res);
            this.getPostApi();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        })
    }

    postDataApi = () =>{
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
        .then((res) => {console.log(res);
        this.getPostApi();
        this.setState({
            formBlogPost: {
                id: 1,
                title: '',
                body: '',
                userId: 1
            }
        })
        }, (err) => {console.log(err);})
    }

    handlerRemove = (data) =>{
        axios.delete(`http://localhost:3004/posts/${data}`)
        .then((result) =>{this.getPostApi()})
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => { 
        let formBlogPostNew = {...this.state.formBlogPost};
        let timeStemp = new Date().getTime();
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timeStemp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        },() => {
            // console.log(this.state.formBlogPost)
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
                    <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="masukan judul" onChange={this.handleFormChange}/>
                    <label htmlFor="body">Body content</label>
                    <textarea name="body" id="body" value={this.state.formBlogPost.body} placeholder="masukan content"onChange={this.handleFormChange}/>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handlerRemove} update={this.handleUpdate} goDetail={this.handleDetail}/>
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;