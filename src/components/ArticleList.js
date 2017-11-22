import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import AccordionTrait from '../decorators/AccordionTrait'

export default class ArticleList extends Component {

    render() {
        const {articlesStates, toggleOpen} = this.props
        const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {articlesStates[article.id]}
                     toggleOpen = {toggleOpen}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array
}