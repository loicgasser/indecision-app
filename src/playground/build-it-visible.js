const appRoot = document.getElementById("app")
let details = ''

const onClick = () => {
    details = details !== '' ? '' : 'Hey I am visible!!!'
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onClick}>{details === '' ? 'Show details' : 'Hide details'}</button>
            {details !== '' && <p>{details}</p>}
        </div>
    )
    ReactDOM.render(template, appRoot)
}

render()