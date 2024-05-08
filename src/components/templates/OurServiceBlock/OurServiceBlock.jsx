import React from 'react'
import PropTypes from 'prop-types'

import cards from '../../../mock/serviceCards.json'
import { InfoCards } from '../../widjets/InfoCards/InfoCards'
import { LinkButton } from '../../controls/LinkButton/LinkButton'

export function OurServiceBlock({ title }) {
    return (
        <article className="our_service_block">
            <h3 className="title">{title}</h3>
            <InfoCards cards={cards} />
            <LinkButton className="trade_in_button" label="Trade-in" url="/some" />
            <svg width="26" className="trade_in_arrow" height="8" viewBox="0 0 26 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.3536 4.35355C25.5488 4.15829 25.5488 3.84171 25.3536 3.64645L22.1716 0.464466C21.9763 0.269204 21.6597 0.269204 21.4645 0.464466C21.2692 0.659728 21.2692 0.976311 21.4645 1.17157L24.2929 4L21.4645 6.82843C21.2692 7.02369 21.2692 7.34027 21.4645 7.53553C21.6597 7.7308 21.9763 7.7308 22.1716 7.53553L25.3536 4.35355ZM0 4.5H25V3.5H0V4.5Z" />
            </svg>
        </article>
    )
}
OurServiceBlock.propTypes = {
    title: PropTypes.string,
}
