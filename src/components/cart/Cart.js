import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };

    return (
        <>
            <div>Cart {cartItems.length}</div>
            <div className='productsWrapper'>
                {cartItems.map((product) => (
                    <div
                        className='col-md-3'
                        key={product.id}
                        style={{ height: '500px' }}
                    >
                        <Card style={{ width: '18rem', height: '100%' }}>
                            <div className='text-center'>
                                <Card.Img
                                    variant='top'
                                    src={product.image}
                                    style={{ width: '100px', height: '130px' }}
                                />
                            </div>
                            <Card.Body
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <div className='upperWrapper'>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                </div>
                                <Button
                                    variant='danger'
                                    style={{ marginTop: 'auto' }}
                                    onClick={() =>
                                        handleRemoveFromCart(product.id)
                                    }
                                >
                                    Remove from cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Cart;
