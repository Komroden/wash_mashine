import React from 'react'
import PropTypes from 'prop-types'

export function AdvantageCard({ number, title }) {
    return (
        <article className="advantage_card">
            <span className="advantage_card_number">{number}</span>
            <p className="advantage_card_info">
                {title}
            </p>
        </article>
    )
}
AdvantageCard.propTypes = {
    number: PropTypes.string,
    title: PropTypes.string,
}
