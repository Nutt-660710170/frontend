import "./styles/Navbar.css";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">MyProject</div>
      <ul className="menu">
        <li><a href="/">หน้าหลัก</a></li>
        <li><a href="/movies">ภาพยนตร์</a></li>
        <li><a href="/cinema">โรงภาพยนตร์</a></li>
      </ul>
      <div className="profile">
        <FaUserCircle size={30} />
      </div>
    </nav>
  );
}


export default Navbar;
