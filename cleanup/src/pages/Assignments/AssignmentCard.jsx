import PropTypes from "prop-types";

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

export default AssignmentCard;
