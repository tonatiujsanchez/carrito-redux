import { useState } from "react"
import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";

import Inicio from './pages/Inicio'
import Blog from "./pages/Blog";
import Tienda from "./pages/Tienda";
import Error404 from "./pages/Error404";

import Carrito from './components/Carrito';


function App() {

	const [ carrito, setCarrito ] = useState([]);

	const productos = [
        { id: 1, nombre: 'Producto 1' },
        { id: 2, nombre: 'Producto 2' },
        { id: 3, nombre: 'Producto 3' },
        { id: 4, nombre: 'Producto 4' },
        { id: 5, nombre: 'Producto 5' },
        { id: 6, nombre: 'Producto 6' }
    ];

    const agregarProducto = ( producto ) => {

		const productoExistente = carrito.find( productoFind => productoFind.id === producto.id );

		if( productoExistente ){
			productoExistente.cantidad += 1;
			const carritoActualizado = carrito.map( productoMap => productoMap.id === producto.id ? productoExistente : productoMap );
			setCarrito(carritoActualizado);
		}else{
			producto.cantidad = 1;
			setCarrito([ ...carrito, producto ] )
		}
	}

	const eliminarProducto = ( producto ) => {
		if( producto.cantidad > 1 ){
			producto.cantidad -= 1;
			const carritoActualizado = carrito.map( productoMap => productoMap.id === producto.id ? producto : productoMap );
			setCarrito( carritoActualizado );
		}else{
			const carritoActualizado = carrito.filter( productoFilter => productoFilter.id !== producto.id );
			setCarrito( carritoActualizado )
		}
	}

    return (
        <Contenedor>
            <Menu>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/tienda">Tienda</NavLink>
            </Menu>
            <main>
                <Routes>
                    <Route path="*" element={ <Error404 /> } />
                    <Route path="/" element={ <Inicio /> } />
                    <Route path="/blog" element={ <Blog /> } />
                    <Route path="/tienda" element={ <Tienda productos = { productos } agregarProducto={ agregarProducto } /> } />
                </Routes>
            </main>
            <aside>
                <Carrito carrito={ carrito } eliminarProducto={ eliminarProducto } />
            </aside>
        </Contenedor>
    );
}

const Contenedor = styled.div`
	max-width: 1000px;
	padding: 40px;
	width: 90%;
	display: grid;
	gap: 20px;
	grid-template-columns: 2fr 1fr;
	background: #fff;
	margin: 40px 0;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
	width: 100%;
	text-align: center;
	background: #092c4c;
	grid-column: span 2;
	border-radius: 3px;

	a {
		color: #fff;
		display: inline-block;
		padding: 15px 20px;
	}

	a.active {
		background: #1d85e8;
		text-decoration: none;
	}
	a:hover {
		/* background: #1d85e8; */
		/* text-decoration: none; */
	}
`;

export default App;

