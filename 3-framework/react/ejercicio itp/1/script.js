document.addEventListener('DOMContentLoaded', () => {


    const App = () => {
        const [nuevoTodo, setNuevoTodo] = React.useState('');
        const [todos, setTodos] = React.useState([]);
        const [error, setError] = React.useState(null);
      
        const agregarTodo = () => {
          const todoARegistrar = nuevoTodo.trim();
          if (!todoARegistrar) {
            setError('Debe ingresar un todo valido');
            return;
          }
      
          if (
            todos.find((todo) => todo.toUpperCase() === todoARegistrar.toUpperCase())
          ) {
            setError('El todo ya está registrado');
            return;
          }
      
          setTodos([...todos, todoARegistrar]);
          setNuevoTodo('');
          setError(null);
        };
      
        const agregarConEnter = (ev) => {
          if (ev.key !== 'Enter') {
            return;
          }
          agregarTodo();
        };
      
        const eliminarTodo = (todoAEliminar) => {
          setTodos(todos.filter((todo) => todo !== todoAEliminar));
        };
      
        return React.createElement(
          'div',
          null,
          React.createElement('h2', null, 'Todo App!'),
          React.createElement(
            'input',
            {
              value: nuevoTodo,
              onChange: (ev) => setNuevoTodo(ev.target.value),
              onKeyDown: agregarConEnter,
            },
            null
          ),
          React.createElement('button', { onClick: agregarTodo }, 'Agregar'),
          error ? React.createElement('p', { style: { color: 'red' } }, error) : null,
          todos.length > 0 ? React.createElement('hr') : null,
          React.createElement(
            'ul',
            null,
            ...todos.map((todo) =>
              React.createElement(
                'li',
                {
                  onClick: () => eliminarTodo(todo),
                  style: { cursor: 'pointer' },
                  title: 'click para eliminar',
                },
                todo
              )
            )
          )
        );
      };
      
      const domNode = document.getElementById('root');
      const root = ReactDOM.createRoot(domNode);
      
      root.render(React.createElement(App));
});