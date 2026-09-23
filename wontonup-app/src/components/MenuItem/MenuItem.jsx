import { useDispatch } from 'react-redux';
import { addToCart } from '../../reducers/cartReducer';

function MenuItem({ item }) {
    // The Add dispatch action is sent here
    const dispatch = useDispatch();

    return (
        <div className="menu-item">
            <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            </div>
            <div className="menu-item-footer">
                <span className="menu-item-price">{Number(item.price).toFixed(2)} kr</span>
                <button type="button" className="add-to-cart" onClick={() => dispatch(addToCart(item))}>
                    Add
                </button>
            </div>
        </div>
    );
}

export default MenuItem;