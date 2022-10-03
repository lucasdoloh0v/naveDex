import { Column, Row, Text } from 'components'
import styled from 'styled-components'

// { name, job_role, birthdate, admission_date, project, url }

const NaverModal = () => {
  return (
    <Background>
      <Modal>
        <Row>
          <Column>
            {/* <img src={url} alt={name} /> */}
            <span>imagem</span>
          </Column>
          <Column ml={10}>
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
`

export default NaverModal
