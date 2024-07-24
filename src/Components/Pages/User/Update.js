import React , {useEffect} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';


function Update() {
    const {register, handleSubmit, setValue} = useForm();
    const {userId} = useParams();
    const navi = useNavigate();



     function fetchData(){
        const token = localStorage.getItem( 'access' )
        const result = axios.get(`http://127.0.0.1:8000/a1/tasks/${userId}/`,
        { headers  : { Authorization : `Bearer ${token}`  }  }   
        ).then((result)=>{
        console.log(result.data)
        setValue('task_name', result.data.task_name)
        setValue('task_descriptions', result.data.task_descriptions)
        setValue('task_satus', result.data.task_satus)
        setValue('task_assigned_date', result.data.task_assigned_date)
        setValue('task_deadline', result.data.task_deadline)
        }).catch(
            (error)=>{
                alert("There is an error")
                navi('/show')
            }
        )
    }

    function saveData(data){
        const token = localStorage.getItem( 'access' )
        axios.patch(`http://127.0.0.1:8000/a1/tasks/${userId}/`, data, 
        { headers  : { Authorization : `Bearer ${token}` } } 
        );
        navi('/show')

    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <>
        <div className='container border border-5 mt-5 p-4 w-50'>
            <center><h1>UPDATE FORM:</h1></center>
            <form onSubmit={handleSubmit(saveData)}>
            <label htmlFor='n'>Task Name:</label>
                <input type='text' id='n' className='form-control'
                {...register('task_name')} readOnly/>
                <br/><br/>
                <label htmlFor='d'>Description:</label>
                <input type='text' id='d' className='form-control'
                {...register('task_descriptions')} readOnly/>
                <br/><br/>
                <label htmlFor='a'>Task Status:</label>
                <input type='text' id='a' className='form-control'
                {...register('task_satus')}/>
                <br/><br/>
                <label htmlFor='ad'>Assigned Date:</label>
                <input type='date' id='ad' className='form-control'
                {...register('task_assigned_date')} readOnly/>
                <br/><br/>
                <label htmlFor='ad'>Deadline:</label>
                <input type='date' id='ad' className='form-control'
                {...register('task_deadline')} readOnly/>
                <br/><br/>
                <input type='submit' value='Update' className='btn btn-outline-success col-3 btn-lg'/>
                <input type='reset' value='Cancel' className='btn btn-outline-warning col-3 btn-lg float-end'/>
            </form>
        </div>
    </>
  )
}
export default Update