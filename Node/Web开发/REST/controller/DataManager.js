function isNotEmptyStr($str) {
  if ($str == "" || $str == undefined || $str == null || $str == "null") {
    return false;
  }
  return true;
}

function rawDataMap(rawData){
  if (!isNotEmptyStr(rawData)) {
      return ;
  }
  var mapData;
  if (!isNaN(rawData)) {
    var rawNumber = parseInt(rawData);
    if(rawNumber == 1){
      mapData = 1;
    }
    else if(rawNumber == 2){
      mapData = 2;
    }
    else if(rawNumber == 3){
      mapData = 4;
    }
    else if(rawNumber == 4){
      mapData = 5;
    }
    else if(rawNumber == 5){
      mapData = 3;
    }
    else if(rawNumber == 6){
      mapData = 8;
    }
    else if(rawNumber == 7){
      mapData = 6;
    }
    else if(rawNumber == 8){
      mapData = 9;
    }
    else if(rawNumber == 9){
      mapData = 7;
    }
    else if(rawNumber == 0){
      mapData = 0;
    }
  }
  return mapData;
}

function encode(rawData) {
  if (!isNotEmptyStr(rawData)) {
    return "";
  }
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var encodeData = "";
  for(var index = 0;index < rawData.length;index++){
    var datacomponent = rawData[index];
      if (!isNaN(datacomponent)) {
          var currentNumber = rawDataMap(String(datacomponent));
          encodeData += (currentNumber*month + day) + "3.14";
      } 
  }
  if (encodeData.length >= 4) {
    var lastTwoString =  encodeData.substring(encodeData.length - 4,encodeData.length);
    if(lastTwoString == "3.14"){
      encodeData = encodeData.substring(0,encodeData.length - 4);
    }
  }
  return encodeData;
}

module.exports = encode;