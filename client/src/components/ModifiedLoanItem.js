import axios from "axios";
import { useNavigate } from "react-router-dom";


const ModifiedLoanItem=(props)=>{
   const navigate=useNavigate();


  const {name,amount,tenure,interest_rate,id}=props;

  const handleAccept=(e)=>{
    e.preventDefault();

    const response=axios.get('/api/loan/modifyaccept/'+id,{
        headers:{
            'Content-Type':'application/json',
            "auth-token":localStorage.getItem('token'),
        }
    }).then((res,err)=>{
        const json=  res.data;
         console.log(json);
   navigate('/');
  
    }).catch((err)=>{
        console.log(err);
    })
   
}

const handlereject=(e)=>{
    e.preventDefault();

    const response=axios.get('/api/loan/modifyreject/'+id,{
        headers:{
            'Content-Type':'application/json',
            "auth-token":localStorage.getItem('token'),
        }
    }).then((res,err)=>{
        const json=  res.data;
         console.log(json);
   navigate('/');
  
    }).catch((err)=>{
        console.log(err);
    })
   
   }



return (
    <div className="form">
              <form className="form-horizontal">
                <div className="form-group row mb-3 mt-3">
                  <label htmlFor="Name" className="col-sm-2 control-label">Lender Name</label>
                  <div className="col-12 col-sm-6 middle">
                    <input type="text" className="form-control" id="Name" placeholder="Lender Name" disabled  value={name}/>
                  </div>
                  <button type="submit" className="col-12 btn btn-success col-sm-2 btnr" onClick={handleAccept}>Accept</button>
                </div>
                <div className="form-group row mb-3">
                  <label htmlFor="Loan" className="col-12 col-sm-2 control-label">Loan Amount</label>
                  <div className="col-sm-6 middle">
                    <input type="Number" className="form-control" id="Loan" disabled placeholder="Loan Amount" value={amount} />
                  </div>
                  <button type="submit" className="btn btn-danger col-sm-2 btnr" onClick={handlereject}>Reject</button>
                </div>
                <div className="form-group row mb-3">
                  <label htmlFor="Tenure" className="col-12 col-sm-2 control-label">Tenure</label>
                  <div className="col-sm-6 middle">
                    <input type="Number" className="form-control" id="Tenure" placeholder="Tenure" disabled value={tenure} />
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <label htmlFor="Interest" className="col-12 col-sm-2 control-label">Interest Amount</label>
                  <div className="col-sm-6">
                    <input type="Number" className="form-control" id="Interest" placeholder="Interest Rate" value={interest_rate} />
                  </div>
                </div>
              </form>
            </div>
)

}

export default ModifiedLoanItem;