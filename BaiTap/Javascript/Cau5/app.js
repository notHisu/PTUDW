var group = {
  1: "Admin",
  2: "Manager",
  3: "Member",
  4: "Guest",
};

var xhtml = "";

if (Object.keys(group).length !== 0) {
  xhtml += '<select name="group" id="group" style="width: 200px">';
  for (var key in group) {
    if (key === "3") {
      xhtml +=
        '<option value="' +
        key +
        '" selected="selected">' +
        group[key] +
        "</option>";
    } else {
      xhtml += '<option value="' + key + '">' + group[key] + "</option>";
    }
  }
  xhtml += "</select>";
}

document.getElementById("content").innerHTML = xhtml;
