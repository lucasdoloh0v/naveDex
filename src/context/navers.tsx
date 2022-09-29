import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { Credentials, getNavers } from 'services/navers'

interface NaversContextData {
  navers: Credentials[] | null
  isFetchingNavers: boolean
}

const NaversContext = createContext<NaversContextData>({} as NaversContextData)

const NaversProvider: React.FC = props => {
  const [isFetchingNavers, setIsFetchingNavers] = useState(true)
  const [navers, setNavers] = useState<Credentials[] | null>(null)

  const fetchNavers = useCallback(async () => {
    try {
      const naversResponse = await getNavers()
      setNavers(naversResponse)
    } catch (error) {
      console.log(error)
    } finally {
      setIsFetchingNavers(false)
    }
  }, [])

  useEffect(() => {
    fetchNavers()
  }, [fetchNavers])

  const valueToReturn = useMemo(
    () => ({
      navers,
      isFetchingNavers
    }),
    [navers, isFetchingNavers]
  )

  return <NaversContext.Provider value={valueToReturn} {...props} />
}

const useNavers = () => useContext(NaversContext)

export { NaversProvider, useNavers }
