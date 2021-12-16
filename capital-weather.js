const axios =require('axios');

function findcapitalwather(ulke){

    axios.get('https://restcountries.com/v3.1/name/'+ulke).then(res=>{
        const ulke=res.data[0];
        const baskent=ulke.capital;
        const nufus=ulke.population;
        const ulkeadi=ulke.name.common;
        console.log(`Nüfusu : ${nufus}  olan ${ulkeadi}'nin baskenti : ${baskent} `);
    
    
        axios.get('https://api.openweathermap.org/data/2.5/weather?q='+baskent+'&appid=2b45fa09f2d520d4af678125ba49aebc&lang=tr&units=metric').then(res=>{
           // console.log(res.data);
            console.log(`başkent ${res.data.name} bu gün hava ${res.data.weather[0].description} ve sıcaklık = ${res.data.main.temp}`);
        })
    })
}

module.exports=findcapitalwather;
