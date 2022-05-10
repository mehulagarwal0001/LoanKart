
import '../request.css'
import { useState,useEffect } from 'react';
import PreviousCreditItem from './previouscredititem';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PreviousCredit=()=>{

    const [loans,setloans]=useState([]);

    useEffect(()=>{
      const response=axios.get('/api/loan/creditloans',{
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


    return (
        <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-3 credit">
            <div className="previous active">
              Previous Credit
            </div>
            <div className="next">
             <Link to='/request' > Current Request </Link> 
            </div>
          </div>
          <div className=" col-12 col-sm-9 debtors">
              {loans.length==0 && <div>No Credits</div>}
              {/* {loans.map(loan => {})} */}
              { localStorage.getItem('token')!="undefined" && localStorage.getItem('token')!='null' &&loans.length!=0 &&loans.map((loan) => { return < PreviousCreditItem  key={loan._id} name={loan.name} amount={loan.amount} tenure={loan.tenure} interest_rate={loan.interest_rate} id={loan._id} /> })}
            
            </div>
            
          </div>
        </div>
    )
}

export default PreviousCredit;