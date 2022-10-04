import { Row, Text, Button, NaverCard } from 'components'
import { useNavers } from 'context/navers'
import { Fragment } from 'react'

const Navers = () => {
  const { navers, isFetchingNavers } = useNavers()

  return isFetchingNavers ? (
    <p>Carregando...</p>
  ) : (
    <Fragment>
      <Row mt={40} mx={20} justifyContent='space-between' alignItems='center'>
        <Text variant='big' fontSize={40}>
          Navers
        </Text>
        <Button variant='secondary'>Adicionar Naver</Button>
      </Row>
      <Row m={10}>
        {navers?.map(naver => (
          <NaverCard {...naver} key={naver.id} />
        ))}
      </Row>
    </Fragment>
  )
}

export default Navers
