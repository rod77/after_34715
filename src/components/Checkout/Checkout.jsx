import { useContext, useState } from "react"

import { CartContext } from "../../context/CartContext"

import db from "../../services/firebase"
import { addDoc, collection } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const { cart, getTotal, clear } = useContext(CartContext)
    const [orderId, setOrderId] = useState()
    const [buyer, setBuyer] = useState({
        Nombre: '',
        Email: '',
        Telefono: ''
    })

    const { Nombre, Email, Telefono } = buyer
    const navigate = useNavigate()
    const generateOrder = async (data) => {
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            console.log("OrdenNro:", order)
            setOrderId(order.id)
            clear()

        } catch (error) {
            console.log(error)
        }
    }

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const items = cart.map(e => { return { id: e.id, title: e.name, price: e.price, amount: e.amount } })
        const dia = new Date()
        const total = getTotal()
        const data = { buyer, items, dia, total }
        console.log('data', data)
        generateOrder(data)
    }

    const handleClear = () => {
        clear()
        console.log("vacio carrito")
        navigate('/cart')
    }

    return (
        <>
            <h1>Finalizando Compra</h1>
            <hr />
            {!orderId ?
                (<div><h4>Completar Datos:</h4>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="Nombre"
                            placeholder="Nombre"
                            value={Nombre}
                            onChange={handleInputChange}
                        /><br /><br />
                        <input
                            type="mail"
                            name="Email"
                            placeholder="Email"
                            value={Email}
                            onChange={handleInputChange}
                        /><br /><br />
                        <input
                            type="text"
                            name="Telefono"
                            placeholder="Telefono"
                            value={Telefono}
                            onChange={handleInputChange}
                        /><br /><br />
                        <br />
                        <br />
                        <input
                            type="submit"
                            value="Finalizar Compra"
                            className="btn btn-success"
                        />

                    </form></div>)
                :
                <h4>Su orden de compra es: {orderId}</h4>
            }


            <button className="btn btn-danger" onClick={handleClear}>Cancelar Compra</button>
        </>



    )
}

export default Checkout