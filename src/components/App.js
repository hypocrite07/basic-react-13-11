import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import * as _ from 'lodash'

class App extends Component {
    state = {
        selected: null,
        selectedDate: ''
    }

    handleSelect = selected => this.setState({ selected })

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <h1>App name</h1>
                <UserForm />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleSelect} multi />
                <DayPicker onDayClick={this.onDaySelect}/>
                <input value={this.state.selectedDate}></input>
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
                <ArticlesChart articles = {articles} />
            </div>
        )
    }

    onDaySelect = date => {
        const newState = _.extend(this.state, {
            selectedDate: date.toDateString()
        })
        this.setState(newState)
    }
}

export default App