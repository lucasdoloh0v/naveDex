import { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { getMe, loginUser } from 'services/auth'
import { setToken, clearToken } from 'utils/auth'

interface Credentials {
  email: string
  password: string
}

interface UserData {
  name: string
  email: string
}

interface UserContextData {
  user: UserData | null
  isFetchingUser: boolean
  login(credentials: Credentials): Promise<void>
  logout(): void
}

const UserContext = createContext<UserContextData>({} as UserContextData)

const UserProvider: React.FC = props => {
  const [isFetchingUser, setIsFetchingUser] = useState(false)
  const [user, setUser] = useState<UserData | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      setIsFetchingUser(true)
      try {
        const userResponse = await getMe()
        return setUser(userResponse)
      } catch (error) {
        console.log('error', error)
      } finally {
        setIsFetchingUser(false)
      }
    }

    fetchUser()
  }, [])

  const login = async (credentials: Credentials) => {
    try {
      const loginResponse = await loginUser(credentials)
      setToken(loginResponse.token)
      setUser(loginResponse)
    } catch (error) {
      toast.error('Email ou senha inválida')
    }
  }

  const logout = () => {
    clearToken()
    setUser(null)
  }

  return <UserContext.Provider value={{ user, isFetchingUser, login, logout }} {...props} />
}

const useUser = () => useContext(UserContext)

export { UserProvider, useUser }
