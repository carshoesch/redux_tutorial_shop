import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './Products.scss';
import { addToCart } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/productSlice';

const Product = () => {
    // used so that changes can be made to the store
    const dispatch = useDispatch();
    const { data: products } = useSelector((state) => state.products);

    useEffect(() => {
        // fetch products from the server
        dispatch(getProducts());
    }, []);

    const handleAddToCart = (product) => {
        //dispatch action to redux
        dispatch(addToCart(product));
    };

    return (
        <>
            <div>Products</div>
            <div className='productsWrapper'>
                {products.map((product) => (
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
                                    variant='primary'
                                    style={{ marginTop: 'auto' }}
                                    onClick={() => handleAddToCart(product)}
                                >
                                    Add to cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Product;
