import React, {useRef} from 'react'
import './sign_up.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import halfBlock from './images/reg-half-block.jpg'

function SignUp() {

    const registerForm = useRef()

    const signUp = async e => {
        e.preventDefault()
        if (registerForm.current) {
        let formData = new FormData(registerForm.current)
        const regcheck = await fetch("/registerUser", {method: "POST", credentials: "include", body: formData})
        console.log(regcheck);
        if (regcheck["status"] == 200) {
            alert("Registered Successfully")
        }
        else{
            alert("Some Error Occured")
        }
        }
    }

  return (
    <>
    <div>
        <div id="sign-up">

        <form id="form-block" ref={registerForm} onSubmit={signUp}>

                <h1 target="pad">Lorem Ipsum Dolor Sit Amet</h1>
                <h1 target="pd">Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor.</h1>
                <h1 target="pda">Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem.</h1>

                <div className="row">
                    <div className="col">
                        <input className="form-control inp" type="text" name="name" placeholder="Name" required/>

                    </div>
                    <div className="col">
                        <input className="form-control inp" type="text" name="phone" placeholder="Phone No" required/>

                    </div>
                </div>
                <br />

                <input className="form-control inp" type="text" name="email" placeholder="Email address" required/>
                <br />
                <input className="form-control inp" type="password" name="password" placeholder="Password" required/>
                <br />

                <div className="btn-parent">
                    <input id="login-btn" className="btn" type="submit" value="Sign Up" />
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