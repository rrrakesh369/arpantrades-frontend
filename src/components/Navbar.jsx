import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'
import { removeUser } from '../utils/userSlice'


const Navbar = () => {
  
  const dispatch= useDispatch()
  const navigate = useNavigate()
  
  const user = useSelector((store)=>store.user)
  

  const handleLogout = async ()=>{
    try {
      await axios.post(BASE_URL + "/logout", {}, {withCredentials: true})
      dispatch(removeUser());
      return navigate("/")

    } catch (err) {
        throw new Error(err.message)      
    }
  }
     
  return (
     <div className="navbar bg-base-200 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">daisyUI</Link>
  </div>
  <div className='flex'>
    <input type="text" placeholder="Search" className="input input-bordered w-30" />
  </div>

  {!user && (
        <div className="flex-none">
          <ul className="menu menu-horizontal px-2 py-3">
            <li><Link to="/login" className="btn btn-ghost text-xl">Login</Link></li>
          </ul>
        </div>
  )}


  {user && (
  <div className="flex gap-2 mx-6  items-center">    
      <div className='form-control'>Welcome, {user.firstName}</div>
    <div className="dropdown dropdown-end mx-6 flex">
      
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
       
        <div className="w-10 rounded-full">
          <img
            alt="User Photo"
            src={user.photoUrl} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
  </div>)}
</div>  
  )
}

export default Navbar
