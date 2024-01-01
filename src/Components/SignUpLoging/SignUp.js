
import React, { useState, } from 'react'
import "./SignUp.css"
import userIcon from '../Assits/user3.png'
import emailIcon from '../Assits/email.png'
import passwordIcon from '../Assits/password1.png'




const SignUp = () => {

  const [action, setAction] = useState('Sign Up');

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { name: name, email: email, password: password };
    setAllEntry([...allEntry, newEntry]);

  }


  return (
    <>

      <form onSubmit={submitForm} className="Container">
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          {action === "Login" ? <div></div> : <div className='input'>
            <img src={userIcon} className='icon' alt=''></img>
            <input type="text" name="name" placeholder='Name' value={name}
              onChange={(e) => setName(e.target.value)}></input>
          </div>}

          <div className='input'>
            <img src={emailIcon} className='icon' alt=''></img>
            <input type="email" placeholder='Email ID' value={email}
              onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className='input'>
            <img src={passwordIcon} className='icon' alt=''></img>
            <input type="password" placeholder='Password' value={password}
              onChange={(e) => setPassword(e.target.value)}></input>
          </div>
        </div>
        {action === "Sign Up" ? <div></div> :
          <div className='forgget-password'>Forget Password <span>Click here</span></div>}

        <div className='submit_container'>
          <button className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Sign Up</button>
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Login</div>
        </div>
      </form>

      <div className='data'>
        {

          <ul>
            {allEntry.map((item) => (
              <li>{item.key}{item.name}, {item.email},  {item.password}</li>

            ))}
          </ul>
        }
      </div>
    </>
  )
}

export default SignUp