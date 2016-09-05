var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://wonyoung:ewq421421@125.209.194.101:27017/bus';

var _ = require('lodash');
var request = require('request');

var averageBusStop = require('./lib/averageBusStop.js');
var columnsFromList = require('./lib/sumColumnsFromList.js');
var columnNameFromTime = require('./lib/columnNameFromTime.js');

/* GET home page. */
router.get('/', function(req, res, next) {

  var busNum = '9711A번(일산~양재동)';    //노선이름_'노선명'
  var date = new Date();

  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('businfo');
    collection.find({'busFullName': busNum}).toArray(function (err, docs) {
      if (err) {
        console.log(err);
      } else {

        var busNum = '9711A번(일산~양재동)';    //노선이름_'노선명'
        var targetBusStopArray = docs;      //버스정류장_배열 정보(201607 기준)
        var returnBusStop = '121000221';    //회차지점정보_'표준버스정류장ID'

        console.log("====docs[0]====");
        console.log(docs[0])
        console.log("====docs[0]====");

        var currentColumn = columnNameFromTime.getColumnNameFromTime(date.getHours());  //기준 시간의 column 이름중 enter/leave 빼고 리턴
        var afterOneHourColumn = columnNameFromTime.getColumnNameFromTime(date.getHours()+1);
        var afterTwoHourColumn = columnNameFromTime.getColumnNameFromTime(date.getHours()+2);

        console.log("====currentColumn====");
        console.log(currentColumn);
        console.log("====currentColumn====");


        var newBusStopArray = averageBusStop.getAverageBusStopList(docs); //평균치 노선정보 리스트를 들고온다(Full 정보)
        var totalLeavePerson = columnsFromList.sumColumnsFromList(currentColumn + 'Leave', newBusStopArray);


        //


        console.log(" ");
        console.log(" ");
        console.log("====totalLeavePerson====");
        console.log(totalLeavePerson);
        console.log("====totalLeavePerson====");
        //console.log(newBusStopArray);

        res.render('index', {
          'busNum': busNum,
          'targetBusStopArray': targetBusStopArray,
          'returnBusStop': returnBusStop
        });

      }
    });
  });








});

module.exports = router;
