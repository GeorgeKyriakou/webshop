import React from 'react'
import { CartInterface } from '../../context/cart/model';
import { CartPreview } from './style';
;

interface Props {
    cart:CartInterface;
}

export const CartPreviewComponent: React.FC<Props> = () => {
    return (
        <CartPreview>
            Items go here
            <button>Go to checkout</button>    
        </CartPreview>
    );
}