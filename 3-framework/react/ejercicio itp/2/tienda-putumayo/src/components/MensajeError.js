export default function MensajeError({ error }) {
    return (
        <>
            {error ? <p style={{ color: 'red' }}>{error}</p> : null}
        </>
    )
}