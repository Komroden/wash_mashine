import React from 'react'

import { Header } from '../../components/templates/Header/Header'
import headerLinks from '../../mock/headerLinks.json'
import { MainInfoBlock } from '../../components/templates/MainInfoBlock/MainInfoBlock'

function App() {
    return (
        <div className="main">
            <Header links={headerLinks} />
            <MainInfoBlock title="Надежная поддержка" subtitle="для стиральных машин" />
        </div>
    )
}

export default App
