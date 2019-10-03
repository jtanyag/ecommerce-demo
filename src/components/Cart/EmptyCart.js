import React from 'react';
import { ButtonContainer } from '../Button';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-10 mx-auto text-center'>
          <h1 className='text-title'>Your cart is currently empty</h1>
          <Link to='/'>
            <ButtonContainer>Continue Shopping</ButtonContainer>
          </Link>
        </div>
      </div>
    </div>
  )
}
