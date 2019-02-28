var postData =  'xml;'
const soapRequest = require('easy-soap-request');

// example data
const url = '';
const headers = {
         'Host': '10.117.10.201:8181',
         'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:65.0) Gecko/20100101 Firefox/65.0',
         'Accept': '*/*',
         'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
         'Accept-Encoding': 'gzip, deflate',
         'soapaction': 'http://bus.colvir.com/service/cas/v4/auth',
         'content-type': 'application/xml',
         'Origin': 'moz-extension://96cb16bb-381b-4496-a51d-7b7247826dcc',
        'Content-Length': '2565',
         'Connection': 'keep-alive'
       };

// usage of module
(async () => {
  const { response } = await soapRequest(url, headers, postData, 1000); // Optional timeout parameter(milliseconds)
  const { body, statusCode } = response;
  console.log(body);
  console.log(statusCode);
})();
