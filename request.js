var request = require('request');

// To post JSON data:
var myJSONObject = { ... };
request({
    url: "http://josiahchoi.com/myjson",
    method: "POST",
    json: true,   // <--Very important!!!
    body: myJSONObject
}, function (error, response, body){
    console.log(response);
});


// To post xml data:
var myXMLText = '<xml>...........</xml>'
request({
    url: "http://josiahchoi.com/myjson",
    method: "POST",
    headers: {
        "content-type": "application/xml",  // <--Very important!!!
    },
    body: myXMLText
}, function (error, response, body){
    console.log(response);
});
