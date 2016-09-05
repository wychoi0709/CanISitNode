/**
 * Created by WonYoung on 2016. 9. 6..
 */
exports.sumColumnsFromList = function (column, list) {
    var sumResult = 0;

    for(var i = 0; i < list.length; i++) {
        sumResult += list[i][column];
    }

    return sumResult;
}