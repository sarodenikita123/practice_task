import { useForm } from 'react-hook-form';
import  axios  from 'axios';
import {useNavigate} from 'react-router-dom';


function Signin() {
    const {register, handleSubmit} = useForm();

    const navi = useNavigate();

    async function saveData(data){
        const res = await axios.post(" http://127.0.0.1:8000/access/", data);
        console.log( res.data )
        localStorage.setItem( 'access', res.data.access )
        navi('/show');
    }
  return (
    <>
        <div className='container border border-5 p-5 mt-5 w-50'>
           <center><u><h1>Signin Form:</h1></u></center>
            <form onSubmit={handleSubmit(saveData)}>
                
                <label htmlFor='n'><b>username:</b></label>
                <input type="text" id="n" className='form-control' {...register('username')}/>
                <br/><br/>
                <label htmlFor='c'><b>password:</b></label>
                <input type="text" id="c" className='form-control' {...register('password')}/>
                
                <br></br>
                <input type="submit" value="Login" className='btn btn-outline-success col-4 btn-lg'/>
                <input type="reset" value="reset" className='btn btn-outline-warning col-2 btn-lg float-end'/>
            </form>
        </div>
    </>
  )
}

export default Signin