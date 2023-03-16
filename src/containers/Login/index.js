import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import {Link, useHistory} from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Logo from '../../assets/logo.png'
import LoginImg from '../../assets/tela-login.png'
import {Button, ErrorMessage} from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'

import {
  Container,
  ContainerItens,
  LoginImage,
  Label,
  Input,
  SignIn
} from './styles'

export function Login() {
  const history = useHistory()
  const {putUserData} = useUser()

  const schema = Yup.object().shape({
    email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória')
  })


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
        {
          pending: 'Verificando seus dados',
          success: 'Seja bem-vindo(a)',
          error: 'Verifique seu e-mail e senha'
        }

    )
    
    putUserData(data)
    setTimeout(() => {
      if(data.admin){
        history.push('/pedidos')
      } else {
      history.push('/')
      }
    }, 1000)
  

  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens>
        <img src={Logo} alt="logo" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register("email")} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input type="password" {...register("password")} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 50, marginBottom: 33 }} >Entrar</Button>
        </form>
        <SignIn>
          Não possui conta? <Link style={{ color: 'white' }} to='/cadastro'>Cadastre-se</Link>
        </SignIn>
      </ContainerItens>
    </Container>
  )
}


