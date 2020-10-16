import React,{useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddUser = () => {

    const [user,setUser] = useState({
        name:'',
        username:'',
        email:''
    })

    let history = useHistory()

   const onInputChange = e =>{
       setUser({...user,[e.target.name]:[e.target.value]})
   }
    const onSubmit = async e =>{
        e.preventDefault()
        await axios.post('http://localhost:3001/users', user)
        history.push('/')
    }

    return (
        <div className="row">
           <div className="col-6 mx-auto">
           <form className="form" onSubmit={e => onSubmit(e)} >
            <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" value={user.name} onChange={e  => onInputChange(e)} />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" name="username" value={user.username} onChange={e => onInputChange(e)}  />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" value={user.email} onChange={e => onInputChange(e)}  />
                </div>
                <button className="btn btn-primary">Add User</button>
           </form>
           </div>
        </div>
    )
}

export default AddUser
