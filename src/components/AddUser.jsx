import {useState} from 'react'
import "./AddUser.css"
import {  NavLink, useNavigate } from 'react-router-dom'
import axios from "axios"


 const AddUser = () => {
  const navigate = useNavigate()        
  const [firstName,setFirstName]= useState("")
  const [lastName,setLastName]= useState("")
  const [email,setEmail]= useState("")
  const [mobNumber,setMobNumber]= useState("")




  const button = (e) =>{
  e.preventDefault();
  const data ={
    firstName:firstName,
    lastName:lastName,
    email:email,
    mobNumber:mobNumber
  }        
  console.log(data)
  axios.post("http://localhost:8001/users",data)
  .then (res =>{
   alert("User Added")
   navigate("/")
  })
  .catch(err => alert(err))

  }

  return (
    <div>
            <form onSubmit={button} className='form'>
            <NavLink to="/"    className="btn btn-primary">Go to Home</NavLink>
                <h1>Add New User</h1>
                <div className="form-group">
                    <label for="formGroupExampleInput">Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" required
                    onChange={(e)=> setFirstName(e.target.value)}/>
                    <label for="formGroupExampleInput2">Last Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" required
                    onChange={(e)=> setLastName(e.target.value)}/>    
                    <label for="formGroupExampleInput2">Email</label>
                    <input type="Email" className="form-control" id="formGroupExampleInput2"required
                    onChange={(e)=> setEmail(e.target.value)} />
                    <label for="formGroupExampleInput2">Mobile Number</label>
                    <input type="Number" className="form-control" id="formGroupExampleInput2"required
                    onChange={(e)=> setMobNumber(e.target.value)} />
                    <input type="submit"   className="btn btn-primary btn-lg" />
                   
                   
                </div>

              
               

            </form>
    </div>
  )
}
export default AddUser;