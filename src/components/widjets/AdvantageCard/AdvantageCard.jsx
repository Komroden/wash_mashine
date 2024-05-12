import React from 'react'
import PropTypes from 'prop-types'

export function AdvantageCard({ number, title, htmlText, className = '' }) {
    return (
        <article className={`advantage_card ${className}`}>
            <span className="advantage_card_number">{number}</span>
            <p className="advantage_card_info">
                {title}
            </p>
            {htmlText && (
                // eslint-disable-next-line react/no-danger
                <p className="advantage_card_text" dangerouslySetInnerHTML={{ __html: htmlText }} />
            )}
        </article>
    )
}
AdvantageCard.propTypes = {
    number: PropTypes.number,
    title: PropTypes.string,
    htmlText: PropTypes.string,
    className: PropTypes.string,
}
