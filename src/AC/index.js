import {
    INCREMENT, DELETE_ARTICLE,
    APPLY_ARTICLE_FILTER_BY_DATE,
    APPLY_ARTICLE_FILTER_BY_INDEX,
    RETRIEVE_ARTICLES_BY_FILTER,
    APPLY_ARTICLE_FILTER_BY_USER
} from '../constants'

export function increment() {
    const action = { type: INCREMENT }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function retrieveArticleByFilter(filter) {
    return {
        type: RETRIEVE_ARTICLES_BY_FILTER,
        payload: filter
    }
}

export function filterArticlesByDate(dateFrom, dateTo) {
    return {
        type: APPLY_ARTICLE_FILTER_BY_DATE,
        payload: {
            dateFrom,
            dateTo
        }
    }
}

export function filterArticlesByIndex(payload) {
    return {
        type: APPLY_ARTICLE_FILTER_BY_INDEX,
        payload
    }
}

export function filterArticlesByUserName(payload) {
    return {
        type: APPLY_ARTICLE_FILTER_BY_USER,
        payload
    }
}