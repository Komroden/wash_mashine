import React from 'react'

import { Header } from '../../components/templates/Header/Header'
import headerLinks from '../../mock/headerLinks.json'
import advantagesCards from '../../mock/orderProcessCards.json'
import { MainInfoBlock } from '../../components/templates/MainInfoBlock/MainInfoBlock'
import { OurServiceBlock } from '../../components/templates/OurServiceBlock/OurServiceBlock'
import { OrderProcessBlock } from '../../components/templates/OrderProcessBlock/OrderProcessBlock'
import { FeedbackBlock } from '../../components/templates/FeedbackBlock/FeedbackBlock'

function App() {
    return (
        <div className="main">
            <Header links={headerLinks} />
            <MainInfoBlock title="Надежная поддержка" subtitle="для стиральных машин" />
            <OurServiceBlock title="Наши товары" />
            <OrderProcessBlock title="Как проходит подбор" cards={advantagesCards} />
            <FeedbackBlock title="Оставьте заявку и получите скидку 10% на первый ремонт" subtitle="Заполните форму ниже и мы свяжемся с вами в течение нескольких минут" />
        </div>
    )
}

export default App
