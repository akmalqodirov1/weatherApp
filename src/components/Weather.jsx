import React, { useState } from 'react'


export const Weather = () => {
    const [city, setCity] = useState(``)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!city.trim()) return

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=79b0a2b843a9ca720b5d5c537deff62d&units=metric`

        setLoading(true)
        setError(null)

        const fetchData = async () => {
            try{
                const req = await fetch(url)
                if(!req.ok){
                    if(req.status === 404){
                        throw new Error(`shahar topilmadi`)
                    } else {
                        throw new Error(`xatolik`)
                    }
                }
                const getData = await req.json()
                setData(getData)
            }catch(error) {
                setError(error)
            }finally {
                setLoading(false)
            }
        }
        fetchData()
      }
      
      console.log(data);
      


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setCity(e.target.value)} value={city} type="text" placeholder='write city' />
        <button>get weather</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>xato : {error.message}</p>}

      {data && !error && <div>
        <h3>city : {data.name.toLowerCase()}</h3>
        <h3>country : {data.sys?.country.toLowerCase()}</h3>
        <h3>temperature : {data.main?.temp} C</h3>
        <h3>description : {data.weather?.[0]?.description.toLowerCase()}</h3>
        <p>qwertyui</p>
      </div>}
    </div>
  )
}


