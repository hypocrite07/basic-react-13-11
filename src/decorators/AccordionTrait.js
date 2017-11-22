import React from 'react'

class AccordionTrait extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openArticleId: null,
            toggles: 0
        }
    }

    toggleOpenArticle = openArticleId => {
        const newToggles = ++this.state.toggles
        return this.setState({ openArticleId, newToggles})
    }

    isOpen = (openArticleId) => this.state.openArticleId === openArticleId && this.state.toggles % 2 !== 0
}

export default AccordionTrait