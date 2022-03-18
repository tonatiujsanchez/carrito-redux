import { connect } from "react-redux"
import styled from "styled-components"

const Carrito = ({ carrito, eliminarProducto }) => {



  return (
    <div>
        <TituloCarrito>Carrito de Compras</TituloCarrito>
        { carrito.length > 0 
            ? <>
                <EncabezadoCarrito>
                    <span>Nombre</span>
                    <span>Cantidad</span>
                    <span></span>
                </EncabezadoCarrito>
                {
                    carrito.map( producto => (
                        <Producto key={ producto.id }>
                            <p>
                                <span>{ producto.nombre }</span>
                                <span>{ producto.cantidad }</span>
                                <BotonEliminar onClick={ ()=> eliminarProducto( producto ) }>X</BotonEliminar>
                            </p>
                        </Producto>
                    ))
                }
              </>
            :<SinResultados>No hay productos agregados al carrito</SinResultados> 
        }
    </div>
  )
}

const TituloCarrito = styled.h3`
    font-size: 22px;
    margin-bottom: 20px;
`

const EncabezadoCarrito = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 16px 0 8px;
    font-weight: bold;
`

const Producto = styled.div`
    padding: 10px;
    border-bottom: 1px solid #EBEBf3;
    font-size: 14px;
    p{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const BotonEliminar = styled.button`
    padding: 5px;
    background: none;
    border: none;
    font-size: 14px;
    font-weight: bold;
    color: red;
    cursor: pointer;
    opacity: 0.3;
    &:hover{
        opacity: 1;
    }
`
const SinResultados = styled.p`
    text-align: center;
    font-weight: bold;
    margin-top: 80px;
    opacity: 0.5;
`
const mapStateToProps = ( estado )=>{
    return{
        carrito: estado.carrito
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        eliminarProducto: ( producto ) => {
            dispatch({
                type: 'ELIMINAR_PRODUCTO',
                producto: producto
            })
        }   
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Carrito )