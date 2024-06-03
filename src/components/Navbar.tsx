import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md py-4">
      <Link to="/" className="btn btn-ghost text-xl">
        DoWell Newsletter
      </Link>
    </div>
  );
}

export default Navbar;
