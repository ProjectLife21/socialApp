import { Link } from "react-router-dom";
import { FaMessage } from "react-icons/fa6";
import { MdAddAlert } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar justify-center sticky top-0 bg-blue-600 text-white z-[99999]">
      <div className="container mx-auto">
        <div className="flex-1 ">
          <Link
            to="/"
            className="hidden text-3xl hover:bg-transparent lg:block"
          >
            SocialApp
          </Link>
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1  text-center ">
          <Link to="/" className="text-3xl lg:hidden hover:bg-transparent">
            SocialApp
          </Link>
          <div className="hidden lg:flex justify-between gap-5 ">
            <form className="flex-1 ">
              <label className="input input-bordered flex items-center gap-2 h-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="black"
                  className="h-6 w-6 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="text"
                  className="grow text-black"
                  placeholder="Search for friend, post or video"
                />
              </label>
            </form>
            <div className="flex items-center gap-5">
              <Link to="/">Homepage</Link>
              <Link to="/">Timeline</Link>
            </div>
          </div>
        </div>
        <div className="flex-1  text-right flex items-center justify-end gap-5">
          <div className="hidden lg:flex gap-2 items-center justify-center">
            <div className="indicator">
              <span className="indicator-item badge bg-red-600 text-white left-[0.5rem] top-[0.1rem] w-2 border-transparent">
                1
              </span>
              <div className="grid h-8 w-8 place-items-center">
                <FaUser className="text-xl" />
              </div>
            </div>
            <div className="indicator">
              <span className="indicator-item badge bg-red-600 text-white left-[0.5rem] top-[0.1rem] w-2 border-transparent">
                1
              </span>
              <div className="grid h-8 w-8 place-items-center">
                <FaMessage className="text-xl" />
              </div>
            </div>
            <div className="indicator">
              <span className="indicator-item badge bg-red-600 text-white left-[0.5rem] top-[0.1rem] w-2 border-transparent">
                1
              </span>
              <div className="grid h-8 w-8 place-items-center">
                <MdAddAlert className="text-xl" />
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
