import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginBg } from '../../assests';
import { Button, Gap, Input, Link } from '../../components';

const Login = () => {
    const history = useHistory()
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
                <Button title="Login" onClick={() => history.push('/')}/>
                <Gap height={80}/>
                <Link title="Belum Punya Akun? silahkan daftar dulu" onClick={() => history.push('/register')}/>
            </div>
        </div>
    )
}

export default Login;
