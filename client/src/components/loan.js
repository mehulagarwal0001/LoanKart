import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modify from "./modify";

const Loan=(props)=>{
    const {name,amount,tenure,interest_rate,id}=props;
    console.log(id);
    const navigate =useNavigate();


    const [modify_tenure,setmt]=useState(tenure);
    const [modify_interest_rate,setmti]=useState(interest_rate);

    const handlemti=(e)=>{
      setmti(e.target.value);
  }
  const handlemt=(e)=>{
      setmt(e.target.value);
  }
    // const handlemodify=(e)=>{
    //        e.preventDefault();
    //           navigate('/modify')
    //       //  return <Modify name={name} amount={amount} interest_rate={interest_rate} id={id} ></Modify>
    // }

    const handleAccept=(e)=>{
        e.preventDefault();

        const response=axios.get('/api/loan/accept/'+id,{
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

    const response=axios.get('/api/loan/reject/'+id,{
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

   const handleButton=(e)=>{
      e.preventDefault();
   }


   
const handleSubmit=(e)=>{
  e.preventDefault();
  
  
  const response= axios.post(`/api/loan/modify/${id}`,{modify_tenure:modify_tenure,modify_interest_rate:modify_interest_rate},{
      // method:'POST',
       headers:{
           'Content-Type':'application/json',
           'auth-token':localStorage.getItem('token')
       }
   }).then((res,err)=>{
       
   const json=  res.data;
  //    console.log(err);
   
  
  
  //  localStorage.setItem('token',json.authToken);
   //console.log(json);
    navigate('/');
  
   }).catch((error)=>{
      //  toast.warn("Wrong Credentials");
       console.log(error);
   })
  
  
  }

    return (
<div>
<div className="form">
              <form className="form-horizontal">
                <div className="form-group row mb-3 mt-3">
                  <label htmlFor="Name" className="col-12 col-sm-2 control-label">Debtor Name</label>
                  <div className="col-12 col-sm-6 middle">
                    <input type="text" className="form-control" id="Name" placeholder="Debtor Name"  disabled value={name}/>
                  </div>
                  <button type="submit" className="col-12 btn btn-success col-sm-2 btnr" onClick={handleAccept} >Accept</button>
                </div>
                <div className="form-group row mb-3">
                  <label htmlFor="Loan" className="col-12 col-sm-2 control-label">Loan Amount</label>
                  <div className="col-sm-6 middle">
                    <input type="Number" className="form-control" id="Loan" placeholder="Loan Amount" disabled  value={amount}/>
                  </div>
                  <button type="submit" className="btn btn-danger col-sm-2 btnr" onClick={handlereject}>Reject</button>
                </div>
                <div className="form-group row mb-3">
                  <label htmlFor="tenure" className="col-12 col-sm-2 control-label">Tenure</label>
                  <div className="col-sm-6 middle">
                    <input type="Number" className="form-control" id="tenure"  disabled placeholder="Tenure" value={tenure} />
                  </div>
                  <button type="submit" className="col-12 btn btn-warning col-sm-2 btnr" onClick={handleButton} data-bs-toggle="modal" data-bs-target="#myModal">Modify</button>
                </div>
                <div className="form-group row mb-3">
                  <label htmlFor="Interest" className="col-12 col-sm-2 control-label">Interest Amount</label>
                  <div className="col-sm-6">
                    <input type="Number" className="form-control" id="Interest" disabled placeholder="Interest Rate" value={interest_rate} />
                  </div>
                </div>
              </form>
            </div><div className="modal" tabIndex={-1} role="dialog" id="myModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="form1">
                    <form className="form-horizontal " onSubmit={handleSubmit} >
                      
                      <div className="form-group row">
                        <label htmlFor="Loan" className="col-12 col-sm-4 control-label">Loan Amount</label>
                        <div className="col-sm-8 middle">
                          <input type="Number" className="form-control" id="Loan" disabled value={amount} />
                        </div>
                      </div>
                      <div className="form-group row mb-3">
                        <label htmlFor="Tenure" className="col-12 col-sm-4 control-label">Tenure</label>
                        <div className="col-sm-8 middle">
                          <input type="Number" className="form-control" id="Tenure" required value={modify_tenure} onChange={handlemt} />
                        </div>
                      </div>
                      <div className="form-group row mb-3">
                        <label htmlFor="Interest" className="col-12 col-sm-4 control-label">Interest Amount</label>
                        <div className="col-sm-8 middle">
                          <input type="Number" className="form-control" id="Interest"required value={modify_interest_rate} onChange={handlemti} />
                        </div>
                      </div>
                      <div className="form-group row mb-3">
                        <button className="btn btn-success">Submit</button>
                      </div>
                    </form>
                  </div></div></div>
            </div>
            
          </div>
        </div>
      </div>

            </div>
    )
}


export default Loan;