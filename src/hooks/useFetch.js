import axios from "axios"
import { useState } from "react"


const useFetch = (url) => {
  const [response, setResponse] = useState()
  const [hasHerror, setHasHerror] = useState(false)
  const getApi = () => {
    axios.get(url)
    .then(res => {
      setResponse(res.data)
      setHasHerror(false)
    })
    .catch(err => {
      console.log(err)
      setHasHerror(true)
    })
  }
  return [response, getApi, hasHerror]

}

export default useFetch