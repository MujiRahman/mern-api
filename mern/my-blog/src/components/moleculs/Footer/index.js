import React from 'react'
import './footer.scss'
import { IcDiscord, IcFacebook, IcGithub, IcInstagram, IcTelegram, IcTwitter, LogoKabayan } from '../../../assests'

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon"/>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={LogoKabayan} alt="logo"/>
                </div>
                <div className="social-wrapper">
                    <Icon img={IcFacebook} />
                    <Icon img={IcTwitter} />
                    <Icon img={IcInstagram} />
                    <Icon img={IcTelegram} />
                    <Icon img={IcDiscord} />
                    <Icon img={IcGithub} />
                </div>
            </div>
            <div className="copyright">
                <p>copyright</p>
            </div>
        </div>
    )
}

export default Footer
