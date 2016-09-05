var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://wonyoung:ewq421421@125.209.194.101:27017/bus';
var _ = require('lodash');
var request = require('request');

router.post('/', function(req, res, next) {


    /*
    * <여기서 해야할 일>
    * 노선 정보와 해당 노성의 정류장 배열 정보, 회차지 정보를 받아서(받을 정보)__(이 정보를 노선ID와 정류장ID리스트가 왔다고 가정_안드로이드 첫 페이지에서 검색하면서 찾을거니깐)
    * 현재 시간 기준 2시간 이후까지 앉아 갈 수 있는지 계산해서(현재 시간 이용)
    * 앉아갈 수 있는 확률값(100% 기준 xx%_'%'제외 숫자만)을 던져준다
    * */

    var busNum = req.body.busNum;                          //해당 노선의 번호 정보
    var targetBusStopArray = req.body.targetBusStopArray;  //해당 노선의 정류장 배열 정보(평균치 배열을 정류장 순서로 정렬해서 던져줄 것)
    var returnBusStop = req.body.returnBusStop;            //회차지 정보

    console.log("  [busNum]", busNum);
    console.log("  [targetBusStopArray]", targetBusStopArray);
    console.log("  [returnBusStop]", returnBusStop);




});

module.exports = router;



//뻘짓의 흔적.....

// var collection = db.collection('businfo');
// collection.find({'노선명': '771(대화동~디지털미디어시티역)', '사용년월':201506}).toArray(function (err, docs) {
//     console.log(docs)
// });

// var collection = db.collection('businfo');
// collection.find({'버스정류장ARS번호': 35007}).toArray(function (err, docs) {
//     console.log(docs)
// });


// collection.find().toArray(function (err, docs) {
//     result = docs;
//     console.log(result);
//     res.json(result);
// });

// collection.find({'버스정류장ARS번호': 35007, '노선명':'9711A번(일산~양재동)', '00시승차총승객수' : 24}).toArray(function (err, docs) {
//     result = docs;
//     console.log(result);
//     res.json(result);
// });
// var query = { '노선명': new RegExp(busNum, 'i') };
// var query = { '노선명': '9711A번(일산~양재동)' };
// console.log(query);

// var collection = db.collection('businfo');
// var cursor = db.collection('businfo').find({'노선명': {'$regex':busNum}});
// console.log("========================================================");
// // var cursor = db.collection('businfo').find({'노선명':'9711A번(일산~양재동)'});
//
// result.push(cursor.map(function (item) {
//     //console.log("========================================================");
//     //console.log(item);
//     return item;
// }));
//
// // var result = _.forEach(cursor, function (value) {
// //     console.log(value);
// //     console.log("========================================================");
// //     return value;
// // })
// console.log(result);
// console.log("========================================================");
// var result = cursor.each(function (err, doc) {
//     console.log(doc);
//     result.push(doc);
// });
//db.close();