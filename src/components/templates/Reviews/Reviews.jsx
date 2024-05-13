import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd'

import { ReviewItem } from '../../widjets/ReviewItem/ReviewItem'

export function Reviews({ title, reviews }) {
    return (
        <div className="reviews">
            <h3 className="simple_title">{title}</h3>
            <div className="reviews_carousel">
                <Carousel slidesToShow={3} adaptiveHeight arrows>
                    {reviews.map(el => (
                        <ReviewItem
                            key={el.id}
                            img={el.img}
                            date={el.date}
                            rating={el.rating}
                            userName={el.userName}
                            reviewText={el.reviewText}
                        />
                    ))}
                </Carousel>
            </div>

        </div>
    )
}
Reviews.propTypes = {
    reviews: PropTypes.array,
    title: PropTypes.string,
}
