import React from 'react'

import CapaCart from '../../assets/cart-image.png'
import {CartItems, CartResume} from '../../components'

import { Container, CartImg, Wrapper } from './styles'

export function Cart(){

    return(
        <Container>
            
            <CartImg src={CapaCart} alt='capa do Carrinho' />
            <Wrapper>
                <CartItems/>
                <CartResume/>
            </Wrapper>
            
        </Container>
    )
}

