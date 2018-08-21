class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: props.options
            }
        })
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
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        })
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

// stateless functional components
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >What should I do?</button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            <ol>
                {
                    props.options.map((opt) => <Option key={opt} option={opt} />)
                }
            </ol>
        </div>
    )
}

const Option = (props) => {
    return (
        <li>{props.option}</li>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.options.value.trim()
        const error = this.props.handleAddOption(option)
        this.setState((prevState) => {
            // when error variable name is equal to object key
            return { error }

        })
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

// Second header tries to create an HTML element. Convention is important.
// When one uses a Cap letter, react knows it's a component

ReactDOM.render(<IndecisionApp options={['One', 'Two']} />, document.getElementById('app'))