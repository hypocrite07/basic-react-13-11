import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {filterArticlesByDate, retrieveArticleByFilter} from './../../AC'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    handleDayClick = (day) => {
        const obj = DateUtils.addDayToRange(day, {from: this.props.dateFrom, to: this.props.dateTo})
        this.props.filterArticlesByDate(obj.from, obj.to)
    }

    componentWillReceiveProps(nextProps, nextState) {
        this.props.retrieveArticleByFilter(nextProps)
    }

    render() {
        const { dateFrom, dateTo } = this.props
        const selectedRange = dateFrom && dateTo && `${dateFrom.toDateString()} - ${dateTo.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { dateFrom, dateTo }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
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
    filterArticlesByDate,
    retrieveArticleByFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(DateRange)