import { useState } from "react";

import AssignmentCard from "./AssignmentCard";
import AddAssignment from "./AddAssignment";
import "../styles/Assignments.scss";

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

  const [showAddAssignment, setShowAddAssignment] = useState(false);

  const toggleDropdown = (index) => {
    const newDropdownStates = Array(dropdownStates.length).fill(false);
    newDropdownStates[index] = !dropdownStates[index];
    setDropdownStates(newDropdownStates);
  };

  return (
    <section className="assignments">
      <h1>Assignments</h1>
      <button onClick={() => setShowAddAssignment(true)}>Add</button>
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

      <AddAssignment
        showAddAssignment={showAddAssignment}
        setShowAddAssignment={setShowAddAssignment}
      />
    </section>
  );
};

export default Assignments;
