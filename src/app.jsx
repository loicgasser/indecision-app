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
const user = {
    name: 'Andrew Mead',
    age: 26,
    location: 'Philadelphia'
}
function getLocation(location) {
    return location ? <p>Location: {location}</p> : undefined;
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : undefined}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
const appRoot = document.getElementById("app")

ReactDOM.render(template, appRoot)