import React from 'react'
import './detailblog.scss'
import {RegisterBg} from '../../assests'
import { Link } from '../../components'
import { useHistory } from 'react-router-dom'

const DetailBlog = () => {
    const history = useHistory()
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={RegisterBg} alt="dumy"/>
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam, atque eos ab, distinctio laboriosam itaque quas alias commodi doloribus, debitis a? Inventore quos omnis nemo deleniti cum! Nisi, perspiciatis?</p>
            <Link title="Kembali ke home" onClick={() => history.push('/')} />
        </div>
    )
}

export default DetailBlog
