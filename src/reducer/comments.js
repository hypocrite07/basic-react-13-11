import { ADD_COMMENT, LOAD_ALL_COMMENTS, LOAD_COMMENT, START, SUCCESS } from '../constants'
import {normalizedComments} from '../fixtures'
import {arrToImmutableMap} from './utils'
import {Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    user: null,
    text: ''
})

const ReducerRecord = Record({
    entities: arrToImmutableMap(normalizedComments, CommentRecord),
    loading: false,
    loaded: false,
    error: null
})

export default (comments = new ReducerRecord(), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments
                .updateIn(['entities'], comments => comments.concat({
                    ...payload.comment,
                    id: randomId
                }))
        case LOAD_ALL_COMMENTS + START:
            return comments.set('loading', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return comments
                .set('loading', false)
                .set('entities', arrToImmutableMap(response, CommentRecord))
    }

    return comments
}