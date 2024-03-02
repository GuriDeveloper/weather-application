const apiKey = 'e7dc77677f797ce5ccb04f06a391dfe4'

function getWeather(city = 'dehli') {
    const setHeader = {
        headers: {
            Accept: 'application/json'
        }
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`, setHeader)
        .then(res => res.json()
        )
        .then(res => {
            // const cityTemp = (res?.main?.temp - 273.15).toFixed(2)
            temp.innerHTML = `${res?.main?.temp}&#176;`
        })
        .catch(err=>console.log(err))
}


// getWeather()