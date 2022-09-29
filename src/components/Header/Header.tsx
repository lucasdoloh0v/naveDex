import { Logo, Row, Button } from 'components'

function HeaderComponent() {
  return (
    <header>
      <Row alignItems='center' justifyContent='space-between' p={15} height={85}>
        <Logo height={40} />
        <Button variant='primary' border={0} width={150}>
          Sair
        </Button>
      </Row>
    </header>
  )
}

export default HeaderComponent
