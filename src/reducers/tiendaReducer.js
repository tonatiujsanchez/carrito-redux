const estadoInicial = {
    productos: [
        { id: 1, nombre: 'Producto 1' },
        { id: 2, nombre: 'Producto 2' },
        { id: 3, nombre: 'Producto 3' },
        { id: 4, nombre: 'Producto 4' },
        { id: 5, nombre: 'Producto 5' },
        { id: 6, nombre: 'Producto 6' }
    ],
    carrito: []
};

const reducer = ( estado = estadoInicial, accion ) => {

    const agregarProducto = () => {
        const { producto } = accion;
        const { carrito } = estado;

        const productoExistente = carrito.find( productoFind => productoFind.id === producto.id );

        if( productoExistente ){
            productoExistente.cantidad += 1;
            const carritoActualizado = carrito.map( productoMap => productoMap.id === producto.id ? productoExistente : productoMap );
            const nuevoEstado = { ...estado, carrito: carritoActualizado };
            return nuevoEstado;

        }else{
            producto.cantidad = 1;
            const nuevoCarrito = [ ...carrito, producto ];
            const nuevoEstado = { ...estado, carrito: nuevoCarrito }
            return nuevoEstado;
        } 
    }

    const eliminarProducto = () => {
        const { producto } = accion;
        const { carrito } = estado;

        if( producto.cantidad > 1 ){
            producto.cantidad -= 1;
            const carritoActualizado = carrito.map( productoMap => productoMap.id === producto.id ? producto : productoMap );
            const nuevoEstado = { ...estado, carrito: carritoActualizado };
            return nuevoEstado;
        }else{
            const carritoActualizado = carrito.filter( productoFilter => productoFilter.id !== producto.id );
            const nuevoEstado = { ...estado, carrito: carritoActualizado }
            return nuevoEstado;
        }

    }



    switch ( accion.type ) {
        case 'AGREGAR_PRODUCTO':
            return agregarProducto();  

        case 'ELIMINAR_PRODUCTO':
            return eliminarProducto();

        default:
            return estado;
    }



}

export default reducer;