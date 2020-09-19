import React from 'react'
import { RegisterBg } from '../../../assests'
import './blogitem.scss'

const BlogItem = () => {
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="content"/>
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est culpa beatae quo nemo in sequi totam ullam cupiditate. Enim, in est. Animi incidunt soluta temporibus. Culpa nulla voluptas aut?</p>
            </div>
        </div>
    )
}

export default BlogItem
