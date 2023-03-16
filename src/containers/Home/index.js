import React from 'react'


import CapaHome from '../../assets/capa-home.png'
import {CategoryCaurosel, OffersCaurosel} from '../../components'

import { Container, HomeImg } from './styles'

export function Home(){

    return(
        <Container>
            <HomeImg src={CapaHome} alt='capa Home' />
            <CategoryCaurosel/>
            <OffersCaurosel/>
        </Container>
    )
}

