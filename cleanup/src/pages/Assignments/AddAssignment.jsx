import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { db } from "/firebaseConfig";
import { ref, set } from "firebase/database";

import Modal from "../../common/components/Modal";

const AddAssignment = ({ showAddAssignment, setShowAddAssignment }) => {
  const { currentUser } = useContext(AuthContext);
  const [newAssignment, setNewAssignment] = useState({});

  const handleClose = () => {
    setNewAssignment({});
    setShowAddAssignment(false);
  };

  const handleAdd = async () => {
    if (newAssignment.title) {
      await set(
        ref(
          db,
          `users/${currentUser.displayName}/assignments/` + newAssignment.title
        ),
        {
          title: newAssignment.title || "",
          className: newAssignment.class || "",
          dueDate: newAssignment.dueDate || "",
        }
      );
    }

    setNewAssignment({});
    setShowAddAssignment({});
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewAssignment((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  return (
    <Modal
      key={showAddAssignment ? "show" : "hide"}
      showModal={showAddAssignment}
      setShowModal={setShowAddAssignment}
      title="Add Item"
    >
      <div className="add-item-form">
        <div className="form-group">
          <h3>Title</h3>
          <input
            type="text"
            name="title"
            value={newAssignment.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <h3>Class</h3>
          <input
            type="text"
            name="class"
            value={newAssignment.class}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <h3>Due Date</h3>
          <input
            type="text"
            name="dueDate"
            value={newAssignment.dueDate}
            onChange={handleChange}
          />
        </div>
        <div className="footer">
          <button onClick={handleAdd}>
            <i className="bi bi-check-lg"></i>
          </button>
        </div>
      </div>
    </Modal>
  );
};

AddAssignment.propTypes = {
  showAddAssignment: PropTypes.bool.isRequired,
  setShowAddAssignment: PropTypes.func.isRequired,
};

export default AddAssignment;
