import { Button, Header, Navers } from 'components'
import NaverModal from 'modal/NaverModal'
import { FC, Fragment, useState } from 'react'
import { ToastContainer } from 'react-toastify'

const Home: FC = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  return (
    <Fragment>
      <ToastContainer theme='dark' />
      <Header />
      <Navers />
      <Button variant='primary' onClick={openModal}>
        open
      </Button>
      {modalOpen && <NaverModal setModalOpen={setModalOpen} />}
    </Fragment>
  )
}

export default Home
