import {Link} from 'react-router-dom'
import styled from 'styled-components'


export const Container = styled.div`
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 35px 0;

    rec.rec-arrow{
        border-radius: 0;
        background-color: #9758a6;
        color: #efefef;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    rec.rec-arrow:hover{
        border: 2px solid #9758a6;
        background-color: #efefef;
        color: #9758a6;
    }

    rec.rec-arrow:disabled{
        border: none;
        background-color: #bebebf;
        color: #efefef;
    }
`

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CategoryImg = styled.img`

`

export const Image = styled.img`
width: 200px;
height: 199px;
border-radius: 10px;
align-items: center;
`

export const Button = styled(Link)`

    margin-top: 16px;
    width: 283.4px;
    height: 66px;

    background: #9758A6;
    box-shadow: 0px 5px 10px rgba(151, 88, 166, 0.22), 0px 20px 40px rgba(151, 88, 166, 0.24);
    border-radius: 8px;
    border: none;

    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 100%;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    

    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }

    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`