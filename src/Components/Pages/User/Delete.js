import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

function Delete() {
    const {userId} = useParams();

    const [user, setUser] = useState({});

    const navi = useNavigate();

    async function fetchData(){
        const token = localStorage.getItem( 'access' )
        const result = await axios.get(`http://127.0.0.1:8000/a1/tasks/${userId}/`,
        { headers  : { Authorization : `Bearer ${token}` } } 
        );
        setUser(result.data);
    }

    function deleteUser(){
        const token = localStorage.getItem( 'access' )
        axios.delete(`http://127.0.0.1:8000/a1/tasks/${userId}/`,
        { headers  : { Authorization : `Bearer ${token}`} } 
        )
        navi('/show');
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <>
    <center><u><h1>Delete form:</h1></u>
    <div className='container mt-5'>
        <h3>Do you want to delete this<span style={{'color': 'red'}}> {user.taskname} </span>record?</h3>
        <button onClick={()=>deleteUser()} className='btn btn-outline-danger col-3'>YES</button>
        <NavLink to='/show'><button className='btn btn-outline-warning col-3'>NO</button></NavLink>

    </div>
    </center>
    </>
  )
}

export default Delete