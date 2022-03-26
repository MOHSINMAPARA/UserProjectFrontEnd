import {useEffect,useState} from 'react'
import {  NavLink,useNavigate,useParams } from 'react-router-dom'
import "./EditUser.css"
import axios from "axios"

const EditUser = () => {
  
  
  const navigate = useNavigate()   
  const {userId} = useParams()      
  const [firstName,setFirstName]= useState({})
  const [lastName,setLastName]= useState({})
  const [email,setEmail]= useState({})
  const [mobNumber,setMobNumber]= useState({})




  
 
  useEffect(()=>{

  
  axios.put(`http://localhost:8001/users/${userId}`)
  .then (res => {
  //  console.log (res.data)
   setFirstName(res.data.firstName)
   setLastName(res.data.lastName)
   setEmail(res.data.email)
   setMobNumber(res.data.mobNumber)
  
   
  })
  .catch(err => alert(err))

},[])



const button = (e) =>{
  e.preventDefault();
  const data = {
    firstName:firstName,
    lastName:lastName,
    email:email,
    mobNumber:mobNumber
  }

  axios.put(`http://localhost:8001/users/${userId}`,data)
    .then(res =>{
      alert("User Updated")
      navigate("/")
    })
    .catch(err => alert(err))

  }

  return (
    <div >
         
                
            


            <form onSubmit={button} className='form'>
            <NavLink to="/"    className="btn btn-primary">Go to Home</NavLink>
                <h1>Edit User Info</h1>
                <div className="form-group">
                    <label for="formGroupExampleInput">Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" required
                   value={ firstName} onChange={(e)=> setFirstName(e.target.value)}/>
                    <label for="formGroupExampleInput2">Last Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" required
                   value={lastName} onChange={(e)=> setLastName(e.target.value)}/>    
                    <label for="formGroupExampleInput2">Email</label>
                    <input type="Email" className="form-control" id="formGroupExampleInput2"required
                    value={email} onChange={(e)=> setEmail(e.target.value)} />
                    <label for="formGroupExampleInput2">Mobile Number</label>
                    <input type="Number" className="form-control" id="formGroupExampleInput2"required
                    value={mobNumber} onChange={(e)=> setMobNumber(e.target.value)} />
                    <input type="submit"   className="btn btn-primary btn-lg" />
                   
                   
                </div>

              
               

            </form>
    
             </div>
                  
              
          
  )
}
export default EditUser;