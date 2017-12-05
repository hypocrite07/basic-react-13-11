import { DELETE_ARTICLE } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

const defaultArticlesMap = defaultArticles.reduce((prev, article) => ({
    ...prev,
    [article.id]: article
}), {})

export default (articlesState = defaultArticlesMap, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return Object.values(articlesState)
                .filter(article => article.id !== payload.id)
                .reduce((prev, article) => ({
                    ...prev,
                    [article.id]: article
                }), {})
    }

    return articlesState
}