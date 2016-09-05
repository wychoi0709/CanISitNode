/**
 * Created by WonYoung on 2016. 9. 6..
 */
exports.getAverageBusStopList = function (list) {

    var newZeroEnter = 0;
    var newZeroLeave = 0;
    var newOneEnter = 0;
    var newOneLeave = 0;

    var newTwoEnter  = 0;
    var newTwoLeave = 0;
    var newThreeEnter = 0;
    var newThreeLeave = 0;
    var newFourEnter = 0;
    var newFourLeave = 0;
    var newFiveEnter = 0;
    var newFiveLeave = 0;
    var newSixEnter = 0;
    var newSixLeave = 0;
    var newSevenEnter = 0;
    var newSevenLeave = 0;
    var newEightEnter = 0;
    var newEightLeave = 0;
    var newNineEnter = 0;
    var newNineLeave = 0;
    var newTenEnter = 0;
    var newTenLeave = 0;

    var newElevenEnter = 0;
    var newElevenLeave = 0;
    var newTwelveEnter = 0;
    var newTwelveLeave = 0;
    var newThirteenEnter = 0;
    var newThirteenLeave = 0;
    var newFourteenEnter = 0;
    var newFourteenLeave = 0;

    var newFifteenEnter = 0;
    var newFifteenLeave = 0;
    var newSixteenEnter = 0;
    var newSixteenLeave = 0;
    var newSeventeenEnter = 0;
    var newSeventeenLeave = 0;
    var newEighteenEnter = 0;
    var newEighteenLeave = 0;
    var newNineteenEnter = 0;
    var newNineteenLeave = 0;
    var newTwentyEnter = 0;
    var newTwentyLeave = 0;
    var newTwentyoneEnter = 0;
    var newTwentyoneLeave = 0;
    var newTwentytwoEnter = 0;
    var newTwentytwoLeave = 0;
    var newTwentythreeEnter = 0;
    var newTwentythreeLeave = 0;

    var yearMonthCount = 19;    //201501 ~ 201607

    //busStopIdArray를 하나 만들어서 중복없이 모든 busStopId를 담아둔다 START
    var busStopIdArray = new Array;
    for(var i = 0; i < list.length; i++) {  //일단 모든걸 다 넣음
        busStopIdArray.push(list[i].busStopId);
    }
    busStopIdArray = busStopIdArray.reduce(function(a,b){   //중복 없애는 코드
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
    },[]);
    console.log("======busStopIdArray======")
    console.log(busStopIdArray.length);
    console.log(busStopIdArray);
    console.log("======busStopIdArray======")
    //busStopIdArray를 하나 만들어서 중복없이 모든 busStopId를 담아둔다 END

    var firstFlag = true;
    var averageBusStopList = new Array;
    for(var i = 0; i < busStopIdArray.length; i++) {
        for(var j = 0; j < list.length; j++) {

            //모두 돌되, busStopId가 같은 것 끼리만 더한다.
            if (busStopIdArray[i] == list[j].busStopId) {
                if(firstFlag){
                    averageBusStopList[i] = {
                        targetYearMonth : 201608,
                        busNum : list[j].busNum,
                        busFullName : list[j].busFullName,
                        busStopId: list[j].busStopId,
                        busStopArs: list[j].busStopArs,
                        busStopName: list[j].busStopName
                    };
                    firstFlag = false;
                }
                newZeroEnter += list[j].zeroEnter;
                newZeroLeave += list[j].zeroLeave;
                newOneEnter += list[j].oneEnter;
                newOneLeave += list[j].oneLeave;

                newTwoEnter += list[j].twoEnter;
                newTwoLeave += list[j].twoLeave;
                newThreeEnter += list[j].threeEnter;
                newThreeLeave += list[j].threeLeave;
                newFourEnter += list[j].fourEnter;
                newFourLeave += list[j].fourLeave;
                newFiveEnter += list[j].fiveEnter;
                newFiveLeave += list[j].fiveLeave;
                newSixEnter += list[j].sixEnter;
                newSixLeave += list[j].sixLeave;
                newSevenEnter += list[j].sevenEnter;
                newSevenLeave += list[j].sevenLeave;
                newEightEnter += list[j].eightEnter;
                newEightLeave += list[j].eightLeave;
                newNineEnter += list[j].nineEnter;
                newNineLeave += list[j].nineLeave;
                newTenEnter += list[j].tenEnter;
                newTenLeave += list[j].tenLeave;

                newElevenEnter += list[j].elevenEnter;
                newElevenLeave += list[j].elevenLeave;
                newTwelveEnter += list[j].twelveEnter;
                newTwelveLeave += list[j].twelveLeave;
                newThirteenEnter += list[j].thirteenEnter;
                newThirteenLeave += list[j].thirteenLeave;
                newFourteenEnter += list[j].fourteenEnter;
                newFourteenLeave += list[j].fourteenLeave;

                newFifteenEnter += list[j].fifteenEnter;
                newFifteenLeave += list[j].fifteenLeave;
                newSixteenEnter += list[j].sixteenEnter;
                newSixteenLeave += list[j].sixteenLeave;
                newSeventeenEnter += list[j].seventeenEnter;
                newSeventeenLeave += list[j].seventeenLeave;
                newEighteenEnter += list[j].eighteenEnter;
                newEighteenLeave += list[j].eighteenLeave;
                newNineteenEnter += list[j].nineteenEnter;
                newNineteenLeave += list[j].nineteenLeave;
                newTwentyEnter += list[j].twentyEnter;
                newTwentyLeave += list[j].twentyLeave;
                newTwentyoneEnter += list[j].twentyoneEnter;
                newTwentyoneLeave += list[j].twentyoneLeave;
                newTwentytwoEnter += list[j].twentytwoEnter;
                newTwentytwoLeave += list[j].twentytwoLeave;
                newTwentythreeEnter += list[j].twentythreeEnter;
                newTwentythreeLeave += list[j].twentythreeLeave;
            }

            if(j == (list.length-1)){   //list의 끝이면,
                newZeroEnter = newZeroEnter/yearMonthCount;
                newZeroLeave = newZeroLeave/yearMonthCount;
                newOneEnter = newOneEnter/yearMonthCount;
                newOneLeave = newOneLeave/yearMonthCount;

                newTwoEnter = newTwoEnter/yearMonthCount;
                newTwoLeave = newTwoLeave/yearMonthCount;
                newThreeEnter = newThreeEnter/yearMonthCount;
                newThreeLeave = newThreeLeave/yearMonthCount;
                newFourEnter = newFourEnter/yearMonthCount;
                newFourLeave = newFourLeave/yearMonthCount;
                newFiveEnter = newFiveEnter/yearMonthCount;
                newFiveLeave = newFiveLeave/yearMonthCount;
                newSixEnter = newSixEnter/yearMonthCount;
                newSixLeave = newSixLeave/yearMonthCount;
                newSevenEnter = newSevenEnter/yearMonthCount;
                newSevenLeave = newSevenLeave/yearMonthCount;
                newEightEnter = newEightEnter/yearMonthCount;
                newEightLeave = newEightLeave/yearMonthCount;
                newNineEnter = newNineEnter/yearMonthCount;
                newNineLeave = newNineLeave/yearMonthCount;
                newTenEnter = newTenEnter/yearMonthCount;
                newTenLeave = newTenLeave/yearMonthCount;

                newElevenEnter = newElevenEnter/yearMonthCount;
                newElevenLeave = newElevenLeave/yearMonthCount;
                newTwelveEnter = newTwelveEnter/yearMonthCount;
                newTwelveLeave = newTwelveLeave/yearMonthCount;
                newThirteenEnter = newThirteenEnter/yearMonthCount;
                newThirteenLeave = newThirteenLeave/yearMonthCount;
                newFourteenEnter = newFourteenEnter/yearMonthCount;
                newFourteenLeave = newFourteenLeave/yearMonthCount;

                newFifteenEnter = newFifteenEnter/yearMonthCount;
                newFifteenLeave = newFifteenLeave/yearMonthCount;
                newSixteenEnter = newSixteenEnter/yearMonthCount;
                newSixteenLeave = newSixteenLeave/yearMonthCount;
                newSeventeenEnter = newSeventeenEnter/yearMonthCount;
                newSeventeenLeave = newSeventeenLeave/yearMonthCount;
                newEighteenEnter = newEighteenEnter/yearMonthCount;
                newEighteenLeave = newEighteenLeave/yearMonthCount;
                newNineteenEnter = newNineteenEnter/yearMonthCount;
                newNineteenLeave = newNineteenLeave/yearMonthCount;
                newTwentyEnter = newTwentyEnter/yearMonthCount;
                newTwentyLeave = newTwentyLeave/yearMonthCount;
                newTwentyoneEnter = newTwentyoneEnter/yearMonthCount;
                newTwentyoneLeave = newTwentyoneLeave/yearMonthCount;
                newTwentytwoEnter = newTwentytwoEnter/yearMonthCount;
                newTwentytwoLeave = newTwentytwoLeave/yearMonthCount;
                newTwentythreeEnter = newTwentythreeEnter/yearMonthCount;
                newTwentythreeLeave = newTwentythreeLeave/yearMonthCount;


                averageBusStopList[i].zeroEnter = newZeroEnter;
                averageBusStopList[i].zeroLeave = newZeroLeave;
                averageBusStopList[i].oneEnter = newOneEnter;
                averageBusStopList[i].oneLeave = newOneLeave;

                averageBusStopList[i].twoEnter = newTwoEnter;
                averageBusStopList[i].twoLeave = newTwoLeave;
                averageBusStopList[i].threeEnter = newThreeEnter;
                averageBusStopList[i].threeLeave = newThreeLeave;
                averageBusStopList[i].fourEnter = newFourEnter;
                averageBusStopList[i].fourLeave = newFourLeave;
                averageBusStopList[i].fiveEnter = newFiveEnter;
                averageBusStopList[i].fiveLeave = newFiveLeave;
                averageBusStopList[i].sixEnter = newSixEnter;
                averageBusStopList[i].sixLeave = newSixLeave;
                averageBusStopList[i].sevenEnter = newSevenEnter;
                averageBusStopList[i].sevenLeave = newSevenLeave;
                averageBusStopList[i].eightEnter = newEightEnter;
                averageBusStopList[i].eightLeave = newEightLeave;
                averageBusStopList[i].nineEnter = newNineEnter;
                averageBusStopList[i].nineLeave = newNineLeave;
                averageBusStopList[i].tenEnter = newTenEnter;
                averageBusStopList[i].tenLeave = newTenLeave;

                averageBusStopList[i].elevenEnter = newElevenEnter;
                averageBusStopList[i].elevenLeave = newElevenLeave;
                averageBusStopList[i].twelveEnter = newTwelveEnter;
                averageBusStopList[i].twelveLeave = newTwelveLeave;
                averageBusStopList[i].thirteenEnter = newThirteenEnter;
                averageBusStopList[i].thirteenLeave = newThirteenLeave;
                averageBusStopList[i].fourteenEnter = newFourteenEnter;
                averageBusStopList[i].fourteenLeave = newFourteenLeave;

                averageBusStopList[i].fifteenEnter = newFifteenEnter;
                averageBusStopList[i].fifteenLeave = newFifteenLeave;
                averageBusStopList[i].sixteenEnter = newSixteenEnter;
                averageBusStopList[i].sixteenLeave = newSixteenLeave;
                averageBusStopList[i].seventeenEnter = newSeventeenEnter;
                averageBusStopList[i].seventeenLeave = newSeventeenLeave;
                averageBusStopList[i].eighteenEnter = newEighteenEnter;
                averageBusStopList[i].eighteenLeave = newEighteenLeave;
                averageBusStopList[i].nineteenEnter = newNineteenEnter;
                averageBusStopList[i].nineteenLeave = newNineteenLeave;
                averageBusStopList[i].twentyEnter = newTwentyEnter;
                averageBusStopList[i].twentyLeave = newTwentyLeave;
                averageBusStopList[i].twentyoneEnter = newTwentyoneEnter;
                averageBusStopList[i].twentyoneLeave = newTwentyoneLeave;
                averageBusStopList[i].twentytwoEnter = newTwentytwoEnter;
                averageBusStopList[i].twentytwoLeave = newTwentytwoLeave;
                averageBusStopList[i].twentythreeEnter = newTwentythreeEnter;
                averageBusStopList[i].twentythreeLeave = newTwentythreeLeave;

                firstFlag=true;
            }
        }
    }
    console.log("======averageBusStopList======")
    console.log(averageBusStopList.length);
    console.log(averageBusStopList);
    console.log("======averageBusStopList======")
    return averageBusStopList;
}