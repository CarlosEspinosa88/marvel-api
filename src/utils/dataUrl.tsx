
import { TS, LIMIT, OFFSET, QUERY,  URL, HASH, API_KEY } from '../config/constants'

export const ALL_URL = `${URL}${QUERY}?ts=${TS}&apikey=${API_KEY}&hash=${HASH}&limit=${LIMIT}&offset=${OFFSET}`;