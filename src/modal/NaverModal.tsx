import { Column, Row, Text } from 'components'
import { Pencil, Trash, X } from 'phosphor-react'
import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

interface ModalProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

// { name, job_role, birthdate, admission_date, project, url }

const NaverModal = ({ setModalOpen }: ModalProps) => {
  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <Background>
      <Modal>
        <Row>
          <Column width={'50%'}>
            {/* <img src={url} alt={name} /> */}
            <span>imagem</span>
          </Column>
          <Column ml={10} width={'50%'}>
            <Row p={5} justifyContent='flex-end'>
              <X className='close' onClick={closeModal} size={14} />
            </Row>
            <Text variant='big'>
              {/* {name} */}
              Nome do Naver
            </Text>
            <Text variant='regular'>
              {/* {job_role} */}
              Cargo
            </Text>
            <Text variant='medium' fontWeight='bold'>
              Idade
            </Text>
            <Text variant='regular'>xx</Text>
            <Text variant='medium' fontWeight='bold'>
              Tempo de empresa
            </Text>
            <Text variant='regular'>xx</Text>
            <Text variant='medium' fontWeight='bold'>
              Projeto
            </Text>
            <Text variant='regular'>xx</Text>
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
