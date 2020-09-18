import React from 'react';
import { LoginBg } from '../../assests';
import { Button, Gap, Input, Link } from '../../components';

const Login = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} alt="gambar Login" className="bg-image"/>
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="email" placeholder="email" />
                <Gap height={18}/>
                <Input label="password" placeholder="password" />
                <Gap height={50} />
                <Button title="Login"/>
                <Gap height={80}/>
                <Link title="Belum Punya Akun? silahkan daftar dulu"/>
            </div>
        </div>
    )
}

export default Login;
