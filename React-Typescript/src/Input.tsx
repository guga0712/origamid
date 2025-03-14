import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  marginBottom: string;
  id: string;
};

const Input = ({ label, marginBottom, id, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom: marginBottom }}>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} type="text" {...props} />
    </div>
  );
};

export default Input;
