import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { Column, Input, Button } from 'components'
import { loginSchema } from 'utils/yup-schemas'
import { useUser } from 'context/user'
import { Logo } from 'components/Logo'

interface LoginValues {
  email: string
  password: string
}

const Login: FC = () => {
  const { register, handleSubmit, errors, formState } = useForm<LoginValues>({ validationSchema: loginSchema })
  const { login } = useUser()

  const onSubmit = handleSubmit(login)

  return (
    <Column minHeight='100vh' alignItems='center' justifyContent='center'>
      <Column border='1px solid' borderColor='secondary' bg='primary' p={40} alignItems='center'>
        <Logo />
        <form onSubmit={onSubmit}>
          <Input
            name='email'
            register={register}
            label='E-mail'
            placeholder='e-mail'
            error={errors.email}
            mb={10}
            borderRadius='0'
          />
          <Input
            name='password'
            register={register}
            label='Senha'
            placeholder='Senha'
            type='password'
            error={errors.password}
            mb={10}
            borderRadius='0'
          />
          <Button variant='secondary' isLoading={formState.isSubmitting} borderRadius='0'>
            Entrar
          </Button>
        </form>
      </Column>
    </Column>
  )
}

export default Login
