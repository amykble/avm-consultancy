function check() {

    var checkBox = document.getElementById("nav-toggle");
    var spanColor = document.getElementById("hamburger");

    if (checkBox.checked == true) {
        spanColor.style.backgroundColor = "#fafafa";
    } else {
        spanColor.style.backgroundColor = "#2E2E2E";
  }
}