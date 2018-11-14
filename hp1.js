$(function() {
  AOS.init();


 $('.nav-items').click(function() {
  var id = $(this).attr('data-href');
  var position = $(id).offset().top;
  $('html, body').animate({'scrollTop': position}, 600);
 })


$(window).scroll(function() {
  if ($(this).scrollTop() > 520) {
    $('#scroll').css('display', 'block');
   $("nav").stop().animate({
    'backgroundColor': '#537791'
     }, 30
   );
   $('nav').css('box-shadow', "0px 5px 20px -3px rgba(0,0,0,0.6)");
  } else {
    $('#scroll').css('display', 'none');
   $("nav").stop().animate({
    'backgroundColor': 'transparent'
     }, 30
   );
   $('nav').css('box-shadow', "none");

  }
 })


  // $('.navbar-toggler').click(function() {
  //     // $(this).toggleClass('active');

  //     alert("ああ");

  //     if ($('.aaa').hasClass('active')) {
  //         $('.aaa').removeClass('active');
  //     } else {
  //         $('.aaa').addClass('active');
  //     }
  // });



  $('#slack').click(function() {
    $('.sent-comment').text('');
    var a = $('#name').val();
    var b = $('#mail').val();
    var c = $('#content').val();

    if (a == '' || b == '' || c == '') {
      alert('記入されていないフォームがあります');
      $('.sent-comment').text('送信が失敗しました');
      return false;
    }

    var text = '\
                name = ' + a + '\
                mail = ' + b + '\
                content = ' + c;
    var url = 'https://slack.com/api/chat.postMessage';
    var data = {
      token: 'xoxp-409377253776-410231859317-410233319669-b11e382fab725cd84afd4c7e602289c6',
      channel: '#general',
      username: 'Naotohatakeyama',
      text: text
    };
    $.ajax({
      type: 'GET',
      url: url,
      data: data,
      success: function (data) {
        $('#name').val('');
        $('#mail').val('');
        $('#content').val('');
        $('.sent-comment').text('送信が成功しました');
      }
    });
  })



$('#scroll').click(function() {
  $('html, body').animate({'scrollTop': 0}, 1000);

});









})
