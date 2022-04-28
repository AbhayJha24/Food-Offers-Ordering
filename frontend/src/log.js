import React, { useRef } from 'react'
import './log.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import halfBlock from './images/login-half-block.jpg'

function Log() {

    const form = useRef()

    const logIn = async e => {
        e.preventDefault()
        if (form.current) {
        const logincheck = await fetch("/checklogin", {method: "POST", body: new FormData(form.current)})
        if (logincheck["status"] == 200) {
            window.location.replace('/')
            alert("LogIn Successful")
        }
        else if(logincheck["status"] == 401){
            alert("Either Wrong Password or User doesn't exist")
        }
        else{
            alert("Some Error Occured")
        }
        }
    }

  return (
    <>
        <div id="l_pic">

    <img src={halfBlock} alt="" />

    </div>

    <div  id="log">


    <form className="" id="form-block" ref={form} onSubmit={logIn}>

        <h1 target="pad">Lorem Ipsum Dolor Sit Amet</h1>
        <h1 target="pd">Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor.</h1>
        <h1 target="pda">Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem.</h1>

        <input className="inp form-control" type="text" name="email" placeholder="email address" required/><br />
        <input className="inp form-control" type="password" name="password" placeholder="password" required/><br />

        <div className="btn-parent">
            <input id="login-btn" className="btn" type="submit" value="Login" />
            <a id="link-signup" href="/register">Not Registered!</a>
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
    </>
  )
}

export default Log