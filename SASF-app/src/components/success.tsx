interface setComponentProp {
    setComponent: React.Dispatch<React.SetStateAction<number>>
}

export default function Orientador({setComponent}:setComponentProp) {
    
    return (
        <div className="success-content" style={{
            height: "100vh"
        }}>
            <img src="./success.png" width={80}/>
            <h1>Salvo com sucesso</h1>
            <button onClick={()=> setComponent(0)} style={{
                width: "70%"
            }}>Voltar</button>
        </div>
    )
}