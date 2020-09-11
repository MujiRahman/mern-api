import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { actionUserName } from '../../../config/redux/action';
import Button from '../../../components/atom/button';
import { loginUserAPI } from '../../../config/redux/action';

class Login extends Component {
    state = {
        email: '',
        password: '',
        
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLoginSubmit = async() => {
        const {email, password} = this.state;
        const {history} = this.props;
        const res = await this.props.loginAPI({email, password}).catch(err => err);
        if(res){
            console.log('isi login success =', res);
            localStorage.setItem('userData', JSON.stringify(res))
            this.setState({
                email: '',
                password: ''
            })
            history.push('/')
        } else {
            console.log('login filed')
        }
        
    }
    render() {
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Login Page</p>
                    <input className="input" id="email" type="text" placeholder="email" onChange={this.handleChangeText} value={this.state.email} />
                    <input className="input" id="password" type="password" placeholder="password" onChange={this.handleChangeText} value={this.state.password} />
                    <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading} />
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const loginDispatch = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, loginDispatch)(Login);