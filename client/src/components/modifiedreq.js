
import { useEffect, useState } from 'react';
import '../request.css'
import axios from 'axios';
import ModifiedLoanItem from './ModifiedLoanItem';
import { Link } from 'react-router-dom';
const ModifyLoan =()=>{

  const [loans,setloans]=useState([]);
    useEffect(()=>{
        const response=axios.get('/api/loan/askmodify',{
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
            }
        }).then((res,err)=>{
            const json=  res.data;
             console.log(json);
           setloans(json.loans);
      
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    return (
        <div className="container-fluid">
        <div className="row">
          <div className="col-xs-1 col-sm-3 credit">
            <div className="previous">
             <Link to='/previousdept'>Previous Dept</Link> 
            </div>
            <div className="next active">
              Current Offer
            </div>
          </div>
          <div className=" col-12 col-sm-9 debtors">
            
          {loans.length==0 && <div>No New Offer</div>}

            
              { loans.length!=0 &&loans.map((loan) => { return < ModifiedLoanItem key={loan._id} name={loan.modify_by_name} amount={loan.amount} tenure={loan.modify_tenure} interest_rate={loan.modify_interest_rate} id={loan._id} /> })}
            

          </div>
        </div>
      </div>
    )
}

export default ModifyLoan;