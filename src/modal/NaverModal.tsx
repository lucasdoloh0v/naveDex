import { Column, Row, Text } from 'components'
import { NaverInfos } from 'context/navers'
import { Pencil, Trash, X } from 'phosphor-react'
import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

interface ModalProps extends NaverInfos {
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

const NaverModal = ({ setModalOpen, name, job_role, birthdate, admission_date, project, url }: ModalProps) => {
  const closeModal = () => {
    setModalOpen(false)
  }

  const formatBirth = (initialDate: string) => {
    const date = new Date(initialDate)
    const yearDate = date.getFullYear()
    const monthDate = date.getMonth() + 1
    const dayDate = date.getDate()

    const currentDate = new Date()
    const currYear = currentDate.getFullYear()
    const currMonth = date.getMonth() + 1
    const currDay = date.getDate()

    let result = currYear - yearDate
    if (currMonth < monthDate || (currMonth === monthDate && currDay < dayDate)) {
      result--
    }

    return result < 0 ? 0 : result
  }

  return (
    <Background>
      <Modal>
        <Row>
          <Column width={'50%'}>
            <img src={url} alt={name} />
          </Column>
          <Column ml={10} width={'50%'}>
            <Row p={5} justifyContent='flex-end'>
              <X className='close' onClick={closeModal} size={14} />
            </Row>
            <Text variant='big'>{name}</Text>
            <Text variant='regular'>{job_role}</Text>
            <Text variant='medium' fontWeight='bold'>
              Idade
            </Text>
            <Text variant='regular'>{`${formatBirth(birthdate)} anos`}</Text>
            <Text variant='medium' fontWeight='bold'>
              Tempo de empresa
            </Text>
            <Text variant='regular'>{`${formatBirth(admission_date)} anos`}</Text>
            <Text variant='medium' fontWeight='bold'>
              Projeto
            </Text>
            <Text variant='regular'>{project}</Text>
            <Row mt={10}>
              <Trash size={16} />
              <Pencil size={16} />
            </Row>
          </Column>
        </Row>
      </Modal>
    </Background>
  )
}

const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = styled.div`
  background-color: #fff;
  width: 60%;
  .close {
    cursor: pointer;
  }
`

export default NaverModal
