import React from 'react'
import PropTypes from 'prop-types'
import { Rate } from 'antd'
import moment from 'moment'

import reviewImgOne from '../../../mock/img/review_img_1.png'
import reviewImgTwo from '../../../mock/img/review_img_2.png'
import reviewImgThree from '../../../mock/img/review_img_3.png'

export function ReviewItem({ userName, rating, date, reviewText, img, className }) {
    let image

    switch (img) {
        case '1':
            image = reviewImgOne

            break
        case '2':
            image = reviewImgTwo

            break
        case '3':
            image = reviewImgThree

            break
        default:
            image = reviewImgOne
    }

    return (
        <article className={`review_item ${className}`}>
            {/* eslint-disable-next-line global-require,import/no-dynamic-require */}
            <img alt="review_img" src={image} className="review_img" />
            <div className="user_info">
                <span className="user_first_letter">{userName[0].toUpperCase()}</span>
                <span className="user_name">{userName}</span>
            </div>
            <span className="review_rating">
                <Rate disabled value={rating} rootClassName="review_rating_rate" />
                <span className="rating_date">{moment(date).format('DD.MM.YYYY')}</span>
            </span>
            <p className="review_text">
                {reviewText}
            </p>
        </article>
    )
}
ReviewItem.propTypes = {
    img: PropTypes.string,
    userName: PropTypes.string,
    rating: PropTypes.number,
    date: PropTypes.string,
    reviewText: PropTypes.string,
    className: PropTypes.string,
}
