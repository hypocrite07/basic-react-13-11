import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as _ from 'lodash'
import './style.css'

const MIN_USER_LENGTH = 10
const MIN_COMMENT_LENGTH = 20

class CommentForm extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            user: {
                value: '',
                isValid: false
            },
            comment: {
                value: '',
                isValid: false
            },
            article: props.article,
        }
    }

    render() {
        const userIsValid = this.state.user.isValid
        const commentIsValid = this.state.comment.isValid
        return (
            <div>
                <span>Your comment:</span>
                <div>
                    Username: <input className={userIsValid ? '' : 'invalid'} value={this.state.user.value} onChange = {this.updateUser} />
                    Comment: <input className={commentIsValid ? '' : 'invalid'} value={this.state.comment.value} onChange = {this.updateComment}/>
                    <button onClick={this.addComment}>Add comment</button>
                </div>
            </div>
        )
    }

    updateComment = e => {
        const {value} = e.target
        const newComment = {
            value,
            isValid: value.length > MIN_COMMENT_LENGTH,
        }
        const newState = _.extend(this.state, {
            comment: newComment,
        })
        this.setState(newState)
    }

    updateUser = e => {
        const {value} = e.target
        const newUser = {
            value,
            isValid: value.length > MIN_USER_LENGTH,
        }
        const newState = _.extend(this.state, {
            user: newUser,
        })
        this.setState(newState)
    }

    addComment() {
        console.log('Comment was added!')
    }

}

export default CommentForm