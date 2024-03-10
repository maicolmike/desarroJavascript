document.addEventListener('DOMContentLoaded',() => {

    const App = () => {
        //return React.createElement('h1',null,'Tareas App');
        return (
            React.createElement('div',null,
            React.createElement('h1',null,'Tareas App'),
            React.createElement('input',{value: nuevaTarea, onchange:(ev)=> setNuevaTarea})
            )

        );
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(App))
});