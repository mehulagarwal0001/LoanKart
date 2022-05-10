
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GenrateScore =()=>{

    const  [ctc,setctc]=useState(0);
    const response=axios.get('/api/user/profile',{
        headers:{
            'Content-Type':'application/json',
            'auth-token':localStorage.getItem('token')
        }
    }).then((res,err)=>{
        const json=  res.data;
         setctc(json.ctc);
    //  console.log(ctc)

    }).catch((err)=>{
        console.log(err);
    })

    useEffect(()=>{
        console.log(ctc);
    },
        [ctc])



    return (

<div className="genrate w-100 h-100 bg-dark  ">
              <div className=" genrate-grid w-25  ">
                   <h2>Your CIBIL Score is</h2>
                   <h3>{ctc}</h3>
              <Link type="button" to='/genrate-score' className="d-block btn btn-primary w-50 my-4 mt-4  mx-auto">Panel</Link>
              <Link type="button" to="/" className="d-block btn btn-success w-50 my-4 mx-auto">Home</Link>
              </div>
          </div>

    )
}

export default GenrateScore;