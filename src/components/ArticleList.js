import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './common/Accordion'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from '../selectors'

class ArticleList extends Accordion {
    render() {
        console.log('---', 2)
        const {articles} = this.props
        if (!Object.keys(articles).length) return <h3>No Articles</h3>
        const articleElements = Object.keys(articles).map((id) => <li key={id}>
            <Article article={articles[id]}
                     isOpen={id === this.state.openItemId}
                     toggleOpen={this.toggleOpenItemMemoized(id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.object.isRequired
}

export default connect(state => {
    console.log('---', 0)
    return {
        articles: filtratedArticlesSelector(state)
    }
})(ArticleList)