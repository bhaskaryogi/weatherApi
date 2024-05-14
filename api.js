
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '75f58ed787msh30cc6cc02aef9cap116f6bjsn5a88408e2df1',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getApi = async (city) => {
    document.getElementById("location").innerHTML = city


    const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
    let result = await response.text()
    result = JSON.parse(result)
    // console.log(JSON.parse(result));
    // const result = response.then((res) => {
    //     let newData = res.text()
    //     newData.then((e) => {
    //         console.log(e);
    //     })
    // })
    console.log(result);
    document.querySelector("#temp").innerHTML = result.temp
    document.querySelector("#min_temp").innerHTML = result.min_temp
    document.querySelector("#max_temp").innerHTML = result.max_temp
    document.querySelector("#wind_degree").innerHTML = result.wind_degrees
    document.querySelector("#wind_speed").innerHTML = result.wind_speed
    document.querySelector("#sunrise").innerHTML = new Date(result.sunrise * 1000).toLocaleTimeString()
    document.querySelector("#sunset").innerHTML = new Date(result.sunset * 1000).toLocaleTimeString()
    document.querySelector("#humidity").innerHTML = result.humidity
    document.querySelector("#feels_like").innerHTML = result.feels_like


    // document.getElementById("temp").innerHTML = result.temp
    // document.getElementById("minTemp").innerHTML = result.min_temp

}

document.getElementById("search").addEventListener("click", (e) => {
    e.preventDefault()
    data = document.getElementById("searchkaro").value
    getApi(data)
})

getApi("Delhi")