import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";

export default function Login() {
    const[data,setData]=useState({
        email:'',
        password:''
    })
    const[error,setError]=useState('');
    const navigate=useNavigate();
    const handleChange=(e)=>{
        setData(pre=>({...pre,[e.target.name]:e.target.value}))
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError('')
        try{
            const{data:res}= await API.post('/api/auth',data)
            localStorage.setItem('token',res.token);
            navigate('/')
        }
        catch(err){
               const msg=err?.response?.data||err?.response?.message||'Login failed';
               setError(typeof msg==='string' ?msg:'Login failed')
        }
    }
  return (
    <div  className='container py-5'>
        <div className='row justify-content-center'>
            <div className='col-12 col-sm-10 col-md-8 col-lg-6'>
                <div className='card shadow-sm'>
                    <div className='card-body p-4'>
                        <h3 className='mb-4 text-center'>Login to your Account</h3>
                        {error&&<div className='alert alert-danger'>{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                 <label className='form-label'>Email</label>
                                   <input type='text' name='email' className='form-control' placeholder='Enter your email'onChange={handleChange} required/>
                            </div>
                            <div className='mb-3'>
                                 <label className='form-label'>Password</label>
                                   <input type='password' name='password' className='form-control' placeholder='Password should be min 6 characters'onChange={handleChange} required/>
                            </div>
                            <button type='submit' className='btn btn-success w-100'>Sign In</button>
                        </form>
                        <div className='text-center mt-3'>
                            <span>If not registered?</span>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
      
    </div>
  )
}