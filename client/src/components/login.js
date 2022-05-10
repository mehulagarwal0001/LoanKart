
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';
const Login =()=>{
   const navigate=useNavigate();
    const [credentials,setCredentials]=useState({email:"",password:""});
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }

    const OnSubmit=(e)=>{
        e.preventDefault();
        console.log(credentials);

        const response= axios.post(`/api/auth/login`,{email:credentials.email,password:credentials.password},{
            // method:'POST',
             headers:{
                 'Content-Type':'application/json'
             }
         }).then((res,err)=>{
             
         const json=  res.data;
        //    console.log(err);
         
        
        
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
                Log In 
            </h2>
             <label className="mx-2 d-block " htmlFor="email">
                Username/Email
             </label>
             <input className="mx-2 w-100 "  type="email" id="email" name="email" required value={credentials.email} onChange={onChange} />
             
             <label  className="d-block mx-2 mt-4 " htmlFor="password">
                 Password:
             </label>
             <input type="password" id="password" name="password"  required className="mx-2  w-100"  value={credentials.password} onChange={onChange}/>
            <button className="d-block text-center mx-2 w-100 my-4" >LOGIN</button>

            <p className="mx-2">
                Don't have an account? <Link to="/signup">Signup</Link>
            </p>
         </form>
          
        
        </div>


        </div>
    )
}

export default Login;