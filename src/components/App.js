import React, {Component} from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import defaultArticles from './../fixtures'

class App extends Component {
    render() {
        return (
            <div>
                <h1>App name</h1>
                <Counter />
                <UserForm />
                <Filters articles = {defaultArticles}/>
                <ArticleList />
            </div>
        )
    }
}

export default App