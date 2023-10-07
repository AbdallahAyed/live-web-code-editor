document.getElementById("htmlCode").value = `${localStorage.getItem(
  "htmlCode"
)}`;
document.getElementById("cssCode").value = `${localStorage.getItem("cssCode")}`;
document.getElementById("jsCode").value = `${localStorage.getItem("jsCode")}`;

let savedFrame =
  document.getElementById("preview-window").contentWindow.document;

frame.open();
frame.write(localStorage.getItem("result"));
frame.close();

function showPreview() {
  let htmlCode = document.getElementById("htmlCode").value;
  let cssCode = "" + document.getElementById("cssCode").value + "";
  let jsCode = "" + document.getElementById("jsCode").value + "";
  let frame = document.getElementById("preview-window").contentWindow.document;

  frame.open();
  frame.write(htmlCode + cssCode + jsCode);
  frame.close();

  // Save the frame to localStorage
  autoSave("htmlCode", document.getElementById("htmlCode").value);
  autoSave("cssCode", document.getElementById("cssCode").value);
  autoSave("jsCode", document.getElementById("jsCode").value);
  autoSave("result", frame.documentElement.outerHTML);
  console.log(localStorage.getItem("result"));
}

function show(x) {
  document.getElementById("html").style.display = "none";
  document.getElementById("css").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById(x).style.display = "block";
}

function show_all() {
  if (window.innerWidth >= 992) {
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = "block";
    document.getElementById("result").style.display = "block";
  }
  if (
    window.innerWidth < 992 &&
    document.getElementById("html").style.display == "block"
  ) {
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
}

function autoSave(name, data) {
  // Save the data to local storage.
  localStorage.setItem(name, data);
}
