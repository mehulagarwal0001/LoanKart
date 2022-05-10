import axios from "axios";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import '../panel.css'
const Panel = () => {
    const  [ctc,setctc]=useState(0);
      const score=   ( value)=>{
   
        if(value<=100000){
          return 300;
         }
         else if(value<=300000){
            return 350;
         }
         else if(value<=500000){
            return 450;
         }
         else if(value<=600000){
            return 500;
         }
         else if(value<=700000){
             return 550;
         }
         else if(value<=1000000){
             return 600;
         }
         else if(value<=1500000){
           return 650;
         }
         else {
             return 700;
         }
     
     }

     const limit=   ( value)=>{
   
        if(value<=300){
          return 20000;
         }
         else if(value<=350){
            return 80000;
         }
         else if(value<=450){
            return 100000;
         }
         else if(value<=500){
            return 150000;
         }
         else if(value<=550){
             return 200000;
         }
         else if(value<=600){
             return 300000;
         }
         else if(value<=650){
           return 400000;
         }
         else {
             return 500000;
         }
     
     }
    const response=axios.get('/api/user/profile',{
        headers:{
            'Content-Type':'application/json',
            'auth-token':localStorage.getItem('token')
        }
    }).then((res,err)=>{
        const json=  res.data;
        const jt=score(json.ctc);
         setctc(limit(jt));
    //  console.log(ctc)

    }).catch((err)=>{
        console.log(err);
    })

    useEffect(()=>{
        console.log(ctc);
    },
        [ctc])




    const navigate = useNavigate();

    const [loan, setloan] = useState({ amount: 0, tenure: 0, interest_rate: 0 });

    const onChange = (e) => {
        setloan({ ...loan, [e.target.name]: e.target.value })
    }


    const handleSubmit = (e) => {

        e.preventDefault();

        const response = axios.post(`/api/loan/askloan`, loan, {
            // method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        }).then((res, err) => {

            const json = res.data;
            //    console.log(err);

            console.log(json);


            //console.log(json);
            navigate('/');

        }).catch((error) => {
            //  toast.warn("Wrong Credentials");
            console.log(error);
        })
    }

   
    // var txt = 'We respect your privacy';
    
    var i = 0;
        var txt = 'We respect your privacy';
        var speed = 75;

        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("text1").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
    useEffect(()=>{
            typeWriter();    
    },[])


    return (


        

      


        <div>

            <div className="image"></div>
            <div id="text1" className="text" style={{background:"transparent",
        color:"white"}}  >
                  
            </div>


            <div className="wrapping">
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Loan Amount</label>
                    <input type="number" className="form-control" id="amount" name="amount" required value={loan.amount == 0 ? '' : loan.amount} onChange={onChange} aria-describedby="emailHelp" max={ctc} />
                    {/* <i className="far fa-eye" id="togglePassword" ></i> */}
                    <div>Maximum Amount {ctc}</div>


                </div>
                <div className="mb-3">
                    <label htmlFor="tenure" className="form-label">Tenure</label>
                    <input type="number" className="form-control" id="tenure" name="tenure" required value={loan.tenure == 0 ? '' : loan.tenure} onChange={onChange} aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="interest_rate" className="form-label">Interest Rate</label>
                    <input type="number" className="form-control" id="interst_rate" required name="interest_rate" value={loan.interest_rate == 0 ? '' : loan.interest_rate} onChange={onChange} aria-describedby="emailHelp" />

                </div>
                <button className="greenbutton" onClick={handleSubmit}>Apply</button>
            </div>
        </div>

    )
}


export default Panel;
