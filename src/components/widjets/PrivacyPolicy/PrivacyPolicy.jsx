import React from 'react'
import PropTypes from 'prop-types'

export function PrivacyPolicy({ className }) {
    const handlerOpen = () => {

    }

    return (
        <div className={`privacy_policy ${className}`}>
            Нажимая кнопку “Отправить” Вы соглашаетесь
            <br />

            с &nbsp;
            <span onClick={handlerOpen} className="privacy_policy_href">
                Политикой обработки персональных данных
            </span>
        </div>
    )
}
PrivacyPolicy.propTypes = {
    className: PropTypes.string,
}
