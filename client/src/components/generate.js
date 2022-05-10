import { Link } from "react-router-dom";

const Generate= ()=>{

    return (
          <div className="genrate w-100 h-100 bg-dark  ">
              <div className=" genrate-grid w-25  ">
              <Link type="button" to='/genrate-score' className="d-block btn btn-primary w-50 my-4 mt-4  mx-auto">Generate CIBIL Score</Link>
              <Link type="button" to="/" className="d-block btn btn-success w-50 my-4 mx-auto">Home</Link>
              </div>
          </div>
    )}



export default Generate;