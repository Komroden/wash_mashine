import React from 'react'
import PropTypes from 'prop-types'

export function Input({ id, placeholder, type = 'primary', className, value, onChange }) {
    return (
        <input value={value} onChange={e => onChange(id, e.target.value)} className={`input ${className}`} placeholder={placeholder} type={type} />
    )
}
Input.propTypes = {
    id: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
}
