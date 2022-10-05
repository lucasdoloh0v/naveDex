import api from 'providers/api'

type ISODateString = string

export interface Credentials {
  job_role: string
  admission_date: ISODateString
  birthdate: ISODateString
  project: string
  name: string
  url: string
}

export const getNavers = () => api.get('/v1/navers')

export const getOneNaver = (id: number) => api.get(`/v1/navers/${id}`)

export const deleteNaver = (id: number) => api.delete(`/v1/navers/${id}`)

export const createNaver = (credentials: Credentials) => api.post('/v1/navers', credentials)

export const updateNaver = (id: number, credentials: Credentials) => api.put(`/v1/navers/${id}`, credentials)
