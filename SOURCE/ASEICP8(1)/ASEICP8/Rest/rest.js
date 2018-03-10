var request = require('request');
request("https://translate.yandex.net/api/v1.5/tr.json/translate?" +
    "key=trnsl.1.1.20180206T231433Z.3ec06fb4d394d903." +
    "07e9547f7d03a98174830ddd8024a84584e6b1ad&text=how are you&" +
    "lang=en-fr&[format=plain]&[options=1]&[callback=set]", function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }
//	console.log(body);
    //All is good. Print the body
    body = JSON.parse(body);

        console.log(body.text);


});