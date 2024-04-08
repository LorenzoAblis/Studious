import PropTypes from "prop-types";
import { useState } from "react";

import AssignmentCard from "./AssignmentCard";
import AddAssignment from "./AddAssignment";
import "../styles/Assignments.scss";

const Assignments = ({ assignments }) => {
  // Check if assignments is undefined, if so, initialize it as an empty object
  if (!assignments) {
    assignments = {};
  }

  const assignmentIds = Object.keys(assignments);
  const [dropdownStates, setDropdownStates] = useState(
    Array(assignmentIds.length).fill(false)
  );
  const [showAddAssignment, setShowAddAssignment] = useState(false);

  const handleOutsideClick = (event) => {
    if (
      !event.target.closest(".dropdown") &&
      !event.target.closest(".dropdown-button")
    ) {
      setDropdownStates(Array(assignmentIds.length).fill(false));
    }
  };

  const toggleDropdown = (index) => {
    const newDropdownStates = Array(dropdownStates.length).fill(false);
    newDropdownStates[index] = !dropdownStates[index];
    setDropdownStates(newDropdownStates);
  };

  return (
    <section className="assignments" onClick={handleOutsideClick}>
      <h1>Assignments</h1>
      <button onClick={() => setShowAddAssignment(true)}>Add</button>
      {assignmentIds.length === 0 ? (
        <p>No assignments available</p>
      ) : (
        <div className="assignment-cards">
          {assignmentIds.map((assignmentId, index) => (
            <AssignmentCard
              key={assignmentId}
              {...assignments[assignmentId]}
              toggleDropdown={() => toggleDropdown(index)}
              showDropdown={dropdownStates[index]}
            />
          ))}
        </div>
      )}

      <AddAssignment
        showAddAssignment={showAddAssignment}
        setShowAddAssignment={setShowAddAssignment}
      />
    </section>
  );
};

Assignments.propTypes = {
  assignments: PropTypes.object,
};

export default Assignments;
