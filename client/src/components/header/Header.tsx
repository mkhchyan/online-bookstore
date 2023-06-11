import { Link } from "react-router-dom";
import Button from "../button/Button";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="border py-3 px-6">
        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="ml-2 font-bold text-rose-700 text-2xl">
              Books.am
            </span>
          </div>

          <div className="ml-2 flex">
            <Link
              to="/signup"
              className="ml-2 flex cursor-pointer text-white items-center gap-x-1 rounded-lg border py-2 px-4 bg-rose-700"
            >
              Sign Up
            </Link>

            <Button className="ml-2 flex cursor-pointer hover:text-white items-center gap-x-1 rounded-lg border py-2 px-4 hover:bg-rose-700">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
