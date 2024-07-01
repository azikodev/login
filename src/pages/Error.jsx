import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
function Error() {
  return (
    <>
      <Navbar />
      <div id="notfound">
        <div class="notfound">
          <h2 className="font-sans uppercase text-center text-[46px] font-[900] mb-[-50px]">
            We are sorry, Page not found!
          </h2>
          <div class="notfound-404">
            <h1 className="font-[900] text-center text-[#ececec]  text-[276px]">
              404
            </h1>
          </div>
          <p className="text-[20px] font-[700] text-center mt-[-50px] mb-[50px]">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <Link to="/" className="flex items-center justify-center">
            <button className="mt-[20px] text-center btn btn-outline ">
              Back To Homepage
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error;
