import "./form-input.styles.scss";

const FormInput = ({ label, inputOptions }) => {
  return (
    <div className="group">
      <input className="form-input" {...inputOptions} />
      {label && (
        <label
          class={`${
            inputOptions.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
