import studious from "../assets/studious.png";
import "../styles/Sidebar.scss";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <img src={studious} alt="" />
        </li>
        <li>
          <a href="">Assignments</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Schedule</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
