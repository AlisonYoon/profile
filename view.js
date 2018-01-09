// JavaScript Document

$(document).ready(function () {

 $(".flex .bttn").click(function(){
   $("#main").css('transform','translate3d(0px,-100%,0px)');
   $("#case").css('transform','translate3d(0px,0%,0px)');
   $("#site_title_wrap div:first-child").addClass('selected');
   $("#site_title_wrap div:nth-child(1)").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
   $("#site_title_wrap div:nth-child(2)").css({'transform':'translate3d(0px,100%,0px)','opacity':'0'});
   $("#site_title_wrap div:nth-child(3)").css({'transform':'translate3d(0px,100%,0px)','opacity':'0'});
   $("#site_title_wrap div:nth-child(4)").css({'transform':'translate3d(0px,100%,0px)','opacity':'0'});
   $("#site_type p:nth-child(1) ").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
   $("#site_type p:nth-child(2) ").css({'transform':'translate3d(0px,100%,0px)','opacity':'0'});
   $("#site_type p:nth-child(3) ").css({'transform':'translate3d(0px,100%,0px)','opacity':'0'});
   $("#site_type p:nth-child(4) ").css({'transform':'translate3d(0px,200%,0px)','opacity':'0'});
   $("#site_url a:nth-child(1)").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
   $("#site_url a:nth-child(2)").css({'transform':'translate3d(0px,100%,0px)','opacity':'0'});
   $("#site_url a:nth-child(3)").css({'transform':'translate3d(0px,100%,0px)','opacity':'0'});
   $("#site_url a:nth-child(4)").css({'transform':'translate3d(0px,100%,0px)','opacity':'0'});
   $("#showcase video source").attr("src", "unep.mp4");
      $("#showcase video")[0].load();
   $("#site_title_wrap div:nth-child(2)").removeClass('selected');
   $("#site_title_wrap div:nth-child(3)").removeClass('selected');
   $("#site_title_wrap div:nth-child(4)").removeClass('selected');
 });



 $("#nav_page a:nth-child(3)").click(function(){
  if($("#site_title_wrap div:first-child").hasClass('selected')){
     $("#site_title_wrap div:contains('UNEP')").css('transform','translate3d(0px,-150%,0px)');
     $("#site_title_wrap div:contains('Flower')").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
     $("#site_type p:contains('Desktop Website') ").css('transform','translate3d(0px,-100%,0px)');
     $("#site_type p:contains('Mobile Website') ").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
     $("#site_tool p:nth-child(1)").css('transform','translate3d(0px,-100%,0px)');
     $("#site_tool p:nth-child(2)").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
     $("#site_url a:nth-child(1)").css('transform','translate3d(0px,-150%,0px)');
     $("#site_url a:nth-child(2)").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
      $(".link_site").attr("href", "http://mobile.alisonyoon.com/");
      $("#showcase video source").attr("src", "mobile.mp4");
      $("#showcase video")[0].load();
     $("#site_title_wrap div:first-child").removeClass('selected');
     $("#site_title_wrap div:nth-child(2)").addClass('selected');
  } else if($("#site_title_wrap div:nth-child(2)").hasClass('selected')){
     $("#site_title_wrap div:nth-child(2)").css('transform','translate3d(0px,-150%,0px)');
    $("#site_title_wrap div:nth-child(3)").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
    $("#site_type p:nth-child(2) ").css('transform','translate3d(0px,-100%,0px)');
    $("#site_type p:nth-child(3) ").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
    $("#site_tool p:nth-child(2)").css('transform','translate3d(0px,-100%,0px)');
    $("#site_tool p:nth-child(3)").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
    $("#site_url a:nth-child(2)").css('transform','translate3d(0px,-150%,0px)');
    $("#site_url a:nth-child(3)").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
    $(".link_site").attr("href", "http://media.alisonyoon.com/");
    $("#showcase video source").attr("src", "bose.mp4");
      $("#showcase video")[0].load();
    $("#site_title_wrap div:nth-child(2)").removeClass('selected');
    $("#site_title_wrap div:nth-child(3)").addClass('selected');
  } else if($("#site_title_wrap div:nth-child(3)").hasClass('selected')){
     $("#site_title_wrap div:nth-child(3)").css('transform','translate3d(0px,-150%,0px)');
    $("#site_title_wrap div:nth-child(4)").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
    $("#site_type p:nth-child(3) ").css('transform','translate3d(0px,-100%,0px)');
    $("#site_type p:nth-child(4) ").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
    $("#site_tool p:nth-child(3)").css('transform','translate3d(0px,-100%,0px)');
    $("#site_tool p:nth-child(4)").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
    $("#site_url a:nth-child(3)").css('transform','translate3d(0px,-150%,0px)');
    $("#site_url a:nth-child(4)").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
    $(".link_site").attr("href", "http://okanaji.com");
    $("#showcase video source").attr("src", "wp.mp4");
      $("#showcase video")[0].load();
    $("#site_title_wrap div:nth-child(3)").removeClass('selected');
    $("#site_title_wrap div:nth-child(4)").addClass('selected');
  };
});



 $("#nav_page a:nth-child(1)").click(function(){
  if($("#site_title_wrap div:first-child").hasClass('selected')){
    $("#main").css('transform','translate3d(0px,0%,0px)');
    $("#case").css('transform','translate3d(0px,100%,0px)');
    $("#site_title_wrap div:first-child").addClass('selected');
    $(".link_site").attr("href", "http://unep.alisonyoon.com/");
  } else if($("#site_title_wrap div:nth-child(2)").hasClass('selected')){
     $("#site_title_wrap div:nth-child(2)").css({'transform':'translate3d(0px,100%,0px)','opacity':'0'});
    $("#site_title_wrap div:nth-child(1)").css('transform','translate3d(0px,0%,0px)');
    $("#site_type p:nth-child(2) ").css({'transform':'translate3d(0px,100%,0px)','opacity':'0'});
    $("#site_type p:nth-child(1) ").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
    $("#site_tool p:nth-child(2)").css({'transform':'translate3d(0px,100%,0px)','opacity':'0'});
    $("#site_tool p:nth-child(1)").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
    $("#site_url a:nth-child(2)").css({'transform':'translate3d(0px,100%,0px)','opacity':'0'});
    $("#site_url a:nth-child(1)").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
    $(".link_site").attr("href", "http://unep.alisonyoon.com/");
    $("#showcase video source").attr("src", "unep.mp4");
      $("#showcase video")[0].load();
    $("#site_title_wrap div:nth-child(2)").removeClass('selected');
    $("#site_title_wrap div:nth-child(1)").addClass('selected');
  } else if($("#site_title_wrap div:nth-child(3)").hasClass('selected')){
     $("#site_title_wrap div:nth-child(3)").css({'transform':'translate3d(0px,100%,0px)','opacity':'0'});
    $("#site_title_wrap div:nth-child(2)").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
    $("#site_type p:nth-child(3) ").css({'transform':'translate3d(0px,100%,0px)','opacity':'0'});
    $("#site_type p:nth-child(2) ").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
    $("#site_tool p:nth-child(3)").css({'transform':'translate3d(0px,100%,0px)','opacity':'0'});
    $("#site_tool p:nth-child(2)").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
    $("#site_url a:nth-child(3)").css({'transform':'translate3d(0px,100%,0px)','opacity':'0'});
    $("#site_url a:nth-child(2)").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
    $(".link_site").attr("href", "http://mobile.alisonyoon.com/");
    $("#showcase video source").attr("src", "mobile.mp4");
      $("#showcase video")[0].load();
    $("#site_title_wrap div:nth-child(3)").removeClass('selected');
    $("#site_title_wrap div:nth-child(2)").addClass('selected');
  }else if($("#site_title_wrap div:nth-child(4)").hasClass('selected')){
     $("#site_title_wrap div:nth-child(4)").css({'transform':'translate3d(0px,100%,0px)','opacity':'0'});
    $("#site_title_wrap div:nth-child(3)").css('transform','translate3d(0px,0%,0px)');
    $("#site_type p:nth-child(4) ").css({'transform':'translate3d(0px,100%,0px)','opacity':'0'});
    $("#site_type p:nth-child(3) ").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
    $("#site_tool p:nth-child(4)").css({'transform':'translate3d(0px,200%,0px)','opacity':'0'});
    $("#site_tool p:nth-child(3)").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
    $("#site_url a:nth-child(4)").css({'transform':'translate3d(0px,100%,0px)','opacity':'0'});
    $("#site_url a:nth-child(3)").css({'transform':'translate3d(0px,0%,0px)',"opacity":'1'});
    $(".link_site").attr("href", "http://media.alisonyoon.com/");
    $("#showcase video source").attr("src", "bose.mp4");
      $("#showcase video")[0].load();
    $("#site_title_wrap div:nth-child(4)").removeClass('selected');
    $("#site_title_wrap div:nth-child(3)").addClass('selected');
  };
});

});
