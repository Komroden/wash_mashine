import React from 'react'
import PropTypes from 'prop-types'

export function LinkButton({ label, url, type = 'primary' }) {
    return (
        <a href={url} className={`button ${type}`}>
            {label}
        </a>
    )
}
LinkButton.propTypes = {
    label: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
}
