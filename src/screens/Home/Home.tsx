import { Button, Header } from 'components'
import NaverModal from 'modal/NaverModal'
import { FC, Fragment, useState } from 'react'

const Home: FC = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  return (
    <Fragment>
      <Header />
      <Button variant='primary' onClick={openModal}>
        open
      </Button>
      {modalOpen && <NaverModal setModalOpen={setModalOpen} />}
    </Fragment>
  )
}

export default Home
