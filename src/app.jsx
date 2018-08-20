class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'
        const options = ['A', 'B', 'C']
        return (
            <div>
                <Header title={title} subtitle={this.subtitle} />
                <Action />
                <Options options={options}/>
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
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <ol>
                {
                    this.props.options.map((opt) => <Option key={opt} option={opt} />)
                }
            </ol>
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
    render() {
        return (
            <button>Add option</button>
        )
    }
}

// Second header tries to create an HTML element. Convention is important.
// When one uses a Cap letter, react knows it's a component

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))