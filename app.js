
const request = require('request');
const yargs = require('yargs');
const add = require('./address/add');
const weather = require('./weather/weather');

const argv = yargs
.options({
    a:{ alias: 'address',
    describe: 'address',
    demand:true
    }
})
.help()
.argv
add.add(argv.a,(Err, Result)=>{
    if(Err){
        console.log(Err);
    }
    else{
        console.log(JSON.stringify(Result, undefined, 4));
    
        weather.weather(Result.Lat, Result.Lon ,(error, weatherresult)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(`Temperature = ${weatherresult.temp} and Feels like = ${weatherresult.atemp}`);
            }
        });
    }
});



