import React from 'react'
import ArticleList from './ArticleList'
import PropTypes from 'prop-types'
import articleListToggle from '../decorators/accordion'

function App({ articles }) {
    const ArticleToggleList = articleListToggle(ArticleList, articles)
    return (
        <div>
            <h1>App name</h1>
            <ArticleToggleList/>
        </div>
    )
}

App.propTypes = {
    articles: PropTypes.array
}

export default App