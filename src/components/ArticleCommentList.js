import React, {Component} from 'react'
import ArticleComment from './ArticleComment'

class ArticleCommentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: props.defaultOpen
        }
    }

    render() {
        const commentsAreAvailable = !!this.props.comments
        const comments = commentsAreAvailable && this.props.comments.map((comment, index) => <li key={comment.id}>
            <ArticleComment comment={comment}/>
        </li>)
        return (
            <div>
            { commentsAreAvailable &&
                <div>
                    <h3>Comments:</h3> <a style={{cursor: 'pointer'}} onClick={e => this.toogleCommentVisibility(e)}>{this.state.isOpen ? 'hide' : 'show...'}</a>
                    {this.state.isOpen && <ul>{comments}</ul>}
                </div>

            }
            </div>
        )
    }

    toogleCommentVisibility = (e) => {
        e.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default ArticleCommentList