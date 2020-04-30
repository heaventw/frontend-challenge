import React from 'react';
import classnames from 'classnames';
import './index.scss';

export default ({
  id,
  type = 'text',
  label,
  prefixIcon,
  suffixIcon,
  className,
  inputClassName,
  ...props
}) => {
  const classes = classnames('input__label', className);
  const inputClasses = classnames(
    'input',
    {
      'input--with-prefix': prefixIcon,
      'input--with-suffix': prefixIcon,
      'input--with-prefix-and-suffix': prefixIcon && suffixIcon
    },
    inputClassName
  );
  return (
    <label htmlFor={id} className={classes} aria-label={label}>
      {prefixIcon ? (
        <span className="input__prefix-icon">{prefixIcon}</span>
      ) : null}
      <input
        type={type}
        placeholder={label}
        id={id}
        className={inputClasses}
        {...props}
      />
      {suffixIcon ? (
        <span className="input__suffix-icon">{suffixIcon}</span>
      ) : null}
    </label>
  );
};
