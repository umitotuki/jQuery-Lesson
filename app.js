$(function (){
  $('.box1').slideDown(5000,function (){
    $('.box1').css({
      'background-color': '#ffd900',
      'width': '200px',
      'height': '100px'
    }).slideUp(5000);
  });
});