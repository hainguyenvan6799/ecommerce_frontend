import { FormGroup, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function InputField(props) {
  const { field, form, type, label, placeholder, disabled } = props;

  const { name } = field;

  const { errors, touched } = form;

  const showError = errors[name] && touched[name]; //boolean

  return (
    <FormGroup>
      {/* {label && <FormLabel for={name}>{label}</FormLabel>}
      <Input
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        error={showError}
      />
      <ErrorMessage name={name} /> */}
      <TextField
        error={showError ? true : false}
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        label={showError ? "Error" : label}
        helperText={showError ? errors[name] : null}
      />
    </FormGroup>
  );
}

export default InputField;
