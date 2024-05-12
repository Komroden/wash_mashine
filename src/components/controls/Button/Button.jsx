import React from 'react'
import PropTypes from 'prop-types'

export function SubmitButton({ label, className, onClick }) {
    return (
        <button onClick={onClick} aria-label="submit" className={`button ${className}`} type="submit">
            {label}
        </button>
    )
}
SubmitButton.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
}
