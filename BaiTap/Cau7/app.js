var dictNumbers = {
  0: "không",
  1: "một",
  2: "hai",
  3: "ba",
  4: "bốn",
  5: "năm",
  6: "sáu",
  7: "bảy",
  8: "tám",
  9: "chín",
};
var dictUnits = {
  0: "tỷ",
  1: "triệu",
  2: "nghìn",
  3: "đồng",
};
var number = 3000000;

function readNumber3Digit(number, dictionaryNumber, readFull = true) {
  number = String(number).padStart(3, "0");
  var digit_0 = number[2];
  var digit_00 = number[1];
  var digit_000 = number[0];
  var str_000 = dictionaryNumber[digit_000] + " trăm ";
  var str_00 = dictionaryNumber[digit_00] + " mươi ";
  if (digit_00 == 0) {
    str_00 = " linh ";
  }
  if (digit_00 == 1) {
    str_00 = " mười ";
  }
  var str_0 = dictionaryNumber[digit_0];
  if (digit_00 > 1 && digit_0 == 1) {
    str_0 = " mốt ";
  }
  if (digit_00 >= 1 && digit_0 == 5) {
    str_0 = " lăm ";
  }
  if (digit_00 > 1 && digit_0 == 0) {
    str_0 = "";
  }
  if (digit_00 == 0 && digit_0 == 0) {
    str_0 = "";
    str_00 = "";
  }
  if (!readFull) {
    if (digit_000 == 0) {
      str_000 = "";
    }
    if (digit_000 == 0 && digit_00 == 0) {
      str_00 = "";
    }
  }
  var result = str_000 + str_00 + str_0;
  return result;
}

function formatString(str, type = null) {
  str = str.toLowerCase().trim();
  var array = str.split(" ").filter((value) => value.trim());
  if (type == "danh-tu") {
    array = array.map(
      (value) => value.charAt(0).toUpperCase() + value.slice(1)
    );
  }
  var result = array.join(" ");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

function readNumber12Digits(number, dictUnits, dictNumbers) {
  number = String(number).padStart(12, "0");
  var arrNumber = number.match(/.{1,3}/g);
  var index = arrNumber.findIndex((value) => value != "000");
  var result = arrNumber
    .map((value, key) => {
      if (key >= index) {
        var readFull = key != index;
        return (
          readNumber3Digit(value, dictNumbers, readFull) + " " + dictUnits[key]
        );
      }
    })
    .filter(Boolean);
  result = formatString(result.join(" "));
  result = result.replace(/không (trăm )?(nghìn|triệu|tỷ)? đồng/g, "đồng");
  return result;
}

var result = readNumber12Digits(number, dictUnits, dictNumbers);
document.write(result);
