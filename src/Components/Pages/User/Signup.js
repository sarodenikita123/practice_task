import React from 'react'
import { useForm } from 'react-hook-form';
import  axios  from 'axios';
import {useNavigate} from 'react-router-dom';

function Signup() {
    const {register, handleSubmit} = useForm();

    const navi = useNavigate();

    async function saveData(data){
        const res = await axios.post(" http://127.0.0.1:8000/auth/user/", data);
        console.log( res.data )
        localStorage.setItem( 'access', res.data.access )
        navi('/signin');
    }
  return (
    <>
    <div className='container border border-5 p-5 mt-5 w-50'>
       <center><u><h1>Signup Form:</h1></u></center>
        <form onSubmit={handleSubmit(saveData)}>
            
            <label htmlFor='n'><b>username:</b></label>
            <input type="text" id="n" className='form-control' {...register('username')}/>
            <br/><br/>
            <label htmlFor='c'><b>password:</b></label>
            <input type="text" id="c" className='form-control' {...register('password')}/>
            <br></br>
            <label htmlFor='g'><b>Gender:</b></label>
            <input type="text" id="g" className='form-control' {...register('gender')}/>
            <br></br>
            <label htmlFor='ad'><b>Address:</b></label>
            <input type="text" id="ad" className='form-control' {...register('address')}/>
            <br></br>
            <label htmlFor='p'><b>Pincode:</b></label>
            <input type="number" id="p" className='form-control' {...register('pincode')}/>
            <br></br>
            <label htmlFor='ci'><b>City:</b></label>
            <input type="text" id="ci" className='form-control' {...register('city')}/>
            <br></br>
            <label htmlFor='con'><b>Contact:</b></label>
            <input type="number" id="con" className='form-control' {...register('contact')}/>
            <br></br>
            <label htmlFor='r'><b>Role:</b></label>
            <input type="text" id="r" className='form-control' {...register('role')}/>
            <br></br>
            <label htmlFor='com'><b>Company:</b></label>
            <input type="text" id="com" className='form-control' {...register('company')}/>
            <br></br>
            <input type="submit" value="Login" className='btn btn-outline-success col-4 btn-lg'/>
            <input type="reset" value="reset" className='btn btn-outline-warning col-2 btn-lg float-end'/>
        </form>
    </div>
</>
  )
}

export default Signup