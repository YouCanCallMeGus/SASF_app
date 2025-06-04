import { TextField } from "@mui/material";

interface setComponentProp {
    setComponent: React.Dispatch<React.SetStateAction<number>>
}

export default function Orientador({setComponent}:setComponentProp) {
    
    return (
        <div style={{
            height: "100vh"
        }}>
            <button onClick={()=> setComponent(0)}>voltar</button>
            <h1>Folha de prosseguimento</h1>
            <TextField multiline fullWidth
            style={{
                width: "100%",
                alignItems: "flex-start",
                flexGrow: '1'
            }}
            ></TextField>
            <button style={{
                margin: "20px auto",
                display: "flex",
                justifyContent: "center",
            }}>Salvar</button>
        </div>
    )
}