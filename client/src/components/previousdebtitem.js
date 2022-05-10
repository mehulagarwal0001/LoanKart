

const PreviousDebtItem=(props)=>{

    const {name,amount,tenure,interest_rate,id}=props;
    return (
       
<div className="form">
              <form className="form-horizontal">
                <div className="form-group row mb-3 mt-3">
                  <label htmlFor="Name" className="col-12 col-sm-2 control-label">Debtor Name</label>
                  <div className="col-12 col-sm-6 middle">
                    <input type="text" className="form-control" id="Name" placeholder="Debtor Name"  disabled value={name}/>
                  </div>
                  <button type="submit" className="d-none col-12 btn btn-success col-sm-2 btnr"  >Accept</button>
                </div>
                <div className="form-group row mb-3">
                  <label htmlFor="Loan" className="col-12 col-sm-2 control-label">Loan Amount</label>
                  <div className="col-sm-6 middle">
                    <input type="Number" className="form-control" id="Loan" placeholder="Loan Amount" disabled  value={amount}/>
                  </div>
                  <button type="submit" className="d-none btn btn-danger col-sm-2 btnr" >Reject</button>
                </div>
                <div className="form-group row mb-3">
                  <label htmlFor="tenure" className="col-12 col-sm-2 control-label">Tenure</label>
                  <div className="col-sm-6 middle">
                    <input type="Number" className="form-control" id="tenure"  disabled placeholder="Tenure" value={tenure} />
                  </div>
                  <button type="submit" className=" d-none col-12 btn btn-warning col-sm-2 btnr">Modify</button>
                </div>
                <div className="form-group row mb-3">
                  <label htmlFor="Interest" className="col-12 col-sm-2 control-label">Interest Amount</label>
                  <div className="col-sm-6">
                    <input type="Number" className="form-control" id="Interest" disabled placeholder="Interest Rate" value={interest_rate} />
                  </div>
                </div>
              </form>
            </div>
    )
}

export default PreviousDebtItem;