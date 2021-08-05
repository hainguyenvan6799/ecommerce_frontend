import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { Label } from "@material-ui/icons";
import { FormGroup } from "@material-ui/core";

SelectedField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  placeholder: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
};

SelectedField.defaultProps = {
  label: "",
  placeholder: "",
  options: [],
};

function SelectedField(props) {
  const { field, form, label, placeholder, options } = props;

  const { name, value } = field;

  const selectedOption = options.find((option) => option.value === value);

  const { errors, touched } = form;

  const handleSelectedOption = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    // event.target.name event.target.value
    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectedOption}
        placeholder={placeholder}
        options={options}
      />
    </FormGroup>
  );
}

export default SelectedField;
