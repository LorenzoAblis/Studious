import studious from "../../../assets/studious.png";
import "../styles/Sidebar.scss";

const Sidebar = () => {
  return (
    <nav className="sidebar d-flex">
      <ul>
        <li>
          <img src={studious} alt="" />
        </li>
        <li>
          <a href="">
            <i className="bi bi-motherboard-fill"></i>Dashboard
          </a>
        </li>
        <li>
          <a href="">
            <i className="bi bi-list-task"></i>Assignments
          </a>
        </li>
        <li>
          <a href="">
            <i className="bi bi-calendar-fill"></i>Schedule
          </a>
        </li>
        <li>
          <a href="">
            <i className="bi bi-gear-fill"></i>Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
