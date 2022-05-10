import { useState  } from "react";
import axios from 'axios'

import { useNavigate } from "react-router-dom";

const Profile=()=>{
    const navigate=useNavigate();
  const [credentials,setCredentials]=useState({
       aadhar_card:null,
       pan_card:null,
       salary_slip:null,
       name:'',
       bank_name:'',
       ifsc_code:'',
       account_number:0,
       phone_number:0,
       ctc:0
  })
  
  const onFileChange=(e)=>{
    
    // console.log(e.target.files[0]);
      setCredentials({...credentials,[e.target.name]: e.target.files[0]})

  }

  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]: e.target.value});
}
  const handleSubmit=(e)=>{
   e.preventDefault();
   const fd=new FormData();
   fd.append("aadhar_card",credentials.aadhar_card);
   fd.append("pan_card",credentials.pan_card);
   fd.append("salary_slip",credentials.salary_slip);
   fd.append("name",credentials.name);
   fd.append("bank_name",credentials.bank_name);
   fd.append("ifsc_code",credentials.ifsc_code);
   fd.append("account_number",credentials.account_number);
   fd.append("phone_number",credentials.phone_number);
   fd.append("ctc",credentials.ctc);
  //  console.log(credentials);
  console.log(fd);

   const response= axios.post(`/api/user/profile`,fd,{
    // method:'POST',
     headers:{
         "Content-Type": "multipart/form-data",
         'auth-token':localStorage.getItem('token')
     }
 }).then((res,err)=>{
     
 const json=  res.data;
//    console.log(err);
 
navigate('/genrate');
console.log(json);


 }).catch((error)=>{
 
     console.log(error);
 })

  }

   return (
       <div className="container">
           <form className="mb-3 mt-3 container font-weight-bold" onSubmit={handleSubmit} encType="multipart/form-data">
           
  <label htmlFor="formFile" className="form-label mb-3 mt-3 ">Aadhar Card</label>
  <input className="form-control" required   type="file"  name="aadhar_card" id="aadhar_card"   onChange={onFileChange}  />
     
           
  <label htmlFor="formFile" className="form-label mb-3 mt-3">Pan Card</label>
  <input className="form-control"  required  type="file" name="pan_card" id="pan_card"  onChange={onFileChange} />
  
  <label htmlFor="formFile" className="form-label mb-3 mt-3">Salary Slip</label>
  <input className="form-control" type="file" id="salary_slip" name="salary_slip"  onChange={onFileChange} />
  <label htmlFor="name" className="form-label mb-3 mt-3">Account Holder Name</label>
  <input className="form-control" required   type="text" id="name" name="name" value={credentials.name} onChange={onChange} />
  <label htmlFor="bank_name" className="form-label mb-3 mt-3">Bank Name</label>
  <input className="form-control" required   type="text" id="bank_name" name="bank_name" value={credentials.bank_name} onChange={onChange} />
  <label htmlFor="ifsc_code" className="form-label mb-3 mt-3">IFSC Code</label>
  <input className="form-control"  required  type="text" id="ifsc_code" name="ifsc_code"  value={credentials.ifsc_code} onChange={onChange}/>
  <label htmlFor="account_number" className="form-label mb-3 mt-3">Account Number</label>
  <input className="form-control"  required  type="number" id="account_number" name="account_number" value={credentials.account_number==0?'':credentials.account_number} onChange={onChange} />
  
  <label htmlFor="phone_number" className="form-label mb-3 mt-3">Phone Number</label>
  <input className="form-control"  required  type="number" id="phone_number" name="phone_number"  value={credentials.phone_number==0?'':credentials.phone_number} onChange={onChange} />
  <label htmlFor="ctc" className="form-label mb-3 mt-3">CTC</label>
  <input className="form-control"  required  type="number" id="ctc" name="ctc" value={credentials.ctc==0?'':credentials.ctc} onChange={onChange} />
  <div className="d-flex justify-content-center">
    <button className="mb-3 mt-3  text-center btn btn-primary"   >Submit</button>
    </div>
     </form>


       </div>
   )
}

export default Profile;