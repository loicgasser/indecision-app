class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.toggleVisibility = this.toggleVisibility.bind(this)
        this.state = {
            visible: true
        }
    }
    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible,
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.visible && <p>This is some text I can show or hide</p>}
                <button onClick={this.toggleVisibility}>{this.state.visible ? 'Hide Text' : 'Show text'}</button>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))