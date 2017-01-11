// JavaScript Document


  $(document).ready(function () {

  var clicked=0;
  $('#burger-hover').click(function(){
     clicked++;
     if(clicked%2==1){
      $('.burger-close').css('transform','translate3d(0, 0%, 0)');
      $('.burger-line-dark').css('transform','translate3d(100%, 0, 0)');
      $('#burger-menu').css('transform','translate3d(0,0%,0)');
    } if(clicked%2==0){
      $('.burger-close').css('transform','translate3d(0, -108%, 0)');
      $('.burger-line-dark').css('transform','translate3d(0%, 0, 0)');
      $('#burger-menu').css('transform','translate3d(0, 100%, 0)');
    };
  });


  $('#burger-menu-link-0').hover(function(){
    $(this).closest("ul").css("background", 'url(images/main.png) center no-repeat');
    $(this).closest("ul").css("background-size", 'contain');
    $(this).click(function(){
    $('#burger-menu').css('transform','translate3d(0, -100%, 0)');
    $('.burger-close').css('transform','translate3d(0, -108%, 0)');
    $('.burger-line-dark').css('transform','translate3d(0%, 0, 0)');
    $("#main").css('transform','translate3d(0px,0%,0px)');
    $("#case").css('transform','translate3d(0px,100%,0px)');
    clicked=0;
     });
  }, function() {
    $(this).closest("ul").css("background", 'none');
    $(this).closest("ul").css("background-size", 'contain');
    });
    $('#burger-menu-link-1').hover(function(){
    $(this).closest("ul").css("background", 'url(images/unep.png) center no-repeat');
    $(this).closest("ul").css("background-size", 'contain');
    $(this).click(function(){
    $('#burger-menu').css('transform','translate3d(0, -100%, 0)');
    $('.burger-close').css('transform','translate3d(0, -108%, 0)');
    $('.burger-line-dark').css('transform','translate3d(0%, 0, 0)');
    $("#main").css('transform','translate3d(0px,-100%,0px)');
    $("#case").css('transform','translate3d(0px,0%,0px)');
    $("#site_title_wrap div:nth-child(1)").addClass('selected');
    $("#site_title_wrap div:nth-child(1)").css('transform','translate3d(0px,0%,0px)');
    $("#site_title_wrap div:nth-child(2)").css('transform','translate3d(0px,100%,0px)');
    $("#site_title_wrap div:nth-child(3)").css('transform','translate3d(0px,100%,0px)');
    $("#site_title_wrap div:nth-child(4)").css('transform','translate3d(0px,100%,0px)');
    $("#site_type p:nth-child(1) ").css('transform','translate3d(0px,0%,0px)');
    $("#site_type p:nth-child(2) ").css('transform','translate3d(0px,100%,0px)');
    $("#site_type p:nth-child(3) ").css('transform','translate3d(0px,100%,0px)');
    $("#site_type p:nth-child(4) ").css('transform','translate3d(0px,100%,0px)');
    $("#site_tool p:nth-child(1)").css('transform','translate3d(0px,-100%,0px)');
    $("#site_tool p:nth-child(2)").css('transform','translate3d(0px,0%,0px)');
    $("#site_tool p:nth-child(3)").css('transform','translate3d(0px,100%,0px)');
    $("#site_tool p:nth-child(4)").css('transform','translate3d(0px,200%,0px)');
    $("#site_url a:nth-child(1)").css('transform','translate3d(0px,0%,0px)');
    $("#site_url a:nth-child(2)").css('transform','translate3d(0px,100%,0px)');
    $("#site_url a:nth-child(3)").css('transform','translate3d(0px,100%,0px)');
    $("#site_url a:nth-child(4)").css('transform','translate3d(0px,100%,0px)');
    $(".link_site").attr("href", "http://unep.alisonyoon.com/");
    $("#showcase video source").attr("src", "unep.mp4");
      $("#showcase video")[0].load();
    $("#site_title_wrap div:nth-child(2)").removeClass('selected');
    $("#site_title_wrap div:nth-child(3)").removeClass('selected');
    $("#site_title_wrap div:nth-child(4)").removeClass('selected');
    clicked=0;
    });
  }, function() {
    $(this).closest("ul").css("background", 'none');
    $(this).closest("ul").css("background-size", 'contain');
    });
    $('#burger-menu-link-2').hover(function(){
    $(this).closest("ul").css("background", 'url(images/flowerby.png) center no-repeat');
    $(this).closest("ul").css("background-size", 'contain');
    $(this).click(function(){
    $('#burger-menu').css('transform','translate3d(0, -100%, 0)');
    $('.burger-close').css('transform','translate3d(0, -108%, 0)');
    $('.burger-line-dark').css('transform','translate3d(0%, 0, 0)');
    $("#main").css('transform','translate3d(0px,-100%,0px)');
    $("#case").css('transform','translate3d(0px,0%,0px)');
    $("#site_title_wrap div:nth-child(2)").addClass('selected');
    $("#site_title_wrap div:nth-child(1)").css('transform','translate3d(0px,-150%,0px)');
    $("#site_title_wrap div:nth-child(2)").css('transform','translate3d(0px,0%,0px)');
    $("#site_title_wrap div:nth-child(3)").css('transform','translate3d(0px,100%,0px)');
    $("#site_title_wrap div:nth-child(4)").css('transform','translate3d(0px,100%,0px)');
    $("#site_type p:nth-child(1) ").css('transform','translate3d(0px,-100%,0px)');
    $("#site_type p:nth-child(2) ").css('transform','translate3d(0px,0%,0px)');
    $("#site_type p:nth-child(3) ").css('transform','translate3d(0px,100%,0px)');
    $("#site_type p:nth-child(4) ").css('transform','translate3d(0px,100%,0px)');
    $("#site_tool p:nth-child(1)").css('transform','translate3d(0px,-100%,0px)');
    $("#site_tool p:nth-child(2)").css('transform','translate3d(0px,0%,0px)');
    $("#site_tool p:nth-child(3)").css('transform','translate3d(0px,100%,0px)');
    $("#site_tool p:nth-child(4)").css('transform','translate3d(0px,200%,0px)');
    $("#site_url a:nth-child(1)").css('transform','translate3d(0px,-150%,0px)');
    $("#site_url a:nth-child(2)").css('transform','translate3d(0px,0%,0px)');
    $("#site_url a:nth-child(3)").css('transform','translate3d(0px,100%,0px)');
    $("#site_url a:nth-child(4)").css('transform','translate3d(0px,100%,0px)');
    $(".link_site").attr("href", "http://mobile.alisonyoon.com/");
    $("#showcase video source").attr("src", "mobile.mp4");
      $("#showcase video")[0].load();
    $("#site_title_wrap div:first-child").removeClass('selected');
    $("#site_title_wrap div:nth-child(3)").removeClass('selected');
    $("#site_title_wrap div:nth-child(4)").removeClass('selected');
    clicked=0;
    });
  }, function() {
    $(this).closest("ul").css("background", 'none');
    $(this).closest("ul").css("background-size", 'contain');
    });
     $('#burger-menu-link-3').hover(function(){
    $(this).closest("ul").css("background", 'url(images/bose.png) center no-repeat');
    $(this).closest("ul").css("background-size", 'contain');
    $(this).click(function(){
    $('#burger-menu').css('transform','translate3d(0, -100%, 0)');
    $('.burger-close').css('transform','translate3d(0, -108%, 0)');
    $('.burger-line-dark').css('transform','translate3d(0%, 0, 0)');
    $("#main").css('transform','translate3d(0px,-100%,0px)');
    $("#case").css('transform','translate3d(0px,0%,0px)');
    $("#site_title_wrap div:nth-child(3)").addClass('selected');
    $("#site_title_wrap div:nth-child(1)").css('transform','translate3d(0px,-150%,0px)');
    $("#site_title_wrap div:nth-child(2)").css('transform','translate3d(0px,-150%,0px)');
   $("#site_title_wrap div:nth-child(3)").css('transform','translate3d(0px,0%,0px)');
   $("#site_type p:nth-child(1) ").css('transform','translate3d(0px,-100%,0px)');
   $("#site_type p:nth-child(2) ").css('transform','translate3d(0px,-100%,0px)');
   $("#site_type p:nth-child(3) ").css('transform','translate3d(0px,0%,0px)');
   $("#site_type p:nth-child(4) ").css('transform','translate3d(0px,100%,0px)');
   $("#site_tool p:nth-child(1)").css('transform','translate3d(0px,-100%,0px)');
   $("#site_tool p:nth-child(2)").css('transform','translate3d(0px,-100%,0px)');
   $("#site_tool p:nth-child(3)").css('transform','translate3d(0px,0%,0px)');
   $("#site_tool p:nth-child(4)").css('transform','translate3d(0px,200%,0px)');
   $("#site_url a:nth-child(1)").css('transform','translate3d(0px,-150%,0px)');
   $("#site_url a:nth-child(2)").css('transform','translate3d(0px,-150%,0px)');
   $("#site_url a:nth-child(3)").css('transform','translate3d(0px,0%,0px)');
   $("#site_url a:nth-child(4)").css('transform','translate3d(0px,100%,0px)');
   $(".link_site").attr("href", "http://media.alisonyoon.com/");
   $("#showcase video source").attr("src", "bose.mp4");
      $("#showcase video")[0].load();
   $("#site_title_wrap div:nth-child(1)").removeClass('selected');
   $("#site_title_wrap div:nth-child(2)").removeClass('selected');
   $("#site_title_wrap div:nth-child(4)").removeClass('selected');
   clicked=0;
    });
  }, function() {
    $(this).closest("ul").css("background", 'none');
    $(this).closest("ul").css("background-size", 'contain');
    });
     $('#burger-menu-link-4').hover(function(){
    $(this).closest("ul").css("background", 'url(images/aag.png) center no-repeat');
    $(this).closest("ul").css("background-size", 'contain');
    $(this).click(function(){
    $('#burger-menu').css('transform','translate3d(0, -100%, 0)');
    $('.burger-close').css('transform','translate3d(0, -108%, 0)');
    $('.burger-line-dark').css('transform','translate3d(0%, 0, 0)');
    $("#main").css('transform','translate3d(0px,-100%,0px)');
    $("#case").css('transform','translate3d(0px,0%,0px)');
    $("#site_title_wrap div:nth-child(4)").addClass('selected');
    $("#site_title_wrap div:nth-child(1)").css('transform','translate3d(0px,-150%,0px)');
    $("#site_title_wrap div:nth-child(2)").css('transform','translate3d(0px,-150%,0px)');
   $("#site_title_wrap div:nth-child(3)").css('transform','translate3d(0px,-150%,0px)');
   $("#site_title_wrap div:nth-child(4)").css('transform','translate3d(0px,0%,0px)');
   $("#site_type p:nth-child(1) ").css('transform','translate3d(0px,-100%,0px)');
   $("#site_type p:nth-child(2) ").css('transform','translate3d(0px,-100%,0px)');
   $("#site_type p:nth-child(3) ").css('transform','translate3d(0px,-100%,0px)');
   $("#site_type p:nth-child(4) ").css('transform','translate3d(0px,0%,0px)');
   $("#site_tool p:nth-child(1)").css('transform','translate3d(0px,-100%,0px)');
   $("#site_tool p:nth-child(2)").css('transform','translate3d(0px,-100%,0px)');
   $("#site_tool p:nth-child(3)").css('transform','translate3d(0px,-100%,0px)');
   $("#site_tool p:nth-child(4)").css('transform','translate3d(0px,0%,0px)');
   $("#site_url a:nth-child(1)").css('transform','translate3d(0px,-150%,0px)');
   $("#site_url a:nth-child(2)").css('transform','translate3d(0px,-150%,0px)');
   $("#site_url a:nth-child(3)").css('transform','translate3d(0px,-150%,0px)');
   $("#site_url a:nth-child(4)").css('transform','translate3d(0px,0%,0px)');
   $(".link_site").attr("href", "http://wp.alisonyoon.com/");
   $("#showcase video source").attr("src", "wp.mp4");
      $("#showcase video")[0].load();
   $("#site_title_wrap div:nth-child(1)").removeClass('selected');
   $("#site_title_wrap div:nth-child(2)").removeClass('selected');
   $("#site_title_wrap div:nth-child(3)").removeClass('selected');
   clicked=0;
    });
  }, function() {
    $(this).closest("ul").css("background", 'none');
    $(this).closest("ul").css("background-size", 'contain');
    });

   });
