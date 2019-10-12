import React from 'react';
import PropTypes from 'prop-types';
import { Select, MenuItem } from '@material-ui/core';

function KSelect(props) {
  const [option, setOption] = React.useState({
    value: props.default.value,
    label: props.default.label,
  });

  const handleChange = e => {
    const value = {
      label: e.target.label,
      value: e.target.value,
    };
    setOption(value);
    props.onChange(value);
  };

  return (
    <Select
      value={option.value}
      onChange={handleChange}
      name={props.name}
      className={props.className}
      inputProps={{ ...props.inputProps }}
    >
      {props.options.map(item => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
}

KSelect.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  inputProps: PropTypes.object,
  default: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default KSelect;
