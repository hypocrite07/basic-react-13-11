//HOC === Higher Order Component === decorator
import React from 'react'

function articleListToggle(OriginalComponent, articles) {
    return class extends React.Component {
        state = {
            openArticleId: null,
            toggles: 0
        }

        // FIXME: doesnt work propely when we try to open some article while another is opened
        toggleOpenArticle = openArticleId => {
            const newToggle = ++this.state.toggles
            this.setState({openArticleId, newToggle})
        }

        render() {
            const articlesStates = articles.reduce((map, article) => {
                map[article.id] = article.id === this.state.openArticleId && this.state.toggles % 2 !== 0
                return map
            }, {})

            return <OriginalComponent {...this.props}
                                      {...this.state}
                                      articles = {articles}
                                      articlesStates = {articlesStates}
                                      toggleOpen = {this.toggleOpenArticle}/>
        }
    }
}

export default articleListToggle