import { Fragment, useState } from 'react'
import { Column, Text, Row, Button } from 'components'
import { NaverInfos } from 'context/navers'
import { PencilSimple, Trash } from 'phosphor-react'
import NaverModal from 'modal/NaverModal'

interface NaverCardProps {
  naver: NaverInfos
}

const NaverCard = ({ naver }: NaverCardProps) => {
  const { url, name, job_role } = naver

  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  return (
    <Fragment>
      <Column width={280} height={376} m={10} justifyContent='flex-end'>
        <img src={url} alt={name} onClick={openModal} />
        <Text variant='big' fontWeight='bold'>
          {name}
        </Text>
        <Text variant='big'>{job_role}</Text>
        <Row>
          <Button variant='primary' width='40px' border={0}>
            <Trash size={20} />
          </Button>
          <Button variant='primary' width='40px' border={0}>
            <PencilSimple size={20} />
          </Button>
        </Row>
      </Column>
      {modalOpen && <NaverModal setModalOpen={setModalOpen} {...naver} />}
    </Fragment>
  )
}

export default NaverCard
