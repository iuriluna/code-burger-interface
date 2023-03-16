import styled from 'styled-components'

import Background from '../../assets/tela-login.png'

export const Container = styled.div`
background: url('${Background}');
background-repeat: no-repeat;
height: 100vh;
width: 100%;
display: flex;
align-items: center;

`

export const ContainerItens = styled.div`
    background-color: #373737;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 25px 75px;


    h1{
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;

        color: #FFFFFF;

        margin-bottom: 22px ;
    }

    img{
        margin-bottom: 180px;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`

export const LoginImage = styled.img`
width:100%; 
height: 100%;

`

export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    color: #FFFFFF;

    margin-right: 359px;
    `

export const Input = styled.input`

    background: #FFFFFF;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;
    border: 'none';

    width: 391.42px;
    height: 38.32px;

    margin-bottom: 10px;
    padding-left: 10px;
`



export const SignIn = styled.p`

    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;

    color: #FFFFFF;

    a{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline;

        color: #FFFFFF;

        cursor: pointer;
    }
`
