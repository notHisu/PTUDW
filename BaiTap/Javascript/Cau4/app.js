let money = 0;
if (window.location.search) {
  const params = new URLSearchParams(window.location.search);
  money = parseInt(params.get("money"));
}

const FIVE_0 = 50000;
const ONE_00 = 100000;
const TWO_00 = 200000;
const FIVE_00 = 500000;

let five00 = 0;
let two00 = 0;
let one00 = 0;
let five0 = 0;

let flagShow = false;
if (!isNaN(money) && money > 50000) {
  flagShow = true;
  while (money >= FIVE_00) {
    five00++;
    money = money - FIVE_00;
  }
  while (money >= TWO_00) {
    two00++;
    money = money - TWO_00;
  }
  while (money >= ONE_00) {
    one00++;
    money = money - ONE_00;
  }
  while (money >= FIVE_0) {
    five0++;
    money = money - FIVE_0;
  }

  const total =
    FIVE_00 * five00 + TWO_00 * two00 + ONE_00 * one00 + FIVE_0 * five0;
}

if (five00 > 0) {
  document.write(
    '<div class="normal">' +
      '<p class="col1">' +
      new Intl.NumberFormat().format(FIVE_00) +
      "</p>" +
      '<p class="col2">' +
      five00 +
      "</p>" +
      '<p class="col3">' +
      new Intl.NumberFormat().format(five00 * FIVE_00) +
      "</p>" +
      "</div>"
  );
}

if (two00 > 0) {
  document.write(
    '<div class="normal">' +
      '<p class="col1">' +
      new Intl.NumberFormat().format(TWO_00) +
      "</p>" +
      '<p class="col2">' +
      two00 +
      "</p>" +
      '<p class="col3">' +
      new Intl.NumberFormat().format(two00 * TWO_00) +
      "</p>" +
      "</div>"
  );
}

if (one00 > 0) {
  document.write(
    '<div class="normal">' +
      '<p class="col1">' +
      new Intl.NumberFormat().format(ONE_00) +
      "</p>" +
      '<p class="col2">' +
      one00 +
      "</p>" +
      '<p class="col3">' +
      new Intl.NumberFormat().format(one00 * ONE_00) +
      "</p>" +
      "</div>"
  );
}

if (five0 > 0) {
  document.write(
    '<div class="normal">' +
      '<p class="col1">' +
      new Intl.NumberFormat().format(FIVE_0) +
      "</p>" +
      '<p class="col2">' +
      five0 +
      "</p>" +
      '<p class="col3">' +
      new Intl.NumberFormat().format(five0 * FIVE_0) +
      "</p>" +
      "</div>"
  );
}
document.write("<hr>");
if (flagShow) {
  document.write(
    '<p class="total">Tổng tiền: ' +
      new Intl.NumberFormat().format(total) +
      "</p>"
  );
}
