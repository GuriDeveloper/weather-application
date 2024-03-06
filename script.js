const apiKey = '8607fdd51ad348e85f2ac1f735469809'
// get domm elements
const cityLocation = document.querySelector('.location')
const dateTime = document.querySelector('.date-time')
const temp = document.querySelector('.temp')
const t1 = document.querySelector('#temp')
const pressure = document.querySelector('#pressure')
const humidity = document.querySelector('#humidity')
const wind = document.querySelector('#wind')
const minTemp = document.querySelector('#min')
const maxTemp = document.querySelector('#max')
const btn = document.querySelector('#btn')
const inputText = document.querySelector('#inputtext')
const getIcon = document.querySelector('.icon')
let getCity = ''

// console.log(inputText)

inputText.addEventListener('keypress',(e)=>{
    console.log(e)
    if(e.key==='Enter'){
        
        getWeather(inputText.value)
        inputText.value = ''
    }
})

console.log(getCity)

// main function
function getWeather(city = 'pune') {
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
            
            const currDate = new Date((res.dt) * 1000)
            const options = {
                weekday:'long',
                year:'numeric',
                month:'long',
                day:'numeric',
                hour:'numeric',
                minute:'numeric'
            }
            const formatter = new Intl.DateTimeFormat('en-US',options).format(currDate)
            const countryName = new Intl.DisplayNames([`${res.sys.country}`],{type:'region'}).of(res.sys.country)
            getIcon.innerHTML = `<img style='width:80px;' src="http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png">`
            cityLocation.innerHTML = res?.name + `,${countryName}`
            dateTime.innerHTML = formatter
            temp.innerHTML = `${res?.main?.temp}&#176;`
            pressure.innerHTML = res.main.pressure
            humidity.innerHTML = res.main.humidity
            wind.innerHTML = res.wind.speed
            t1.innerHTML = `${res?.main?.temp}&#176;`
            minTemp.innerHTML = res.main.temp_min
            maxTemp.innerHTML = res.main.temp_max
            btn.innerHTML = res.weather[0].main
        })
        .catch(err=>console.log(err))
}
getWeather()
// let dates = new Date(1709400227 *1000)
// const month = dates.getMonth()
// console.log('date : ',dates)