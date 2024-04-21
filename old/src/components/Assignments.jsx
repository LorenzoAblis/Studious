import { useState } from "react";

import AssignmentCard from "./AssignmentCard";

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
