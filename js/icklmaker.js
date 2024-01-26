var selectObj = document.getElementsByName("size");
var sizeinput = document.getElementsByName("sizeinput");
var radio = document.getElementsByClassName("radio");
var customsize = document.getElementsByClassName("customsize")[0];
var iconsize = 24;
var sizelastchoose;


function customsizeinput(e) {
  iconsize = e.value;
  customsize_1.value = customsize_2.value = iconsize;


  for (var i = 0; i < selectObj.length; i++) {

    if (selectObj[i].checked && e.value != null) {

      customsize.classList.add("inputing");

      sizelastchoose = i;
      iconsize = selectObj[i].value;
      radio[i].classList.remove("checked");
      selectObj[i].checked = false;
    }
  }

  if (e.value == "") {
    customsize.classList.remove("inputing");
    selectObj[sizelastchoose].checked = true;
    radio[sizelastchoose].classList.add("checked");
    iconsize = selectObj[sizelastchoose].value;
  }
};

function enterdown(e) {

  var ev = window.event || e;

  if (ev.keyCode == 13) {
    createiconkeyline();
  }
}

function checking(e) {

  iconsize = e.value;

  sizeinput[0].value = sizeinput[1].value = "";
  customsize.classList.remove("inputing");


  for (var i = 0; i < selectObj.length; i++) {

    radio[i].classList.remove("checked");
    if (selectObj[i].checked) {
      sizelastchoose = i;
      radio[i].classList.add("checked");
    }
  }

}

function createiconkeyline() {
  var iconname = document.getElementById("name").value;

  if (sizeinput[0].value != "") {
    iconsize = Math.abs(sizeinput[0].value);
  }
  var size = parseFloat(iconsize);
  createkeyline('android', iconsize, iconname);
  document.getElementsByClassName("icklmaker")[0].style.display = "none";
}
$('.icklmaker').draggable({
  handle: '.nav',
  containment: 'body',
});


function closeplugin() {
  $('.icklmaker').css('display', 'none');
}