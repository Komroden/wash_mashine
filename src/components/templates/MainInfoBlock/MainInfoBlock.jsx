import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'

import advantagesCards from '../../../mock/advantagesCards.json'
import advantagesLogo from '../../../mock/img/advantages_logo.png'
import { AdvantageCard } from '../../widjets/AdvantageCard/AdvantageCard'

export function MainInfoBlock({ title, subtitle }) {
    return (
        <article className="main_info_block">
            <div className="title_block">
                <h1 className="title">{title}</h1>
                <h2 className="subtitle">{subtitle}</h2>
            </div>
            <div className="advantages">
                <div className="advantages_cards">
                    {map(advantagesCards, el => <AdvantageCard key={el.id} title={el.title} number={el.id} />) }
                </div>
                <img className="advantages_logo" alt="advantages_logo" src={advantagesLogo} />
            </div>
        </article>
    )
}
MainInfoBlock.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}
