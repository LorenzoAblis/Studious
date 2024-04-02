import "../styles/FormInput.scss";

const FormInput = ({ label, onChange, type }) => {
  return (
    <div className="form-input">
      <label>{label}</label>
      <input type={type} onChange={onChange} />
    </div>
  );
};

export default FormInput;
