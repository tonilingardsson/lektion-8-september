import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import CartItem from '../CartItem/CartItem'

function Cart() {
  const [isOpen, setIsOpen] = useState(false)

  // useSelector to read the state of items
  const items = useSelector((state) => state.cart.items)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  const total = items.reduce((sum, item) => sum + Number(item.price), 0)

  return (
    <>
      <button type="button" className="cart-trigger" onClick={() => setIsOpen(true)}>
        Cart <span>{items.length}</span>
      </button>

      {isOpen && (
        <div className="cart-overlay" onClick={() => setIsOpen(false)}>
          <section className="cart" role="dialog" aria-modal="true" aria-labelledby="cart-title" onClick={(event) => event.stopPropagation()}>
            <div className="cart-header">
              <div>
                <span className="cart-kicker">Your order</span>
                <h2 id="cart-title">Cart</h2>
              </div>
              <button type="button" className="cart-close" onClick={() => setIsOpen(false)} aria-label="Close cart">
                Close
              </button>
            </div>

            {items.length === 0 ? (
              <p className="cart-empty">Your cart is waiting for something delicious.</p>
            ) : (
              <>
                <div className="cart-items">
                  {items.map((item, index) => (
                    <CartItem key={`${item.id}-${index}`} item={item} />
                  ))}
                </div>
                <div className="cart-total">
                  <span>Total</span>
                  <strong>{total.toFixed(2)} kr</strong>
                </div>
              </>
            )}
          </section>
        </div>
      )}
    </>
  )
}

export default Cart;