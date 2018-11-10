const request = require('request');

var add = (arg, callback)=>{

var address = encodeURI(arg);
request({url:'http://dev.virtualearth.net/REST/v1/Locations/'+address+'?jsonl&key=Ar44tukuyNV1J7Vhz92sHkSw6UqgIJ-5xddc0mmnJI5ebSK9HATQIdLm82RlgGj4',
json:true
},(error, response, body)=>{
    if(error){
        callback('Cannot connect to google server');

    }
    else if(body.resourceSets[0].estimatedTotal ===0){
callback('Wrong address');
    }
  else{  callback(undefined,{
      Lat:body.resourceSets[0].resources[0].point.coordinates[0],
      Lon:body.resourceSets[0].resources[0].point.coordinates[1]
  });
}});}

module.exports.add=add;

