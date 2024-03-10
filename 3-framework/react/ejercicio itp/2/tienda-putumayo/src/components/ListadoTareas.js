export default function ListadoTareas({ todos, onEliminar }) {
    return (
        <>
            {todos.length ? <hr /> : null}
            <ul>
                {todos.map(todo => (
                    <li 
                        onClick={() => onEliminar(todo)} 
                        style={{ cursor: 'pointer' }} 
                        title="click para eliminar"
                    >
                        {todo}
                    </li>
                ))}
            </ul>
        </>
    );
}