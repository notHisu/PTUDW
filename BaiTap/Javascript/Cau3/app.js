document.getElementById("submit").addEventListener("click", function () {
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var flagShow = true;
  var result = "";
  var image = "";
  var name = "";
  var time = "";

  if (day && month && !isNaN(day) && !isNaN(month)) {
    switch (month) {
      case "1":
        if (day < 1 || day > 31) {
          flagShow = false;
          break;
        }
        if (day <= 19) {
          image = "capricorn";
          name = "Ma kết";
          time = "23/12 - 19/01";
        }
        if (day >= 20) {
          image = "aquarius";
          name = "Bảo bình";
          time = "20/01 - 19/02";
        }
        break;
      case "2":
        if (day < 1 || day > 29) {
          flagShow = false;
          break;
        }
        if (day <= 19) {
          image = "aquarius";
          name = "Bảo bình";
          time = "20/01 - 19/02";
        }
        if (day >= 20) {
          image = "pisces";
          name = "Song ngư";
          time = "20/02 - 21/03";
        }
        break;
      case "3":
        if (day < 1 || day > 31) {
          flagShow = false;
          break;
        }
        if (day <= 20) {
          image = "pisces";
          name = "Song ngư";
          time = "20/02 - 21/03";
        }
        if (day >= 21) {
          image = "aries";
          name = "Bạch dương";
          time = "21/03 - 20/04";
        }
        break;
      case "4":
        if (day < 1 || day > 30) {
          flagShow = false;
          break;
        }
        if (day <= 20) {
          image = "aries";
          name = "Bạch dương";
          time = "21/03 - 20/04";
        }
        if (day >= 21) {
          image = "taurus";
          name = "Kim ngưu";
          time = "21/04 - 21/05";
        }
        break;
      case "5":
        if (day < 1 || day > 31) {
          flagShow = false;
          break;
        }
        if (day <= 20) {
          image = "taurus";
          name = "Kim ngưu";
          time = "21/04 - 20/05";
        }
        if (day >= 21) {
          image = "gemini";
          name = "Song tử";
          time = "21/05 - 21/06";
        }
        break;
      case "6":
        if (day < 1 || day > 30) {
          flagShow = false;
          break;
        }
        if (day <= 21) {
          image = "gemini";
          name = "Song tử";
          time = "21/05 - 21/06";
        }
        if (day >= 22) {
          image = "cancer";
          name = "Cự giải";
          time = "22/06 - 22/07";
        }
        break;
      case "7":
        if (day < 1 || day > 31) {
          flagShow = false;
          break;
        }
        if (day <= 22) {
          image = "cancer";
          name = "Cự giải";
          time = "22/06 - 22/07";
        }
        if (day >= 23) {
          image = "leo";
          name = "Sư tử";
          time = "23/07 - 22/08";
        }
        break;
      case "8":
        if (day < 1 || day > 31) {
          flagShow = false;
          break;
        }
        if (day <= 22) {
          image = "leo";
          name = "Sư tử";
          time = "23/07 - 22/08";
        }
        if (day >= 23) {
          image = "virgo";
          name = "Xử nữ";
          time = "23/08 - 22/09";
        }
        break;
      case "9":
        if (day < 1 || day > 30) {
          flagShow = false;
          break;
        }
        if (day <= 22) {
          image = "virgo";
          name = "Xử nữ";
          time = "23/08 - 22/09";
        }
        if (day >= 23) {
          image = "libra";
          name = "Thiên bình";
          time = "23/09 - 23/10";
        }
        break;
      case "10":
        if (day < 1 || day > 31) {
          flagShow = false;
          break;
        }
        if (day <= 23) {
          image = "libra";
          name = "Thiên bình";
          time = "23/09 - 23/10";
        }
        if (day >= 24) {
          image = "scorpio";
          name = "Hổ cáp";
          time = "24/10 - 22/11";
        }
        break;
      case "11":
        if (day < 1 || day > 30) {
          flagShow = false;
          break;
        }
        if (day <= 22) {
          image = "scorpio";
          name = "Hổ cáp";
          time = "24/10 - 22/11";
        }
        if (day >= 23) {
          image = "sagittarius";
          name = "Nhân mã";
          time = "23/11 - 22/12";
        }
        break;
      case "12":
        if (day < 1 || day > 31) {
          flagShow = false;
          break;
        }
        if (day <= 22) {
          image = "sagittarius";
          name = "Nhân mã";
          time = "23/11 - 22/12";
        }
        if (day >= 23) {
          image = "capricorn";
          name = "Ma kết";
          time = "23/12 - 19/01";
        }
        break;
      default:
        flagShow = false;
        break;
    }
  } else {
    flagShow = false;
  }

  if (flagShow) {
    result =
      '<div class="result">' +
      '<div class="image">' +
      '<img src="images/' +
      image +
      '.jpg" alt="' +
      image +
      '">' +
      "</div>" +
      '<div class="text">' +
      "<span>" +
      name +
      " (" +
      image.charAt(0).toUpperCase() +
      image.slice(1) +
      " : " +
      time +
      ")</span>" +
      "</div>" +
      "</div>";
  } else {
    result = '<div class="text">Dữ liệu không hợp lệ </div>';
  }

  document.getElementById("result").innerHTML = result;
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("day").value = "";
  document.getElementById("month").value = "";
  document.getElementById("result").innerHTML = "";
});
