import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Logo from '../../assets/logo.png'
import RegisterImg from '../../assets/tela-register.jpg'
import {Button, ErrorMessage} from '../../components'
import api from '../../services/api'

import {
  Container,
  ContainerItens,
  RegisterImage,
  Label,
  Input,
  SignUp
} from './styles'

export function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
    password: Yup.string().required('Senha obrigatória'),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password')], 'As senhas devem ser iguais!')
  })


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {

    try{
        const{status } = await api.post('users', {
        name: clientData.name,
        email: clientData.email,
        password: clientData.password
      },{validateStatus: () => true})

      if(status === 201 || status === 200){
        toast.success('Cadastro criado com sucesso!', {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
      }
      else if(status === 409){
        toast.error('E-mail já cadastrado, faça login para continuar', {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
      } else{
        throw new Error()
      }
    }catch(err){
      toast.error('Falha no sistema, tente novamente!', {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })
    }
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="register-image" />
      <ContainerItens>
        <img src={Logo} alt="logo" />
        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
          <Input type="text" {...register("name")} error={errors.name?.message} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          
          <Label>Email</Label>
          <Input type="email" {...register("email")} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input type="password" {...register("password")} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label style={{ marginRight: 303}}>Confirmar Senha</Label>
          <Input type="password" {...register("confirmPassword")} error={errors.confirmPassword?.message}/>
          <ErrorMessage style={{ marginRight: 211 }}>{errors.confirmPassword?.message}</ErrorMessage>


          <Button type="submit" style={{ marginBottom: 33 }}>Cadastrar</Button>
        </form>
        <SignUp>
          Já possui conta? <Link style={{ color: 'white' }} to='/login'>Faça Login!</Link>
        </SignUp>
      </ContainerItens>
    </Container>
  )
}

