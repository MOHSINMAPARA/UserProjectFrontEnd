import React, { useEffect,useState } from 'react'
import AddUser from "./AddUser"
import EditUser from './EditUser.jsx'
import "./Home.css"
import {  NavLink,useNavigate } from 'react-router-dom'
import axios from "axios"


const Home = () => {

  const navigate = useNavigate() 
  const [userdata,setuserdata]=useState([]) 


  useEffect(()=>{

          axios.get("http://localhost:8001/users")
          .then(res =>{
          
          setuserdata((res.data))
          }).catch(err => alert(err))
 
        },[])

 


  return (
    <div> 
          

         <h1 className='head'>REACT,NODE & EXPRESS JS CRUD APP</h1>
  
         <div className='Home'>
                 
              <table>
                   <NavLink to="./AddUser"  className="btn btn-success float-right">Add User</NavLink>
                  <tr>
                   
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>


                  {

                    userdata.map((res)=>{

                      const deleteButton = (e) =>{
                       
                        axios.delete(`http://localhost:8001/users/${res._id}`)
                        .then (res =>{
                          alert("User Deleted")
                          window.location.reload()
          
                        
                         })
                        .catch(err => alert(err) )
                  }  
                    return(
                    <tr key={res._id}>
                    <td>{res.firstName}</td>
                    <td>{res.lastName}</td>
                    <td>{res.email}</td>
                    <td>{res.mobNumber}</td>
                    
                    <td>
                    <NavLink to={`/EditUser/${res._id}`}  className="btn btn-primary">Edit</NavLink>
                    </td>
                    <td>
                    <button type="button" value={res.id} onClick={deleteButton}  className="btn btn-danger">Delete</button>
                    </td>
                    
                  </tr> 


                      )

                    })
                  }
  
            
                </table>
                    
                  

        </div>


    </div> 
  )
}
  
export default Home;
