//Below is the code for a console-box that documents what a user clicks on the sidebar, although not all buttons have links it will still register what the user has clicked. 

$(function(){
  $('#console-box').append('Console is ready:');
  
  $('li').click(function(){
    $('#console-box').append('<br>class:'+$(this).attr("class")+'|value: '+$(this).text()+'.');
    $(this).toggleClass('selected').siblings().removeClass('selected');
; 
    $('#console-box').append('<br>{"Selectio" : "'+$(this).text()+'"}');
  });
  
});
