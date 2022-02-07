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
