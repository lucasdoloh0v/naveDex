import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { Credentials, getNavers } from 'services/navers'

export interface NaverInfos extends Credentials {
  id: string
  user_id: string
}

interface NaversContextData {
  navers: NaverInfos[] | null
  isFetchingNavers: boolean
}

const NaversContext = createContext<NaversContextData>({} as NaversContextData)

const NaversProvider: React.FC = props => {
  const [isFetchingNavers, setIsFetchingNavers] = useState(true)
  const [navers, setNavers] = useState<NaverInfos[] | null>(null)

  const fetchNavers = useCallback(async () => {
    try {
      const naversResponse = await getNavers()
      setNavers(naversResponse)
    } catch (error) {
      toast.error('Não foi possivel obter os dados')
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
