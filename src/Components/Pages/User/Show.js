import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Show() {
    const [users, setUser] = useState([])

    async function fetchData(){
        const token = localStorage.getItem( 'access' )
        const result = await axios.get("http://127.0.0.1:8000/a1/tasks/" ,  
            { headers  : { Authorization : `Bearer ${token}`  }  }   
        );
        console.log( result )
        setUser(result.data);
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <>
        <center><h1>TABLE DATA</h1></center>
        <table className='table table-dark table-striped'>
            <thead>
                <tr>
                    <th>Task Name</th>
                    <th>Description</th>
                    <th>Assigned To</th>
                    <th>Assigned Date</th>
                    <th>Task Status</th>
                    <th>Deadline</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((obj)=>{
                        return(
                            <tr>
                                <td>{obj.task_name}</td>
                                <td>{obj.task_descriptions}</td>
                                <td>{obj.task_assigned_to}</td>
                                <td>{obj.task_assigned_date}</td>
                                <td>{obj.task_satus}</td>
                                <td>{obj.task_deadline}</td>
                                <td>
                                 <NavLink to={`/update/${obj.id}`}><button className='btn btn-outline-warning btn-sm me-3'>UPDATE</button></NavLink>  
                                 <NavLink to={`/delete/${obj.id}`}><button className='btn btn-outline-danger btn-sm '>DELETE</button></NavLink>
                                </td>
                            </tr>
                        )

                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default Show