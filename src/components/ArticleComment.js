import React, {Component} from 'react'

class ArticleComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    render() {
        const {comment} = this.props;
        return (
            <div>
                <h3>{comment.user}</h3>
                <p>{comment.text}</p>
            </div>
        )
    }
}

export default ArticleComment