import axios from 'axios'
import store from '@/store'
import { API_URL } from '@/utils/constants'

const service = axios.create({
  baseURL: API_URL,
  timeout: 5000
})
