function download() {
    var link = document.createElement("a");
    link.setAttribute("href", document.getElementById("download").value);
    link.setAttribute("download", "");
    link.click();
  }