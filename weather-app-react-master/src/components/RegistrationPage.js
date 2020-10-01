import React, { useState } from 'react';

const myStyle ={
  marginBottom: '15px'
}

function Register(props) {
  
const [show, setShow] = useState(false);

function showSignUp(e){
  setShow(true);
}

return (      
  <div>
    <h2>Registration Form</h2>

    <button onClick={showSignUp} style={{width:"auto"}} className="btn btn-success">Sign Up</button>
          
      { show ? (
              <div id="id01" className="modal" style={{display:'block' }}>
              <span className="close" title="Close Modal">&times;</span>
              <form className="modal-content" >
                <div className="container">
                  <h1>Sign Up</h1>
                  <p>Please fill in this form to create an account.</p>
                  <hr/>
                  <label htmlFor="email"><b>Email</b></label>
                  <input type="text" placeholder="Enter Email" name="email" required />

                  <label htmlFor="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" required />

                  <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                  <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                  
                  <label>
                    <input type="checkbox" checked="checked" name="remember" style={myStyle} readOnly={true} /> Remember me
                  </label>

                  <p>By creating an account you agree to our <a href="/" style={{color:"dodgerblue"}}>Terms &amp; Privacy</a>.</p>

                  <div className="clearfix">
                    <button type="submit" className="btn btn-success mr-3" >Sign Up</button>
                    <button type="button" className="btn btn-danger ">Cancel</button>
                  </div>
                </div>
              </form>
            </div>) : null
          }
            
        </div>
  )
}
export default Register;