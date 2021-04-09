import React from 'react'
import './App.css';
const Login=(props)=> {
    const{email,setEmail,pass,setPass,handleLogin,handleSignup,hasaccount,setHasAccount,emailerror,passerror}=props;
    return (
        <>
        <section className="login">
        <div className="loginContainer">
        <label className="label">User Name</label>
        <input className="input" type="email" autoFocus required value={email} onChange={e => setEmail(e.target.value)}></input>
        <p className="errorMsg">{emailerror}</p>
        <label className="label">Password</label>
        <input className="input" type="password" autoFocus required value={pass} onChange={e => setPass(e.target.value)}></input>
        <p className="errorMsg p">{passerror}</p>
        <div className="btnContainer">
            {hasaccount ? (
                <>
                <button className="button1" onClick={handleLogin}>Sign in </button>
                <p className="p" >don't have account ? <span className="span" onClick={()=> setHasAccount(!hasaccount)}>Sign up</span></p>
                </>
            ):(
                <>
                <button className="button1" onClick={handleSignup}>Sign up</button>
                <p className="p">have an account ? <span className="span" onClick={()=> setHasAccount(!hasaccount)}>Sign IN</span></p>
                </>
            )}
        </div></div></section>
        </>
    )
}

export default Login
