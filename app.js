const https=require('https');
const { demandOption } = require('yargs');
const yargs =require('yargs');
const capitalweather=require('./capital-weather');


function calistir(){

    yargs.command({
        command:'getir',
        describe:'bilgileri getirilicek ülke',
        builder:{
            describe:'ulkeyi ingilizce olarak yazınız',
            demandOption:true,
            type:'string'
        },
        handler(argv){
            capitalweather(argv.ulke);
    
        }
    })
    
    
    yargs.parse();


}


module.exports=calistir;





























// https.get('https://restcountries.com/v3.1/name/turkey',(response)=>{

//     let data='';
//     response.on('data',chunk=>{
//         data=data+chunk;
//     });

//     response.on('end',()=>{
//         const jsondata=JSON.parse(data);
//         console.log(jsondata[0].borders);
//     })

// }).on('error',err=>{
//     console.log(err.message);
// });

