import { useState } from "react";
import PropTypes from "prop-types";

import "../styles/Assignments.scss";

const AssignmentCard = ({
  title,
  className,
  dueDate,
  toggleDropdown,
  showDropdown,
}) => {
  const handleClick = () => {
    toggleDropdown();
  };

  return (
    <article className="assignment-card">
      <h2>{title}</h2>
      <h3>Class</h3>
      <p>{className}</p>
      <h3>Due Date</h3>
      <p>{dueDate}</p>
      <div className="assignment-card-button-group">
        <button className="complete">
          <i className="bi bi-check-lg"></i>
        </button>
        <div>
          <button onClick={handleClick}>
            <i className="bi bi-three-dots"></i>
          </button>
          {showDropdown && (
            <div className="dropdown">
              <div className="dropdown-button-group">
                <button>
                  <i className="bi bi-eye-fill"></i>Details
                </button>
                <button>
                  <i className="bi bi-pencil-square"></i>Edit
                </button>
                <button className="complete">
                  <i className="bi bi-check-lg"></i>Complete
                </button>
              </div>
              <button className="delete">
                <i className="bi bi-trash-fill"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

AssignmentCard.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  showDropdown: PropTypes.bool.isRequired,
};

const Assignments = () => {
  const assignmentsData = [
    {
      title: "Day 12 CW",
      className: "HPrecalculus",
      dueDate: "Wednesday, February 28",
    },
    {
      title: "Day 13 CW",
      className: "APrecalculus",
      dueDate: "Thursday, March 1",
    },
    {
      title: "Day 13 CW",
      className: "APrecalculus",
      dueDate: "Thursday, March 1",
    },
  ];
  const [dropdownStates, setDropdownStates] = useState(
    Array(assignmentsData.length).fill(false)
  );

  const toggleDropdown = (index) => {
    const newDropdownStates = Array(dropdownStates.length).fill(false);
    newDropdownStates[index] = !dropdownStates[index];
    setDropdownStates(newDropdownStates);
  };

  return (
    <section className="assignments">
      <h1>Assignments</h1>
      <div className="assignment-cards">
        {assignmentsData.map((assignment, index) => (
          <AssignmentCard
            key={index}
            {...assignment}
            toggleDropdown={() => toggleDropdown(index)}
            showDropdown={dropdownStates[index]}
          />
        ))}
      </div>
    </section>
  );
};

export default Assignments;
