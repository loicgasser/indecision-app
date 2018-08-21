class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'
        const options = ['A', 'B', 'C']
        return (
            <div>
                <Header title={title} subtitle={this.subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handleClick() {
        alert('Handle click event')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
    handleRemoveAll() {
        alert('Remove All')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                <ol>
                {
                    this.props.options.map((opt) => <Option key={opt} option={opt} />)
                }
                </ol>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{this.props.option}</li>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.options.value.tim()
        if (option) {
            alert('handleAddOption')
        }
    }
    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" /><button>Add option</button>
            </form>
        )
    }
}

// Second header tries to create an HTML element. Convention is important.
// When one uses a Cap letter, react knows it's a component

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))