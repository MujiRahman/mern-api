import React from 'react'
import { useHistory } from 'react-router-dom'
import { RegisterBg } from '../../../assests'
import { Button, Gap } from '../../atoms'
import './blogitem.scss'

const BlogItem = () => {
    const history = useHistory()
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="content"/>
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime est culpa beatae quo nemo in sequi totam ullam cupiditate. Enim, in est. Animi incidunt soluta temporibus. Culpa nulla voluptas aut?</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={() => history.push('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem
