import React from 'react'
import PropTypes from 'prop-types'
import { Rate } from 'antd'
import moment from 'moment'

export function ReviewItem({ userName, rating, date, reviewText, img, className }) {
    return (
        <article className={`review_item ${className}`}>
            <img alt="review_img" src={img} className="review_img" />
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
    userName: PropTypes.string,
    rating: PropTypes.number,
    date: PropTypes.string,
    reviewText: PropTypes.string,
    img: PropTypes.string,
    className: PropTypes.string,
}
