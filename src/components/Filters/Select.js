import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filterArticlesByIndex, retrieveArticleByFilter } from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => {
        const ids = selected.map(elem => elem.value)
        const payload = {...this.props}
        payload.selected = ids
        this.props.filterArticlesByIndex(payload)
    }

    componentWillReceiveProps(nextProps, nextState) {
        this.props.retrieveArticleByFilter(nextProps)
    }

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={this.props.selected}
            onChange={this.handleChange}
            multi
        />
    }
}

const mapStateToProps = (state) => ({
    dateFrom: state.filters.dateFrom,
    dateTo: state.filters.dateTo,
    selected: state.filters.selected,
    user: state.filters.user
})

const mapDispatchToProps = {
    filterArticlesByIndex,
    retrieveArticleByFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectFilter)