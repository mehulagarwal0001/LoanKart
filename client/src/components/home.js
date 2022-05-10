import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../home.css'
const Home = () => {
const navigate=useNavigate();
    return (
        <div>


            <div className="container-fluid mt-5">
                <div className="row ">
                    <div className="col-12 col-sm-7 mt-5">
                        <div className="lending ">
                            Digital Lending <br />With Personal<br />Services
                        </div>
                        <div className="smallt ">
                            Simple online experience.Dedicated Loan<br /> Professionals.online Pre-Approvals.
                        </div>
                        <Link to='/panel' className="btn-success lendbutton greenbutton">Apply Now </Link>
                    </div>
                    <div className="col-12 col-sm-5 mt-5">
                        <img src="./images/use1.png" alt="Girl" className="img1" />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="lending">
                        What type of Loan are you <br /> looking for?
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="wrap col-xs-12 col-sm-6 "><button type='button' onClick={()=>{navigate('/panel')}} className="btn loanbutton">Ask  Personal Loan<br /><i className="fa-solid fa-arrow-right mt-1"></i></button>
                    </div>
                    <div className="wrap col-xs-12 col-sm-6"><button className="btn loanbutton ">Give Personal Loan<br /><i className="fa-solid fa-arrow-right mt-1"></i></button></div>
                </div>

            </div>



            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-sm-6">
                        <img src="./images/use3.png" className="img2" />
                    </div>
                    <div className="col-sm-6">
                        <div className="lending">Why LoanKart?</div>
                        <div className="container">
                            <div className="row mt-5">
                                <div className="col-sm-6">
                                    <h4> <i className="fa-solid fa-calculator"></i> Lower Rates & Fees</h4>
                                    <div className='boxes'>
                                        Lower rates and fees<br />
                                        somewhere instantly<br />
                                        and shop anywhere<br />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <h4> <i className='fas fa-user-alt'></i> Human Touch</h4>
                                    <div className='boxes'>
                                        Borrowing and Giving<br />
                                        loans are now easy
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col">
                                    <h3> <i className='far fa-gem'></i> Speed and Ease</h3>
                                    <div className='boxes'>
                                        Speed and easy tempor<br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container-fluid">
                    <div className="row mt-5">
                        <div className="col-sm-6 mt-3">
                            <div className="lending">How does our <br />process work</div>
                            <div className="row mt-3">
                                <div className="col-sm-6 mt-3"><h6> <span className='d-inline-block rounded-circle  roman-tags'>1</span> Login in our Site</h6></div>
                                <div className="col-sm-6 mt-3"><h6> <span className='d-inline-block rounded-circle  roman-tags'>2</span> Complete your Profile</h6></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-6 mt-3"> <h6> <span className='d-inline-block rounded-circle roman-tags '>3</span>Generate CIBIL score</h6></div>
                                <div className="col-sm-6 mt-3"><h6> <span className='d-inline-block rounded-circle  roman-tags'>4</span> Apply for Loan</h6></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col mt-3"> <h6><span className='d-inline-block rounded-circle mr-1 roman-tags'>5</span>Negotiate and close your deal</h6></div>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-5">
                            <img src="./images/use4.png" className="img3" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Home;