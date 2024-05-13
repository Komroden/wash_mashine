import React from 'react'

import { Header } from '../../components/templates/Header/Header'
import headerLinks from '../../mock/headerLinks.json'
import footerLinks from '../../mock/footerLinks.json'
import advantagesCards from '../../mock/orderProcessCards.json'
import reviews from '../../mock/reviews.json'
import { MainInfoBlock } from '../../components/templates/MainInfoBlock/MainInfoBlock'
import { OurServiceBlock } from '../../components/templates/OurServiceBlock/OurServiceBlock'
import { OrderProcessBlock } from '../../components/templates/OrderProcessBlock/OrderProcessBlock'
import { FeedbackBlock } from '../../components/templates/FeedbackBlock/FeedbackBlock'
import { Footer } from '../../components/templates/Footer/Footer'
import { Reviews } from '../../components/templates/Reviews/Reviews'

function App() {
    return (
        <div className="main">
            <Header links={headerLinks} />
            <MainInfoBlock title="Надежная поддержка" subtitle="для стиральных машин" />
            <OurServiceBlock title="Наши товары" />
            <OrderProcessBlock title="Как проходит подбор" cards={advantagesCards} />
            <FeedbackBlock title="Оставьте заявку и получите скидку 10% на первый ремонт" subtitle="Заполните форму ниже и мы свяжемся с вами в течение нескольких минут" />
            <Reviews title="Отзывы клиентов" reviews={reviews} />
            <Footer links={footerLinks} title="iService" inn="756578457856" ogrnip="45786496596" orgName="ИП Название" />
        </div>
    )
}

export default App
