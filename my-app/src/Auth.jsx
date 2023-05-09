import React, { useRef,useState } from 'react';

function Auth() {
    const[visible,setVisible] = useState(false)
    const[form,setForm] = useState(false)
    const[button,setButton] = useState(true)

  const inputRef = useRef(null);

  const handleSignup = () => {
    setForm(true)
    setVisible(false)
    setButton(false)
    
   
  };
  const handleLogin = () => {
    setVisible(true)
setForm(false)
setButton(false)
   
  };

  return (
    <div>
        
    
        
    { button? <div>
      <h3>Welcome to PopX</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button style={{background:'blue',color:'white',width:'190px',border:'none',height:'40px',borderRadius:'4px',cursor:'pointer'}} onClick={handleSignup} >Create Account</button>
      <br />
      <button style={{background:'blue',color:'white',width:'190px',border:'none',height:'40px',margin:'10px',borderRadius:'4px',cursor:'pointer'}} onClick={handleLogin}>Already Registered? Login</button>
      </div>: null}

     {  visible?  <div>
        <h1>Login</h1>
        <form action="">
            <span>Email Address</span>
            <input type="text" placeholder='email address' />
            <br />
            <span>Password</span>
            <input type="password" placeholder='password' />
            <br />
            <input type="submit" />
        </form>
      </div>
    : null}
    { form? 
      <div>
        <h1>Sign Up</h1>
        <form action="">
        <span>Full Name</span>
            <input type="text" placeholder='email address' />
            <br />
            <span>Phone Number</span>
            <input type="number" placeholder='password' />
            <br />
            <span>Email Address</span>
            <input type="email" placeholder='password' />
            <br />
            <span>Password</span>
            <input type="password" placeholder='password' />
            <br />
            <span>Company Name</span>
            <input type="text" placeholder='password' />
            <br />

            <input type="submit" /> 
        </form>
      </div> : null}
 
      

    </div>
  );
}
export default Auth