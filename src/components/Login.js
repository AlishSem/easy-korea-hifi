import React from 'react'
import {Link} from 'react-router-dom'

const Login = (props) => {
    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props

    return(
        <div>
        <section className='login'>
            <div className='loginContainer'>
                <label>Email</label>
                <input type='text' autofocus required value={email} onChange={(e) =>setEmail(e.target.value)} />
                <p className='errorMsg'>{emailError}</p>
                <label>Password</label>
                <input type='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className='errorMsg'>{passwordError}</p>
                <div className='btnContainer'>
                    {hasAccount ? (
                        <>
                            <Link to='mypage'><button className='button' onClick={handleLogin}>Log in</button></Link>
                            <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ) : (
                        <>
                            <Link to='mypage'><button className='button' onClick={handleSignup}>Sign up</button></Link>
                            <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Log In</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
        </div>
    )
}

export default Login