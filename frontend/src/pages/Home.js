import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
export default function Home() {

    const {id} = useParams();

    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8081/users")
        setUsers(result.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8081/users/${id}`);
        loadUsers();
    }

    return (
        <div className='container'>
            <div classNameName='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((users, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{users.name}</td>
                                    <td>{users.username}</td>
                                    <td>{users.email}</td>
                                    <td>
                                        <Link to={`/viewuser/${users.id}`} className='btn btn-primary mx-2'>View</Link>
                                        <Link to={`/edituser/${users.id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
                                        <button 
                                        onClick={() => deleteUser(users.id)}
                                        className='btn btn-danger mx-2'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
