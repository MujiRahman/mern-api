import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Gap, Input, Link, TextArea, Upload } from '../../components'
import './createblog.scss'

const CreateBlog = () => {
    const history = useHistory()
    return (
        <div className="blog-post">
            <Link title="Kembali" onClick={() => history.push('/')} />
            <p className="title">Create New Blog Post</p>
            <Input label="Post Title"/>
            <Upload />
            <TextArea />
            <Gap height={20} />
            <div className="button-action">
                <Button title="Save"/>
            </div>
        </div>
    )
}

export default CreateBlog
