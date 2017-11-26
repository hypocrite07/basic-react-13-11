import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as _ from 'lodash'

class CommentForm extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            user: '',
            comment: '',
            article: props.article
        }
    }

    render() {
        return (
            <div>
                <span>Your comment:</span>
                <div>
                    Username: <input value={this.state.user} onChange = {this.updateUser} />
                    Comment: <input value={this.state.comment} onChange = {this.updateComment}/>
                    <button onClick={this.addComment}>Add comment</button>
                </div>
            </div>
        )
    }

    updateComment = e => {
        const {value} = e.target
        const newState = _.extend(this.state, {
            comment: value,
        })
        this.setState(newState)
    }

    updateUser = e => {
        const {value} = e.target
        const newState = _.extend(this.state, {
            user: value,
        })
        this.setState(newState)
    }

    addComment() {
        console.log('Comment was added!')
    }

}

export default CommentForm