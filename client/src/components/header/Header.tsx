import Button from "../button/Button";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="border py-3 px-6">
        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="ml-2 font-bold text-rose-700 text-2xl">Books.am</span>
          </div>

          <div className="ml-6 flex flex-1 gap-x-3">

            <input
              type="text"
              className="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm"
              value="Search..."
            />
          </div>

          <div className="ml-2 flex">
            <Button className="ml-2 flex cursor-pointer text-white items-center gap-x-1 rounded-lg border py-2 px-4 bg-rose-700">
              Sign Up
            </Button>

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
