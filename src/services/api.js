const KEY = 'bacc33e35e9f4f63bc0214851222408'

const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`
  
  const fetchResponse = await fetch(url)
  const data = await fetchResponse.json()
  
  return data
}

export default fetchData