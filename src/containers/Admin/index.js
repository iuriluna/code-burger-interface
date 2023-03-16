import PropTypes from 'prop-types'
import React from 'react'

import {SideMenuAdmin} from '../../components'
import paths from '../../Constants/path'

import EditProduct from './EditProduct'
import ListProducts from './ListProducts'
import NewProduct from './New Product'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export function Admin({match: { path }}){
    

    return (
        <Container>
            
            <SideMenuAdmin path={path} />
            <ContainerItems>
                {path === paths.Order && <Orders />}
                {path === paths.Products && <ListProducts />}
                {path === paths.NewProduct && <NewProduct />}
                {path === paths.EditProduct && <EditProduct />}
            </ContainerItems>
        </Container>
    )
}

Admin.propTypes = {
    match: PropTypes.object
}