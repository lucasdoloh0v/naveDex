import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { useUser } from 'context/user'
import { useForm } from 'react-hook-form'
import { loginSchema } from 'utils/yup-schemas'

interface LoginValues {
  email: string
  password: string
}

function LoginForm() {
  const { register, handleSubmit, errors, formState } = useForm<LoginValues>({ validationSchema: loginSchema })
  const { login } = useUser()

  const onSubmit = handleSubmit(login)

  return (
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
  )
}

export default LoginForm
