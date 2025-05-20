import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';
import Edit from './Edit'
import Create from './Create';

function Display(){

    //PREPARING ON HOW THE DATA SHOULD BE DISPLAYED
    var [users, setUsers] = useState([]);

    //FETCHING THE DATA FROM THE DATABASE
    useEffect(()=>{
        fetchUser();
    }, []);
    
    function fetchUser(){
        axios.get("http://localhost/reactAPI/users").then((response)=>{
            //console.log(response.data);
            setUsers(response.data);
        })
    } 

    //DELETING A ROW
    var deleteUser = (id) =>{
        axios.delete(`http://localhost/reactAPI/user/${id}/delete`).then((response)=>{
            console.log(response.data);
            fetchUser();
        })
    }

    //EDIT DATA

    return(
        <div>
            <Create/>
            <br/>
            <table border={1} width={300}>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.Student_Name}</td>
                            <td>{user.Course}</td>
                            <td>
                                <button >
                                    <Link to={`user/${user.id}/edit`}>Edit</Link>
                                </button>
                            </td>
                            <td>
                                <button onClick={()=>deleteUser(user.id)}>
                                    Delete
                                </button>
                            </td>
                            
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Display;