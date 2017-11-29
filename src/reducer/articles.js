import { DELETE_ARTICLE, RETRIEVE_ARTICLES_BY_FILTER } from '../constants'
import defaultArticles from '../fixtures'

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id)
        case RETRIEVE_ARTICLES_BY_FILTER:
            console.log(payload)
            if (!payload.user && !payload.dateTo && !payload.dateFrom && (!payload.selected || payload.selected.length === 0)) {
                return defaultArticles
            }

            const userFilter = (article) => (article.comments || []).some(comment => comment.length > 0 && comment.user.indexOf(payload.user) > -1)
            const idFilter = (article) => (payload.selected || []).includes(article.id)
            // TODO: update date filter
            const dateFilter = (article) => false

            const result = articlesState.filter(article => {
                return userFilter(article) || idFilter(article)
            })

            return result
    }

    return articlesState
}