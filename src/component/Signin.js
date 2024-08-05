import React, { useState } from 'react';
import "./SigninStyles.css"

const Signin =()=>{
    const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

    return(
        <div className="signin-container">
        <div className="container" id="container">
            <div className="form-container sign-up">
                <form >
                    <h1>Create Account</h1>
                    <div className="social-icons">
                        <a href="/" className="icons"><i class="fa-brands fa-google"></i></a>
                        <a href="/" className="icons"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="/" className="icons"><i class="fa-brands fa-x-twitter"></i></a>
                        
                    </div>
                    <span>or use email for registration </span>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button>Sign up</button>
                </form>

            </div>
            <div className="form-container sign-in">
                <form >
                    <h1>Sign In</h1>
                    <div className="social-icons">
                        <a href="/" className="icons"><i class="fa-brands fa-google"></i></a>
                        <a href="/" className="icons"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="/" className="icons"><i class="fa-brands fa-x-twitter"></i></a>
                        
                    </div>
                    <a href="/">or use Email Password </a>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <a href="/" > Forget Your Password?</a>
                    <button>Sign In</button>
                </form>

            </div>
            <div className={`container ${isActive ? 'active' : ''}`}>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!!</h1>
                        <p>Enter Your Personal Information</p>
                        <button className="hidden" id="login "  onClick={handleLoginClick} >Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello Champ!</h1>
                        <p>Register with Your Personal Information</p>
                        <button className="hidden" id="register" onClick={handleRegisterClick}>Sign up</button>
                    </div>
                </div>

            </div>
            </div>

        </div>
        </div>
        
    );
}


export default Signin