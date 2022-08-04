class getWeatherInformation{
    constructor(city){
        this.city = city;
    } 
    displayCity(){
        const base="https://api.openweathermap.org/data/2.5/weather?q="+this.city+"&appid=43aa310cf040eb7a9bc888de93a2c9dc&units=metric";
        fetch(base)
        .then((Response)=>{return Response.json()})
        .then((Data)=>{
            const {temp} = Data.main;
        })
    }  
}

var data = new getWeatherInformation("london");
console.log(data.displayCity());