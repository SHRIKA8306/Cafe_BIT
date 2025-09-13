import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../api';

export default function Signup() {
    //to store the data
    const[data,setData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:''
    })
    //to store the error
    const[error,setError]=useState('');
    const navigate=useNavigate();
    //to track the changes-handlechange
    const handleChange=(e)=>{
        setData(pre=>({...pre,[e.target.name]:e.target.value}))
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError('')
        try{
            await API.post('/api/users',data)
            navigate('/login')
        }
        catch(err){
               const msg=err?.response?.data||err?.response?.message||'Signup failed';
               setError(typeof msg==='string' ?msg:'signup failed')
        }
    }
  return (
    <div  className='container py-5'>
        <div className='row justify-content-center'>
            <div className='col-12 col-sm-10 col-md-8 col-lg-6'>
                <div className='card shadow-sm'>
                    <div className='card-body p-4'>
                        <h3 className='mb-4 text-center'>Create Account</h3>
                        {error&&<div className='alert alert-danger'>{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-md-6 mb-3'>
                                   <label className='form-label'>First Name</label>
                                   <input type='text' name='firstName' className='form-control' placeholder='Enter your firstname' onChange={handleChange} required/>
                                </div>
                                <div className='col-md-6 mb-3'>
                                   <label className='form-label'>Last Name</label>
                                   <input type='text' name='lastName' className='form-control' placeholder='Enter your lastname' onChange={handleChange} required/>
                                </div>
                            </div>
                            <div className='mb-3'>
                                 <label className='form-label'>Email</label>
                                   <input type='text' name='email' className='form-control' placeholder='Enter your email' onChange={handleChange} required/>
                            </div>
                            <div className='mb-3'>
                                 <label className='form-label'>Password</label>
                                   <input type='password' name='password' className='form-control' placeholder='Password should be min 6 characters' onChange={handleChange} required/>
                            </div>
                            <button type='submit' className='btn btn-primary w-100'>Sign Up</button>
                        </form>
                        <div className='text-center mt-3'>
                            <span>Already have an account?</span>
                            <Link to="/login">Sign in</Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
      
    </div>
  )
}
