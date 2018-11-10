const request = require('request');

var weather = (long, lat, callback)=>{

request({
    url: 'https://api.darksky.net/forecast/b8fbf219f0f3109f05561ddec3cb00b3/'+lat+','+long,
    json:true
},(Error, Response, body)=>{
if(Error){
  callback(Error);

}
else{
    callback(undefined,{
        temp: body.currently.temperature,
        atemp: body.currently.apparentTemperature

    });
}
});
}

module.exports.weather=weather;