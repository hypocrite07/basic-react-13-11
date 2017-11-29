import {
    APPLY_ARTICLE_FILTER_BY_DATE,
    APPLY_ARTICLE_FILTER_BY_INDEX,
    APPLY_ARTICLE_FILTER_BY_USER
} from '../constants'

const defaultFilter = {
    dateFrom: null,
    dateTo: null,
    selected: [],
    user: ''
}

export default (filterState = defaultFilter, action) => {
    const {type, payload} = action

    switch(type) {
        case APPLY_ARTICLE_FILTER_BY_DATE:
            return {
                selected: payload.selected,
                dateFrom: payload.dateFrom,
                dateTo: payload.dateTo,
                user: payload.user,
            };
        case APPLY_ARTICLE_FILTER_BY_INDEX:
            return {
                selected: payload.selected,
                user: payload.user,
                dateFrom: payload.dateFrom,
                dateTo: payload.dateTo,
            };
        case APPLY_ARTICLE_FILTER_BY_USER:
            return {
                selected: payload.selected,
                user: payload.user,
                dateFrom: payload.dateFrom,
                dateTo: payload.dateTo,
            }
        default:
            return filterState
    }
}