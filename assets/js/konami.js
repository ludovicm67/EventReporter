var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var n = 0;
$(document).keydown(function (e) {
  if (e.keyCode === k[n++]) {
    if (n === k.length) {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ','_blank');
      return !1
    }
  } else n = 0
});