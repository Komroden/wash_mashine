import React, { useState } from 'react'
import PropTypes from 'prop-types'

import feedbackLogo from '../../../mock/img/feedback_logo.png'
import { PrivacyPolicy } from '../../widjets/PrivacyPolicy/PrivacyPolicy'
import { Input } from '../../controls/Input/Input'
import { SubmitButton } from '../../controls/Button/Button'

export function FeedbackBlock({ title, subtitle }) {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
    })
    const handleChange = (key, value) => {
        setFormData(prev => ({
            ...prev,
            [key]: value,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <article className="feedback_block">
            <div className="title_block">
                <h1 className="title">{title}</h1>
                <h2 className="subtitle">{subtitle}</h2>
            </div>
            <form className="feedback_form">
                <Input id="name" value={formData.name} onChange={handleChange} className="feedback_input" placeholder="Ваше имя" type="text" />
                <Input id="number" value={formData.number} onChange={handleChange} className="feedback_input" placeholder="Ваш телефон" type="text" />
                <SubmitButton onClick={handleSubmit} className="feedback_button" label="ОТПРАВИТЬ ЗАЯВКУ" />
                <PrivacyPolicy className="feedback_policy" />
            </form>
            <img alt="logo" src={feedbackLogo} className="feedback_logo" />
        </article>
    )
}
FeedbackBlock.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}
