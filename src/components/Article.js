import React, {Component} from 'react'
import ArticleCommentList from './ArticleCommentList'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen
        }
    }

    componentWillMount() {
        console.log('---', 1)
    }

    componentDidMount() {
        console.log('---', 2)
    }

    componentWillReceiveProps(nextProps) {
        console.log('---', 'receive props :(((')

        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }

    componentWillUpdate() {
        console.log('---', 'will update')
    }

    render() {
        const {article} = this.props
        const body = this.state.isOpen && <section>{article.text}</section>
        const {comments} = article

        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
                { this.state.isOpen && <ArticleCommentList comments={comments} defaultOpen={false}/> }
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


export default Article