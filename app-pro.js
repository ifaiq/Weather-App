
const yargs = require('yargs');
const axios = require('axios');


const argv = yargs
.options({
    a:{ alias: 'address',
    describe: 'address',
    demand:true
    }
})
.help()
.argv

var address = encodeURI(argv.a);
url = 'http://dev.virtualearth.net/REST/v1/Locations/'+address+'?jsonl&key=Ar44tukuyNV1J7Vhz92sHkSw6UqgIJ-5xddc0mmnJI5ebSK9HATQIdLm82RlgGj4';
axios.get(url).then((Response)=>{
    if(Response.data.resourceSets[0].estimatedTotal ===0){
        Response('Wrong address');
    }
var Lat= Response.data.resourceSets[0].resources[0].point.coordinates[0];
var Lon= Response.data.resourceSets[0].resources[0].point.coordinates[1];
var weatherURL = 'https://api.darksky.net/forecast/b8fbf219f0f3109f05561ddec3cb00b3/'+Lat+','+Lon
console.log(`LONGETUDE = ${Lon} LATITUDE = ${Lat}`);
return axios.get(weatherURL);
}).then((Response)=>{
    var temp = Response.data.currently.temperature;
   var  atemp = Response.data.currently.apparentTemperature;
   console.log(`Temperature = ${temp} and Feels like = ${atemp}`);
}).catch((e)=>{
    console.log(e);
});


