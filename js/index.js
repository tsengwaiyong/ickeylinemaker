$('.title-android').on("animationend", function() {
  $('.title-android').toggleClass('title-ios');
});


$('.simulator .body .workspace').mousedown(function(e) {

  switch (e.button) {
    case 0:
      $('.pluginmenu').css('display', 'none');
      break;
    case 2:
      $('.pluginmenu').css('display', 'flex');

      var menux = e.pageX - $('.simulator .body .workspace').offset().left;
      var menuy = e.pageY - $('.simulator .body .workspace').offset().top;
      var workspace_height = $('.simulator .body .workspace').outerHeight();
      var workspace_width = $('.simulator .body .workspace').outerWidth();
      var pluginmenu_height = $('.pluginmenu .left').outerHeight();
      var pluginmenu_width = $('.pluginmenu .left').outerWidth();


      //靠近底部
      if (workspace_height - menuy < pluginmenu_height) {
        $('.pluginmenu .left').addClass('bottomedge');
        menuy = workspace_height - pluginmenu_height;
      }
      //靠近右边
      else if (workspace_width - menux < pluginmenu_width) {
        $('.pluginmenu .left').addClass('rightedge');
      } else {
        $('.pluginmenu .left').removeClass('bottomedge rightedge');
      }

      $(':root').css({
        '--pluginmenux': parseInt(menux) + 'px',
        '--pluginmenuy': parseInt(menuy) + 'px'
      });
      break;
    default:

  }
});

function showplugin() {
  $('.icklmaker').css('display', 'block');
  $('.pluginmenu').css('display', 'none');
}

function showkeyline(elm) {
  elm.css('animation', 'showkeyline 1.5s forwards');
  elm.draggable();
  elm.css('position', 'absolute');
  $('.pluginmenu').css('display', 'none');

}

function createkeyline(type, size, name) {
  $(':root').css('--plugintips', ' ');
  var div = document.createElement("div");
  var img = document.createElement("img");
  var icon = document.createElement("img");

  if (name == null || name == '') {
    name = 'icon/untitled'
  }
  switch (type) {
    case 'ios':
      $(img).attr("src", "../img/ioskeyline.svg");
      $(img).css({
        width: '256px',
        height: '256px'
      });
      $(div).attr('style', '--iconname:"' + name + '";--iconsize:"256 x 256"');

      break;
    case 'android':
      $(img).attr("src", "../img/androidkeyline.svg");
      $(img).css({
        width: size + 'px',
        height: size + 'px'
      });
      $(div).attr('style', '--iconname:"' + name + '";--iconsize:"' + size + ' x ' + size + '"');
      break;
  }

  $(icon).attr("src", "../img/componenticon.svg");
  $(icon).addClass('componenticon');
  $(img).addClass('core');
  $(div).addClass('keyline');
  $(div)[0].appendChild(img);
  $(div)[0].appendChild(icon);
  showkeyline($(div));
  $('.simulator .body .workspace')[0].appendChild(div);
}

// $('.ioskeyline').on("animationend", function() {
//   $('.ioskeyline').css('animation', '');
// });