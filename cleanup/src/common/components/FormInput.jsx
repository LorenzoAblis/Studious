import PropTypes from "prop-types";

import "../styles/FormInput.scss";

const FormInput = ({ label, onChange, type, name }) => {
  return (
    <div className="form-input">
      <label>{label}</label>
      <input name={name} type={type} onChange={onChange} />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormInput;
