function changePage(page, element) {
  document.getElementById("page-info").innerText =
    "Your current page is: " + page;

  var elements = document.querySelectorAll(".pagination a");
  Array.prototype.forEach.call(elements, function (el, i) {
    el.classList.remove("active");
  });

  element.classList.add("active");
}
