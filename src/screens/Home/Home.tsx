import { Header, Navers } from 'components'
import { FC, Fragment } from 'react'
import { ToastContainer } from 'react-toastify'

const Home: FC = () => {
  return (
    <Fragment>
      <ToastContainer theme='dark' />
      <Header />
      <Navers />
    </Fragment>
  )
}

export default Home
