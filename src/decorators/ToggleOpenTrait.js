import React from 'react'

class ToggleTrait extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isOpen: false
        }
    }

    toggleOpen = () => this.setState({
        isOpen: !this.state.isOpen
    })
}

export default ToggleTrait