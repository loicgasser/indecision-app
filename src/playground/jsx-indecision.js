// JSX - Javascript XML

const appRoot = document.getElementById("app")

const app = {
    title: "Indecision app",
    subtitle: "This is some info",
    options: []
}


const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.options.value
    if (option) {
        app.options.push(option)
        e.target.elements.options.value = ''
    }
    render()
}

const removeAll = () => {
    app.options = []
    render()
}

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNumber]
    console.log(option)
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button onClick={onMakeDecision}>What should I do?</button>
            <button disabled={app.options.length === 0} onClick={removeAll}>Remove all</button>
            {
                <ol>
                    {
                        app.options.map((opt) => <li key={opt}>{opt}</li>)
                    }
                </ol>
            }
            <form onSubmit={onFormSubmit}>
                <input type="text" name="options" />
                <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

render()