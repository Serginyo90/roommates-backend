import i18next from 'i18next';
import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import {
  Select as SelectUI,
  FormControl,
  InputLabel,
  FormHelperText,
  MenuItem,
} from '@material-ui/core';

interface ISelectProps {
  input: any;
  meta?: any;
  label?: any;
  options?: any;
  getKey?: any;
  getLabel?: any;
  getValue?: any;
  value?: any;
  className: string;
}

const Select: React.FC<ISelectProps> = ({
  input,
  meta = {
    touched: false,
    error: null,
  },
  label,
  options,
  getKey,
  getLabel,
  getValue,
  value,
  ...custom
}) => {
  const error = meta.touched && meta.error;
  return (
    <FormControl fullWidth error={!!error}>
      {label && <InputLabel id={`${input.name}-label`}>{label}</InputLabel>}
      <SelectUI
        autoWidth
        label={label}
        {...input}
        {...custom}
      >
        {options.map(option => (
          <MenuItem key={getKey(option)} value={getValue(option)} style={{ }}>
            {getLabel(option)}
          </MenuItem>
        ))}
      </SelectUI>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

Select.defaultProps = {
  getLabel: option => i18next.t(`form:${(option && option.label ? option.label : option)}`),
  getValue: option => (option && option.value ? option.value : option),
  getKey: option => (option && option.key ? option.key : uniqueId()),
};

Select.propTypes = {
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }),
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Select;
