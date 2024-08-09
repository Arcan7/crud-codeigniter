import React from "react";

const TextFields = ({ type, placeholder, setValue, label, value }) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <input
        type={type}
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default TextFields;
