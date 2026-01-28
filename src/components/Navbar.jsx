import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import { addConstructionType } from "../utils/ConstructionTypeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handeleSolutionLinks = async (prodType) => {
    try {
      const res = await axios.get(`${BASE_URL}/solutions/Type/${prodType}`);
      dispatch(addConstructionType({ type: prodType, items: res.data }));
      navigate(`/solutions/${prodType}`);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <nav className="navbar fixed top-0 left-0 z-50 bg-base-300/90 bg-gray-200 backdrop-gray-sm shadow-sm px-4 md:px-8">
      {/* Left section (Logo) */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl font-semibold">
          ArpanTraders
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {["Build", "Protect", "Finish", "Repair"].map((type) => (
            <li key={type}>
              <button
                className="text-lg font-medium no-underline mx-3"
                onClick={() => handeleSolutionLinks(type)}
              >
                {type}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Search (desktop only) */}
      <div className="hidden md:flex flex-none">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-40 md:w-60"
        />
      </div>

      {/* Right section (User/Login) */}
      {!user ? (
        <div className="flex-none">
          <Link to="/login" className="btn btn-ghost text-lg">
            Login
          </Link>
        </div>
      ) : (
        <div className="flex-none gap-2 md:gap-4 items-center">
          <span className="hidden sm:block">Welcome, {user.firstName}</span>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User" src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
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
        </div>
      )}

      {/* Mobile Menu */}
      <div className="flex-none md:hidden ml-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {["Build", "Protect", "Finish", "Repair"].map((type) => (
              <li key={type}>
                <button onClick={() => handeleSolutionLinks(type)}>{type}</button>
              </li>
            ))}
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
