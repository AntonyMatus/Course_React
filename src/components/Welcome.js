export default function Welcome(props) {
    const { message, name} = props;
    return (
        <div>
            <h1>Hola, {name}</h1>
            <p>{message}</p>
        </div>
        
        );
        
}