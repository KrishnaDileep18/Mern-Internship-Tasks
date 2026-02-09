// function Navbar() {
//   return (
//     <nav className="navbar">
//       <h2>JobFinder</h2>
//       <button>Logout</button>
//     </nav>
//   );
// }

// export default Navbar;

import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2>JobFinder</h2>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;


