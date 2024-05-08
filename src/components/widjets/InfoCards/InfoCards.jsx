import React from 'react'
import PropTypes from 'prop-types'

import { InfoCard } from '../InfoCard/InfoCard'

export function InfoCards({ cards }) {
    const leftCards = cards.slice(0, 3)
    const rightCard = cards.slice(-1)

    return (
        <div className="cards">
            <div className="left_cards">
                {leftCards.map(item => <InfoCard key={item.id} id={item.id} title={item.title} />)}

            </div>
            <div className="right_cards">
                {rightCard.map(item => <InfoCard key={item.id} id={item.id} title={item.title} />)}
            </div>
        </div>
    )
}
InfoCards.propTypes = {
    cards: PropTypes.array,
}
