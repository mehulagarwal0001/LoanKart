import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';
const Signup =()=>{
    const navigate=useNavigate();
    const [credentials,setCredentials]=useState({name:"",email:"",password:""});
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }

    const OnSubmit=(e)=>{
        e.preventDefault();
        console.log(credentials);

        const response= axios.post(`/api/auth/signup`,{name:credentials.name,email:credentials.email,password:credentials.password},{
            // method:'POST',
             headers:{
                 'Content-Type':'application/json'
             }
         }).then((res,err)=>{
             
         const json=  res.data;
        //    console.log(json);
         
        
        
         localStorage.setItem('token',json.authToken);
         //console.log(json);
          navigate('/');

         }).catch((error)=>{
            //  toast.warn("Wrong Credentials");
             console.log(error);
         })

    }


    return (
       <div id="login" className="d-flex  justify-content-center align-items-center my-4">
        
        <div className="d-flex justify-content-center login-section">
            
         <form onSubmit={OnSubmit}>
         <h2 className="text-center my-4">
                Sign Up 
            </h2>
            <label className="mx-2 d-block " htmlFor="name">
                Name
             </label>
             <input className="mx-2 w-100 " type="text" name="name" required id="name" value={credentials.name} onChange={onChange} />
             
             <label className="mx-2 d-block mx-2 mt-4 " htmlFor="email">
                Username/Email
             </label>
             <input className="mx-2 w-100 " type="email" name="email" required id="email" value={credentials.email} onChange={onChange}  />
             
             <label  className="d-block mx-2 mt-4 " htmlFor="password">
                 Password:
             </label>
             <input  className="mx-2  w-100" type="password" name="password" required id="password" value={credentials.password} onChange={onChange}  />
            <button className="d-block text-center mx-2 w-100 my-4" >SIGNUP</button>

            <p className="mx-2">
                Don't have an account? <Link to="/login">Login</Link>
            </p>
         </form>
          
        
        </div>


        </div>
    )
}

export default Signup;