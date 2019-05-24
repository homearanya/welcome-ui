import React from 'react'
import { bool, elementType, func, number, string } from 'prop-types'

import { StyledInputCheckbox } from './styles'

export const InputCheckbox = ({
  checked,
  disabled,
  name,
  onBlur,
  onChange,
  onFocus,
  order,
  Component = StyledInputCheckbox,
  type = 'checkbox',
  value
}) => (
  <Component checked={checked} disabled={disabled} order={order} type={type}>
    <input
      defaultChecked={checked}
      disabled={disabled}
      id={name}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      type="checkbox"
      value={value}
    />
  </Component>
)

InputCheckbox.propTypes = {
  Component: elementType,
  checked: bool,
  disabled: bool,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  order: number,
  type: string,
  value: string
}