import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {  useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const User = () => {

    const [user,setUser] = useState({
        name:'',
        username:'',
        email:''
    })
    const { id } = useParams()

    useEffect(() =>{
        loadUsers()
    },[])

    const loadUsers = async () =>{
        const result = await axios.get(`http://localhost:3001/users/${id}`, user)
        setUser(result.data)
    }

    return (
        <div className="row">
           <div className="col-6 mx-auto">
            <ul className="list-group my-5">
                <li className="list-group-item">Name: {user.name}</li>
                <li className="list-group-item">UserName: {user.username}</li>
                <li className="list-group-item">Email: {user.email}</li>
            </ul>
            <Link className="btn btn-primary" to="/" >Back To Home</Link>
           </div>
        </div>
    )
}

export default User
