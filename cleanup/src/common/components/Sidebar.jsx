import PropTypes from "prop-types";
import { studious_logo } from "../../assets";
import "../styles/Sidebar.scss";

const Sidebar = ({ currentUser }) => {
  return (
    <nav className="sidebar d-flex">
      <ul>
        <li>
          <img src={studious_logo} alt="" />
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
            <i className="bi bi-gear-fill"></i>
            {currentUser.displayName}
          </a>
        </li>
      </ul>
    </nav>
  );
};

Sidebar.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default Sidebar;
