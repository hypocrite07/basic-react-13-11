import React, { Component } from 'react'
import './style.css'
import {connect} from 'react-redux'
import {addCommentIntoArticle} from '../../AC'

class CommentForm extends Component {
    static propTypes = {
    };

    state = {
        user: '',
        text: ''
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                user: <input value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                comment: <textarea value = {this.state.text}
                                onChange = {this.handleChange('text')}
                                className = {this.getClassName('text')} />
                <input type = "submit" value = "submit" disabled = {!this.isValidForm()}/>
            </form>
        )
    }

    handleSubmit = ev => {
        const {user, text} = this.state
        addCommentIntoArticle({
            user,
            text
        })
        ev.preventDefault()
    }

    isValidForm = () => ['user', 'text'].every(this.isValidField)

    isValidField = type => this.state[type].length >= limits[type].min

    getClassName = type => this.isValidField(type) ? '' : 'form-input__error'

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
    }
}

const limits = {
    user: {
        min: 10,
        max: 100
    },
    text: {
        min: 20,
        max: 100
    }
}

const createMapStateToProps = () => {
    const commentSelector = createCommentSelector()

    return (state, ownProps) => ({
        comment: commentSelector(state, ownProps)
    })
}

export default connect(null, {
    addCommentToArticle: addCommentIntoArticle
})(CommentForm)