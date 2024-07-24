import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
    const {register, handleSubmit} = useForm();
    const navi = useNavigate();

    function saveData(data){
        axios.post('http://127.0.0.1:8000/a1/tasks/', data);
        navi('/show')

    }
  return (
    <>
        <div className='container border border-5 mt-5 p-5 w-50'>
            <center><h1>Task FORM:</h1></center>
            <form onSubmit={handleSubmit(saveData)}>
                <label htmlFor='n'>Task Name:</label>
                <input type='text' id='n' className='form-control'
                {...register('task_name')}/>
                <br/><br/>
                <label htmlFor='d'>Description:</label>
                <input type='text' id='d' className='form-control'
                {...register('task_descriptions')}/>
                <br/><br/>
                <label htmlFor='a'>Assigned TO:</label>
                <input type='number' id='a' className='form-control'
                {...register('task_assigned_to')}/>
                <br/><br/>
                <label htmlFor='ad'>Assigned Date:</label>
                <input type='date' id='ad' className='form-control'
                {...register('task_assigned_date')}/>
                <br/><br/>
                <label htmlFor='ad'>Deadline:</label>
                <input type='date' id='ad' className='form-control'
                {...register('task_deadline')}/>
                <br/><br/>
                <input type='submit' value='Add' className='btn btn-outline-success col-2 btn-lg'/>
                <input type='reset' value='Cancel' className='btn btn-outline-warning col-2 btn-lg float-end'/>
            </form>
        </div>
    </>
  )
}

export default Add