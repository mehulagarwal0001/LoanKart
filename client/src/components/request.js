import { useEffect, useState } from 'react';
import '../request.css'
import axios from 'axios';

import { Link } from 'react-router-dom';

import Loan from './loan';
import Modify from './modify';

const Request=()=>{

    const [loans,setloans]=useState([]);
   const [poss,setposs]=useState(false);
  //  const handlemodify=()

     useEffect(()=>{
        const response=axios.get('/api/loan/getloans',{
      headers:{
          'Content-Type':'application/json',
          'auth-token':localStorage.getItem('token')
      }
  }).then((res,err)=>{
      const json=  res.data;
       console.log(json);
     setloans(json);

  }).catch((err)=>{
      console.log(err);
  })
     },[])

     useEffect(()=>{

     },[loans])

    return  (
        <div className="container-fluid">
          
        <div className="row">
          <div className="col-12 col-sm-3 credit">
            <div className="previous">
             <Link to='/previouscredit' className='w-100 d-block' >Previous Credit</Link> 
            </div>
            <div className="next active">
             Current Request
            </div>
          </div>
          <div className=" col-12 col-sm-9 debtors">
              {loans.length==0 && <div>No New Request</div>}
              {/* {loans.map(loan => {})} */}
              { localStorage.getItem('token')!="undefined" && localStorage.getItem('token')!='null' &&loans.length!=0 &&loans.map((loan) => { return < Loan  key={loan._id} name={loan.name} amount={loan.amount} tenure={loan.tenure} interest_rate={loan.interest_rate} id={loan._id} /> })}
            
            </div>
            
          </div>
        </div>
      
    )
}


export default Request;