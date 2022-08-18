
$(function(){
    // ---------gnb-----------------
      // 1. 열기: #toggle-btn 클릭시 #gnb on
      $('.toggle').click(function(){
        $('#list').addClass('on');
      });
      // 2. 닫기: #btn-close 클릭시 #gnb 닫음
      $('#btn-close').click(function(){
        $('#list').removeClass('on');
      });
  
  
      
  });