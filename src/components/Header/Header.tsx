import { Logo, Row, Button } from 'components'
import { useUser } from 'context/user'
import { MouseEvent } from 'react'

function HeaderComponent() {
  const { logout } = useUser()

  const handleLogout = (e: MouseEvent) => {
    e.preventDefault()
    logout()
  }

  return (
    <header>
      <Row alignItems='center' justifyContent='space-between' p={15} height={85}>
        <Logo height={40} />
        <Button onClick={handleLogout} variant='primary' border={0} width={150}>
          Sair
        </Button>
      </Row>
    </header>
  )
}

export default HeaderComponent
