import { Column, LoginForm } from 'components'
import { Logo } from 'components/Logo'

const Login = () => {
  return (
    <Column minHeight='100vh' alignItems='center' justifyContent='center'>
      <Column border='1px solid' borderColor='secondary' bg='primary' p={40} alignItems='center'>
        <Logo />
        <LoginForm />
      </Column>
    </Column>
  )
}

export default Login
