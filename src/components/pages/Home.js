import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

    const [user,setUser] = useState([])

    useEffect(() =>{
        loadUsers()
    },[])

    const loadUsers = async () =>{
        const result = await axios.get('http://localhost:3001/users', user)
        setUser(result.data)
    }

    const DeleteUser = async id =>{
        await axios.delete(`http://localhost:3001/users/${id}`, user)
        loadUsers()
    }
    return (
        <div>
            <table className="table">
                <thead className="thead bg-light">
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Control</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                {
                    user.map((user,index) =>{
                        return(
                            <tr>
                                <th>{ index + 1 }</th>
                                <td>{ user.name }</td>
                                <td>{ user.username }</td>
                                <td>{ user.email }</td>
                                <td>
                                    <Link className="btn btn-primary mr-2" to={`/user/${user.id}`}>View</Link>
                                    <Link className="btn btn-secondary mr-2" to={`/user/edit/${user.id}`} >Edit</Link>
                                    <Link className="btn btn-danger mr-2" onClick={() => DeleteUser(user.id)} >Delete</Link>
                                </td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </table>
        </div>
    )
}

export default Home
