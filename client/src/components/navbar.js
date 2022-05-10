import { Link,useNavigate} from 'react-router-dom';

const Navbar = (props)=>{
     const navigate=useNavigate();
    const hanldeClick=()=>{
      localStorage.removeItem('token');
       window.location.reload();
navigate('/');
    }

    return (
      <div>
      <nav id="NAV"  className="navbar navbar-expand-lg navbar-light">
  <div  className="container">
      <div className='w-25 d-flex justify-content-center'>
    <Link   className="navbar-brand ml-8"  to='/'>
        <div>
        <img src="./images/logo.png" alt='LoanKart'></img>
</div>
</Link>
    </div>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
        <li  className="nav-item mx-4 ">
          <Link   className="nav-link  text-center " aria-current="page"  to='/'>Home</Link>
        </li>
        <li  className="nav-item mx-4">
          <Link   className="nav-link text-center "  to='/profile'>Profile</Link>
        </li>
        <li  className="nav-item mx-4">
          <Link   className="nav-link text-center"  to='/panel'>Panel</Link>
        </li>
        <li  className="nav-item mx-4">
          <Link   className="nav-link text-center"  to='/request'>Request</Link>
        </li>
        <li  className="nav-item mx-4">
        {!localStorage.getItem('token')&&  <Link   className="nav-link text-center"  to='/login'>Login</Link>}
        {localStorage.getItem('token') &&  <Link   className="nav-link text-center"  to='/' onClick={hanldeClick} >LogOut</Link> }
        </li>
    
      </ul>
      <div className="d-flex justify-content-center ">
        <Link to='/panel'  className="btn btn-outline-success text-center mr-4" type="submit">Apply Now</Link>
      </div>
    </div>
  </div>
</nav>
      </div>
    )
}

export default Navbar;