import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="border-b py-3 px-6">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link to='/' className="ml-2 font-bold text-rose-700 text-4xl">
              Books.am
            </Link>
          </div>

          <div className="ml-2 flex">
            <Link
              to="/signup"
              className="ml-2 flex cursor-pointer text-white items-center gap-x-1 rounded-lg border py-2 px-4 bg-rose-700"
            >
              Sign Up
            </Link>

            <Link to='/login' className="ml-2 flex cursor-pointer hover:text-white items-center gap-x-1 rounded-lg border py-2 px-4 hover:bg-rose-700">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
