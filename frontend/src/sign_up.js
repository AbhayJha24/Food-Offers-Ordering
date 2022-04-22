import React from 'react'
import './sign_up.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import halfBlock from './images/reg-half-block.jpg'

function SignUp() {
  return (
    <>
    <div>
        <div id="sign-up">

            <form id="form-block">

                <h1 target="pad">Lorem Ipsum Dolor Sit Amet</h1>
                <h1 target="pd">Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor.</h1>
                <h1 target="pda">Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem.</h1>

                <div className="row">
                    <div className="col">
                        <input className="form-control inp" type="text" name="" id="" placeholder="Name" />

                    </div>
                    <div className="col">
                        <input className="form-control inp" type="text" name="" id="" placeholder="Phone No" />

                    </div>
                </div>
                <br />

                <input className="form-control inp" type="text" name="" id="" placeholder="Email address" />
                <br />
                <input className="form-control inp" type="text" name="" id="" placeholder="Password" />
                <br />

                <div className="btn-parent">
                    <input id="login-btn" className="btn" type="submit" value="Login" />
                    <a id="link-signup" href="/login">Already Registered.</a>
                </div>

            </form>
            
            <div id="footer">

                <div className="content" >
                    <a className="foot-link" id="home" href="/">Home</a>
                    <a className="foot-link" id="browse" href="/browse">Browse Food</a>
                    <a className="foot-link" id="about" href="/#about">About Us</a>
                </div>

            </div>

        </div>
        <div >

            <img id="r_pic" src={halfBlock} alt="" />

        </div>
    </div>
    </>
  )
}

export default SignUp