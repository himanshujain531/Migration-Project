import React from 'react';
import './Sell.css';

//import Profileimage from './images/profileimage.png'
const Sell = () => {
    return (
        <div className='container'>
            <div className='navbar'>
                <img src='/images/AP_Logo.png' alt="Logo" className='logo' />
                <div className='search' >
                    <img src='/images/Group 25.svg' alt="search" className='searchicon' />
                </div>
                <p className='text'>AnyProperty It</p>
                <p className='text'>Browse Property</p>

                <div className='profile'>
                    <div className='profilebox'>
                        <img src='/images/Line 1.svg' alt='' className='profile-line' />
                        <img src='/images/profileimages.png' alt='' className='profileimage' />

                    </div>
                </div>

            </div>
            <p className='header'>How it works</p>
            <div className='images'>
                <img src='/images/Ellipse 25.png' alt='ellipse' className='img1' />
                <img src='./images/Ellipse 26.png' alt='ellipse' className='img2' />
                <img src='/images/Ellipse 27.png' alt='ellipse' className='img3' />
            </div>
            <div>
                <pre className='sub-header'>AnyProperty simply connects people looking
                    <br />
                    to buy a home, with people wanting to sell one. </pre>
            </div>
            <div className='Homeimage'>
                <img className='slideimage' src='https://s3-alpha-sig.figma.com/img/e60a/e1b6/d5eff0f327ec60c19cdcbd116214e64a?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UWCD2MgC3NtRGxvNGgxoenl8Ga3f3Teo~O5ymHJ8BaaRKAlTBJCAreUJHd5FDAHClkGoToL4iFDZ8Rsv-ejAhIVaSHkQDNyKXFIcj5pCV3v7iwildyYR09naz6gqQ1VJoPfiFF7ND1srAS64BDe1JfHgbRufLhJV69e~bKZomweaHKxXF-dR1x3rm5nyaRItj4GeX2lXjfB5kJAwAjuHWifoJDIDD3CXX62XptM4QMjnXjNMxHzYvBNjU1HbarRSY0oRMaaE7K7AawNIqNcSIpNZxlCSs5MfyqRQeHEzPQt6dmb6rfohsevl2sT7RirSf59zbfAz4nOVHNpfUSG5rw__' />
            </div>
            <div>
                <pre className='sub-header1'>
                    We aim to change the way properties are brought and sold throughout the
                    <br />
                    country, and are focused on doing everything possible to make the
                    <br />
                    process as cheap & straight forward as possible for everyone.
                </pre>
            </div>
            <p className='text-heading'>AnyProperty it.</p>

            <p className='text-heading1'>The new way of buy & sell</p>

            <div className='center'>
                <div className='buysell' >
                    <div className='buy'>Buy</div>
                    <div className='selldiv'>
                        <div className='sell'>Sell</div>
                    </div>
                </div>
            </div>
            <div className='space'>
            </div>

            <div className='head'>
                <div className='AnyProperty' >AnyProperty</div>
                <div className='AnyProperty competitors' >Competitors</div>
            </div>
            <hr className='line' />
            <div className='tbody'>
                <div className='fees'>Fess</div>
                <div className='fees1'>$14/month</div>
                <div className='fees2'>$29,457</div>
            </div>
            <br />
            <hr className='line' />
            <div className='tbody'>
                <div className='fees'>Exposure</div>
                <div className='example'>Example</div>
                <div className='example'>Example</div>
            </div>
            <br />
            <hr className='line' />

            <div className='tbody'>
                <div className='fees'>Selling time</div>
                <div className='days'>30 days</div>
                <div className='days1'>$29,457</div>
            </div>
            <br />
            <hr className='line' />

            <div className='space1'>
            </div>
            <hr className='space_line' />

            <div className='work_button'>
                <div className='button'><p className='works'>How It Works </p></div>
                <div className='button'><p className='works'>How It Works </p></div>
            </div>
            <hr className='button-line' />
            <br />

            <footer>


                <div >
                    <ul>
                        <p className='footer_heading'>Support</p>
                        <p className='footer_content'>Help Center</p>
                        <p className='footer_content'>Assurance</p>
                        <p className='footer_content'>Offer Resources</p>
                        <p className='footer_content'>Customer Service</p>
                        <p className='footer_content'>Cancellation</p>
                        <p className='footer_content'>FAQs</p>
                    </ul>
                </div>

                <div>
                    <ul>
                        <p className='footer_heading'>Company</p>
                        <p className='footer_content'>News</p>
                        <p className='footer_content'>Career</p>
                        <p className='footer_content'>Legal</p>
                    </ul>
                </div>


                <div >
                    <ul>
                        <p className='footer_heading'>Contact</p>
                        <p className='footer_content'>Partnership</p>
                        <p className='footer_content'>Affiliate</p>
                        <p className='footer_content'>Advertising</p>
                    </ul>
                </div>


                <div>
                    <ul>
                        <p className='footer_heading'>Contact</p>
                        <p className='footer_content'>Linked In</p>
                        <p className='footer_content'>Facebook</p>
                        <p className='footer_content'>Instagram</p>
                    </ul>
                </div>
            </footer>

            <p className='email'>support@anyproperty.co.nz</p>
            <br />

            <hr className='footer_line' />

            <div className='footer_space'>

            </div>
        </div>

    );
}

export default Sell;
