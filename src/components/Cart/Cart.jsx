import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {

  const { cart, clear, getTotal } = useContext(CartContext)

  return (
    <>
      <h1>Bienvenidos al carrito</h1>
      <hr />
      {cart.length !== 0 ?
        (
          <div className=''>
            <div className=''>
              {cart.map((e) => <CartItem key={e.id} item={e} />)}
              <br />
              {`Total:  $ ${getTotal()}`}
              <br />
              <button className="btn btn-danger" onClick={clear}>Vaciar Carrito</button>
              <br />
              <br />
              <Link to='/checkout'>
                <button className="btn btn-info">
                  Finalizar Compra
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <h3>El carrito esta vacio</h3>
            <Link to='/'>Ir a la tienda</Link>
          </div>
        )
      }

    </>
  )

}

export default Cart