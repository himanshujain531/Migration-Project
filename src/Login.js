import React from 'react';
import './Login.css';
//import cross from './images/Group 43.png'
//import facebook from './images/facebook.jpg'
//import google from './images/google.jpg'
//import phone from './images/phone.jpg'

function Login() {
    return (
        <div className='container'>
            <div className='login'>
                <div className='head'>
                    <p className='login_heading'>Log in or sign up</p>
                    <img src='/images/Group 43.png' alt='' className='crossimage' />
                </div>
                <hr className='seprateline' />
                <pre className='Heading'>
                    Kia Ora
                    <br />
                    Welcome to AnyProperty
                </pre>
                <div className='email'>
                    <p className='email_heading'>Email</p>
                    <p className='email_subheading'>Email</p>
                </div>
                <br />
                <div className='continue'>
                    <p className='continuebutton'>Continue</p>
                </div>
                <br />
                <br />
                <hr className='seprateline' />
                <br />
                <br />
                <div className='social'>
                    <p className='social_media'>Continue with Facebook</p>
                    <img src='/images/facebook.jpg' alt='' className='facebook_image' />
                </div>
                <br />
                <div className='social'>
                    <p className='social_media'>Continue with Google</p>
                    <img src='/images/google.jpg' alt='' className='google_image' />
                </div>
                <br />
                <div className='social'>

                    <p className='social_media'>Continue with Phone</p>
                    <img src='/images/phone.jpg' alt='' className='phone_image' />

                </div>
                <br />
                <br />

                <p className='text'>New to AnyProperty?</p>


            </div>


        </div>
    );
}

export default Login;
