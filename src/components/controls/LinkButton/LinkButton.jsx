import React from 'react'
import PropTypes from 'prop-types'

export function LinkButton({ label, url, type = 'primary', className }) {
    return (
        <a href={url} className={`button ${type} ${className}`}>
            {label}
        </a>
    )
}
LinkButton.propTypes = {
    label: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
}
