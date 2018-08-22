import React from 'react'

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
        e.preventDefault()
        const option = e.target.elements.options.value.trim()
        const error = this.props.handleAddOption(option)
        this.setState((prevState) => ({ error }))
        if (!error) {
            e.target.elements.options.value = ''
        }
    }
    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                {this.state.error && <p>{this.state.error}</p>}
                <input type="text" name="options" /><button>Add option</button>
            </form>
        )
    }
}