import { Row, Text, Button } from 'components'

const Navers = () => {
  return (
    <>
      <Row mt={40} mx={20} justifyContent='space-between' alignItems='center'>
        <Text variant='big' fontSize={40}>
          Navers
        </Text>
        <Button variant='secondary'>Adicionar Naver</Button>
      </Row>
      <Row></Row>
    </>
  )
}

export default Navers
