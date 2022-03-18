import styled from "styled-components"
import { NavLink } from "react-router-dom"



const Error404 = () => {
    return (
        <Contenedor404>
            <h1>Error 404</h1>
            <p>Página no encontrada</p>
            <NavLink to="/"> 👈 Ir al Inicio</NavLink>
        </Contenedor404>
    )
}

const Contenedor404 = styled.div`
    a{
        display: inline-block;
        margin-top: 20px;
        text-transform: uppercase;
        color: black;
        font-weight: bold;
    }
`

export default Error404