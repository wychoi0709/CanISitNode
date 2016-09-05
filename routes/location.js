var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://wonyoungCompany:ewq421421@125.209.194.101:27017/company';

/* GET users listing. */
router.get('/start', function(req, res, next) {
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('employee');

    collection.find({'ssn': 1001}).toArray(function (err, docs) {
      console.log(docs);
      res.json(docs[0]);
    });




  })
});

module.exports = router;




//
// /* 정류장 정보를 받아주는 코드 */
// var url = 'http://ws.bus.go.kr/api/rest/stationinfo/getStationByName';
// var queryParams = '?' + encodeURIComponent('ServiceKey') + '=McyrfYoYrrCDWXjiFXNscMG4UkgwUaoKvWzEr00f2rg7A865%2BfCjYEiG%2FvmRFv%2Fp9auClXUwQF7UJ36rK6nc7Q%3D%3D'; /* Service Key*/
// queryParams += '&' + encodeURIComponent('stSrch') + '=' + encodeURIComponent('마포구청'); /* 정류소명 검색어 */
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('999'); /* 검색건수 */
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* 페이지 번호 */
// console.log(queryParams);
//
// request({
//   url: url + queryParams,
//   method: 'GET'
// }, function (error, response, body) {
//   console.log('Status', response.statusCode);
//   console.log('Headers', JSON.stringify(response.headers));
//   console.log('Reponse received', body);
// });