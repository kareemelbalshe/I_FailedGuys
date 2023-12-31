import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import signupValidation from './signupValidation'
import axios from 'axios'

function Signup()
{
    const [values, setValues] = useState({
        name : "",
        email : "",
        password : "",
    })
    const [errors, setErrors]=useState({})

    const handleInput = (event) =>{
        setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    }

    const formSubmit = (e) => {
        e.preventDefault();
        setErrors(signupValidation(values));
        setValues();
        axios
          .post("http://localhost:9000/users", {
            values
          })
          .then((data) => {
            navigate("/login");
          });
        // fetch("http://localhost:9000/products", {
        //     method: "POST",
        //     // headers: {
        //     //     `Content-Type`: `application/json`,
        //     // },
        //     body: JSON.stringify({
        //         title,
        //         price
        //     })
        // }).then((res)=>{res.json()}).then((data)=>{console.log(data)})
      };
      let navigate = useNavigate();
    // const handleSubmit = (event) =>{
    //     event.preventDefault();
    //     setErrors(signupValidation(values));
    //     setValues();
    // }


    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-75'>
                <h1>Sign up</h1>
                <form action='' onSubmit={formSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' placeholder='Enter your email here' className='form-control rounded-0' name='email' onChange={handleInput}/>
                        {errors.email && <span className='text-danger'>{errors.email} </span>}
                    </div>
                    <div className='mb-3'>
                        <label>Name</label>
                        <input type='text' placeholder='Enter your name here' className='form-control rounded-0' name='name' onChange={handleInput}/>
                        {errors.name && <span className='text-danger'>{errors.name} </span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' placeholder='Enter password here' className='form-control rounded-0' name='password' onChange={handleInput}/>
                        {errors.password && <span className='text-danger'>{errors.password} </span>}
                    </div>

                    {/* <div className='mb-3'>
                        <label htmlFor='password_confirm'>Password confirmation</label>
                        <input type='password' placeholder=' Enter your password again , please' className='form-control rounded-0' name='password_confirm' onChange={handleInput}/>
                        {errors.password_confirm && <span className='text-danger'>{errors.password_confirm} </span>}
                    </div> */}

                    <button className='btn btn-success w-100' type='submit'><strong>Sign up</strong></button>
                    <p></p>
                    <Link to='/login' className='btn btn-default border w-100'>back to log in</Link>

                </form>
            </div>
        </div>
    )
}


export default Signup