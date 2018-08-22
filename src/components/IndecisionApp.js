import React from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'

// Second header tries to create an HTML element. Convention is important.
// When one uses a Cap letter, react knows it's a component

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            if (json) {
                const options = JSON.parse(json)
                this.setState(() => ({ options: options }))
            }
        } catch (e) { }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length != this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount() {
        console.log('life cycle: component will unmount')
    }
    handleDeleteOptions() {
        // Implicit object return
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter((opt) => option !== opt )
        }))
    }
    handlePick() {
        const randNum = Math.floor(Math.random() * this.state.options.length)
        console.log(this.state.options[randNum])
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}