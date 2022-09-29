import { Column, Text, Row, Button } from 'components'
import { NaverInfos } from 'context/navers'
import { PencilSimple, Trash } from 'phosphor-react'

const NaverCard = (props: NaverInfos) => {
  return (
    <Column width={280} height={376} m={10} justifyContent='flex-end'>
      <img src={props.url} alt={props.name} />
      <Text variant='big' fontWeight='bold'>
        {props.name}
      </Text>
      <Text variant='big'>{props.job_role}</Text>
      <Row>
        <Button variant='primary' width='40px' border={0}>
          <Trash size={20} />
        </Button>
        <Button variant='primary' width='40px' border={0}>
          <PencilSimple size={20} />
        </Button>
      </Row>
    </Column>
  )
}

export default NaverCard
