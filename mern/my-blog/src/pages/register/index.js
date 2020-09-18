import React from 'react';
import { RegisterBg } from '../../assests';
import { Button, Gap, Input, Link } from '../../components';
import './register.scss'

const Register = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} alt="gambar register" className="bg-image"/>
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full Name" placeholder="Full Name" />
                <Gap height={18}/>
                <Input label="email" placeholder="email" />
                <Gap height={18}/>
                <Input label="password" placeholder="password" />
                <Gap height={50} />
                <Button title="Register"/>
                <Gap height={80}/>
                <Link title="Kembali ke Login"/>
            </div>
        </div>
    )
}

export default Register;
