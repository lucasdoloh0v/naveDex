import { Column, Text, Row, Button } from 'components'
import { NaverInfos } from 'context/navers'
import { PencilSimple, Trash } from 'phosphor-react'

const NaverCard = ({ url, name, job_role }: NaverInfos) => {
  return (
    <Column width={280} height={376} m={10} justifyContent='flex-end'>
      <img src={url} alt={name} />
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
  )
}

export default NaverCard
