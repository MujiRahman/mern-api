import React from 'react'
import { LoginBg } from '../../../assests'
import './upload.scss'

const Upload = () => {
    return (
        <div className="upload">
            <img className="preview" src= {LoginBg} alt="dumy preview"/>
            <input type="file"/>
        </div>
    )
}

export default Upload
