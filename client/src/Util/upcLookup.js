
const https = require('https')
var opts = {
  hostname: 'api.upcitemdb.com',
  path: '/prod/trial/lookup',
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
  }
}
var req = https.request(opts, function(res) {
  console.log('statusCode: ', res.statusCode);
  console.log('headers: ', res.headers);
  res.on('data', function(d) {
    console.log('BODY: ' + d);
  })
})
req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
})
req.write('{ "upc": "4002293401102" }')
req.end()
    