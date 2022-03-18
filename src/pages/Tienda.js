import Productos from "../components/Productos"

const Tienda = ({ productos, agregarProducto }) => {
  return (
    <div>
        <h1>Tienda</h1>
        <Productos productos={ productos } agregarProducto={ agregarProducto } />
    </div>
  )
}

export default Tienda