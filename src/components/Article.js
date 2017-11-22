import React, {Component, PureComponent} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import ToggleTrait from '../decorators/ToggleOpenTrait'

class Article extends ToggleTrait {

    constructor(props) {
        super(props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }

    componentDidCatch(err) {
        this.setState({
            error: 'can`t display an article'
        })
    }
/*

    shouldComponentUpdate(nextProps, nextState) {
        return !Object.keys(nextProps).every(prop => this.props[prop] === nextProps[prop])
    }
*/

    render() {
        console.log('---', 'rendering article')
        if (this.state.error) return <h1>{this.state.error}</h1>

        const {article, isOpen, toggleOpen} = this.props
        const body = isOpen && (
            <div>
                <section>{article.text}</section>
                <CommentList comments = {article.comments}/>
            </div>
        )
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={() => toggleOpen(article.id)}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        comments: PropTypes.array,
        date: PropTypes.string.isRequired
    }),
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}


export default Article