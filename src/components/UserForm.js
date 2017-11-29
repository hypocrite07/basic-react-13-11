import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { APPLY_ARTICLE_FILTER_BY_USER } from '../constants'
import {connect} from 'react-redux'
import { filterArticlesByUserName, retrieveArticleByFilter } from '../AC'

class UserForm extends Component {
    static propTypes = {

    };

    handleChange = ev => {
        const {value} = ev.target
        const payload = {...this.props}
        payload.user = value
        this.props.handleChange(payload)
    }

    componentWillReceiveProps(nextProps, state) {
        console.log(nextProps)
        this.props.filterArticles(nextProps)
    }

    render() {
        return (
            <div>
                Username: <input value = {this.props.user} onChange = {this.handleChange} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    dateFrom: state.filters.dateFrom,
    dateTo: state.filters.dateTo,
    selected: state.filters.selected,
    user: state.filters.user
})

const mapDispatchToProps = {
    handleChange: filterArticlesByUserName,
    filterArticles: retrieveArticleByFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)