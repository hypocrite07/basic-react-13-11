import { ADD_COMMENT_INTO_ARTICLE } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'

const commentsMap = defaultComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (state = commentsMap, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT_INTO_ARTICLE:
            const {user, text, uuid} = payload
            const newState = [...state]
            newState.push({
                user,
                text,
                id: uuid
            })
            return newState;
        default:
            return state
    }
}