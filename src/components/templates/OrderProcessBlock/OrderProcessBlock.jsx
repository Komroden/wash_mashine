import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'

import { AdvantageCard } from '../../widjets/AdvantageCard/AdvantageCard'

export function OrderProcessBlock({ title, cards }) {
    return (
        <article className="order_process_block">
            <h3 className="simple_title">{title}</h3>
            <div className="order_process_cards">
                {map(
                    cards,
                    (el, index) => (
                        <AdvantageCard
                            key={el.id}
                            htmlText={el.htmlText}
                            title={el.title}
                            number={index + 1}
                            className="order_process_card"
                        />
                    ),
                ) }
            </div>
        </article>
    )
}
OrderProcessBlock.propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
}
