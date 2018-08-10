// JSX - Javascript XML

const app = {
    title: "Indecision app",
    subtitle: "This is some info",
    options: ["One", "Two"]
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 &&
            <ol>
                <li>{app.options[0]}</li>
                <li>{app.options[1]}</li>
            </ol>
        }
    </div>
)


let count = 0

const addOne = () => {
    count++
    renderCounterApp()
}
const minusOne = () => {
    count--
    renderCounterApp()
}
const reset = () => {
    count = 0
    renderCounterApp()
}

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
    const appRoot = document.getElementById("app")

    ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp()
