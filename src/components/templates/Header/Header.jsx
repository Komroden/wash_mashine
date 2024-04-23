import React from 'react'
import { map } from 'lodash'
import PropTypes from 'prop-types'

import { LinkButton } from '../../controls/LinkButton/LinkButton'

export function Header({ links = [] }) {
    return (
        <nav className="header">
            <div className="header_logo">
                <span>WashGuard</span>
            </div>
            <div className="header_links">
                {map(links, el => <LinkButton key={el.id} label={el.label} url={el.url} />)}

            </div>
            <div className="header_phone">
                + 7 927 766 5000
            </div>

        </nav>
    )
}
Header.propTypes = {
    links: PropTypes.array,
}
