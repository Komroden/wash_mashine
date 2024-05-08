import React from 'react'

import { Header } from '../../components/templates/Header/Header'
import headerLinks from '../../mock/headerLinks.json'
import { MainInfoBlock } from '../../components/templates/MainInfoBlock/MainInfoBlock'
import { OurServiceBlock } from '../../components/templates/OurServiceBlock/OurServiceBlock'

function App() {
    return (
        <div className="main">
            <Header links={headerLinks} />
            <MainInfoBlock title="Надежная поддержка" subtitle="для стиральных машин" />
            <OurServiceBlock title="Наши товары" />
        </div>
    )
}

export default App
