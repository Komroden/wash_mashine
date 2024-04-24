import React from 'react'
import PropTypes from 'prop-types'

import { LinkButton } from '../../controls/LinkButton/LinkButton'

export function SimpleInfoBlock({ className, title, subtitle, withButton = false }) {
    return (
        <article className={className}>
            <div className="info">
                <p className="title">{title}</p>
                <p className="subtitle">{subtitle}</p>
            </div>
            {withButton && <LinkButton label="ЗАКАЗАТЬ" url="some" type="secondary" />}
        </article>
    )
}
SimpleInfoBlock.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    withButton: PropTypes.bool,
}
