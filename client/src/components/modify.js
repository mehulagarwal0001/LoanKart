import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const Modify = (props)=>{
const navigate=useNavigate();
    const {id,amount,name,interest_rate,tenure}=props;

   let  {id2}=useParams();



    const [modify_tenure,setmt]=useState(tenure);
    const [modify_interest_rate,setmti]=useState(interest_rate);
    

const handlemti=(e)=>{
    setmti(e.target.value);
}
const handlemt=(e)=>{
    setmt(e.target.value);
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
    <div className="modify-bar d-flex ">
      <form className="w-50" onSubmit={handleSubmit}>
  <div className="form-group row mx-0  ">
    <label htmlFor="amount" className="col-sm-2 col-form-label">Loan Amount</label>
    <div className="col-sm-10">
      <input type="number" readonly className="form-control-plaintext" id="amount" disabled  name="amount" value={amount} />
    </div>
  </div>
  <div className="form-group row mx-0 my-4">
    <label htmlFor="interest_rate" className="col-sm-2 col-form-label">Interest Rate</label>
    <div className="col-sm-10">
      <input type="number" class="form-control" id="interest_rate" required name="interest_rate" value={interest_rate} onChange={handlemti} />
    </div>
  </div>
  <div className="form-group row mx-0 ">
    <label htmlFor="tenure" className="col-sm-2 col-form-label">Tenure</label>
    <div className="col-sm-10">
      <input type="number" class="form-control" id="tenure" required name="tenure" value={tenure} onChange={handlemt} />
    </div>
  </div>
  <div className="form-group  mx-0 my-4 row">
  <button className="btn btn-success">Modify</button>
  </div>
  
</form>
    </div>
)

}


export default Modify;