import { Column, LoginForm } from 'components'
import { Logo } from 'components/Logo'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  return (
    <Column minHeight='100vh' alignItems='center' justifyContent='center'>
      <Column border='1px solid' borderColor='secondary' bg='primary' p={40} alignItems='center'>
        <Logo />
        <LoginForm />
        <ToastContainer theme='dark' />
      </Column>
    </Column>
  )
}

export default Login
