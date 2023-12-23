/* eslint-disable array-callback-return */
import { useContext, useState } from "react"
import loginValidation from './loginValidation'
import { Link, useNavigate } from "react-router-dom"
import './login.css'
import axios from "axios"
import { ILogin } from "../App"


function Login() {
  const [values, setValues] = useState({
    email : '',
    password : ''
})
const [errors, setErrors]=useState({})

const handleInput = (event) =>{
    setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
}
let navigate = useNavigate();

const handleSubmit = (event) =>{
    event.preventDefault();
    setErrors(loginValidation(values));
    axios.get(`http://localhost:9000/users`)
          .then((data) => {
            data.data.map((u)=>{
              if(u.values.email[0]===values.email[0]&&u.values.password[0]===values.password[0]){
                navigate("/admin");
                setIsLogin(true)
              }
            })
          });
}
const setIsLogin=useContext(ILogin)
  return(
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='bg-white p-3 rounded w-75'>
            <h1>Sign in</h1>
            <form action='' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Enter your email here' className='form-control rounded-0' name='email' onChange={handleInput}/>
                    {errors.email && <span className='text-danger'>{errors.email} </span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Enter password here' className='form-control rounded-0' name='password' onChange={handleInput} />
                    {errors.password && <span className='text-danger'>{errors.password} </span>}

                </div>
                <button type='submit' className='btn btn-success w-100' ><strong>Log in</strong></button>
                <p></p>
                <Link to='/signup' className='btn btn-default border w-100'>Create Account</Link>
            </form>
        </div>
    </div>
)
}
export default Login;
