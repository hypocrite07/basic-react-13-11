import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import {connect} from 'react-redux'
import {loadCommentsByArticle} from './../AC'
import {commentLoadingSelector, commentsSelector} from './../selectors'
import Loader from './common/Loader'

class CommentList extends Component {

    componentWillReceiveProps({isOpen, loading, loadCommentsByArticle}) {

        const {id} = this.props.article
        if (!this.props.isOpen && isOpen && !loading) loadCommentsByArticle(id)
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {article: {id}, isOpen, comments, loading} = this.props
        if (!isOpen) return null
        if (loading) return <Loader/>

        const body = comments.length ? (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment id = {comment.id} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm articleId = {id} />
            </div>
        )
    }
}

CommentList.propTypes = {
    article: PropTypes.object.isRequired,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

const mapStateToProps = state => {
    return {
        comments: commentsSelector(state),
        loading: commentLoadingSelector(state)
    }
}

const mapDispatchToProps = {
    loadCommentsByArticle
}

export default connect(mapStateToProps, {loadCommentsByArticle})(toggleOpen(CommentList))