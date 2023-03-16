import PropTypes from 'prop-types'
import React, {useState, useEffect} from 'react'

import CapaProducts from '../../assets/capa-session-products.png'
import {CardProduct} from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'

import { Container, ProductsImgCapa, CategoryButton, CategoriesMenu, ProductsContainer,} from './styles'


export function Products({location: {state}}) {

    let categoryId = 0
    if(state?.categoryId){
        categoryId = state.categoryId
    }

    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategories] = useState(categoryId)
    const [products, setProducts] = useState([])
    const [filteredproducts, setFilterProducts] = useState([])
    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todos' }, ...data]

            setCategories(newCategories)
        }


        
        async function loadProducts() {
            const { data: allProducts } = await api.get('products')

           const newProducts = allProducts.map(product => {
                return {...product, formatedPrice: formatCurrency(product.price)}
            })

            setProducts(newProducts)
        }

        loadProducts()
        loadCategories()
    }, [])

    useEffect( () => {

        if(activeCategory === 0 ){
            setFilterProducts(products)
        } else {
            const newFilteredProducts = products.filter(
                 product => product.category_id === activeCategory)

        setFilterProducts(newFilteredProducts)
        }
    
    }, [products, activeCategory])


    return (
        <Container>
            <ProductsImgCapa src={CapaProducts} alt='capa Products' />
            <CategoriesMenu>
                { categories && 
                categories.map( category => (
                    <CategoryButton 
                    type='button' 
                    key={category.id} 
                    isActiveCategory={activeCategory === category.id} 
                    onClick={() => {
                        setActiveCategories(category.id)
                    }} >
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoriesMenu>
            <ProductsContainer>

                    { filteredproducts && filteredproducts.map(product => (

                        <CardProduct key={product.id} product={product} />              
                    ))}
            </ProductsContainer>
        </Container>
    )
}

Products.propTypes = {
    location: PropTypes.object
}

