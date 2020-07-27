//<<<<<<<<<<<<<<此頁管理首頁﹑與測試>>>>>>>>>>>>>>
$(document).ready(function() {
    console.log("index ready");
      //測試鈕開關
      $('.all_test li:nth-child(1)').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.test,.test2,.en_cn').css('display','none');
      })
      $('.all_test li:nth-child(2)').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.test,.test2,.en_cn').css('display','block');
      })
      //<--------
      //中英文切換
      $('.en_cn li.cn').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('header.cn').css('display','block');
        $('.container.cn').css('display','block');
        $('header.en').css('display','none');
        $('.container.en').css('display','none');
      })
      $('.en_cn li.en').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('header.cn').css('display','none');
        $('.container.cn').css('display','none');
        $('header.en').css('display','block');
        $('.container.en').css('display','block');
      })
      //<--------------------
      
      //登入狀態切換
      let sign_yet = $('.right .sign_yet');
      let sign_in = $('.right .sign_in');
      let list_yet = $('.f_wrap .f_bot ul.yet');
      let list_in = $('.f_wrap .f_bot ul.in');
      let btn_start = $('header .h_wrap .right');
      let right_2_live = $('.right_2');
      let head_wrap = $('.h_wrap');
      let main_page = $('main');
      let search_bar = $('.search_bar');
      let r_wrap = $('.right .wrap');
        btn_start.click(function(){
          if(sign_in.hasClass('active')){
            return  sign_active(false);
          }else{
            return  sign_active(true);
          }
        })

       function sign_active (sign){
         console.log('sign ='+sign)
      if(sign == false){
                sign_yet.addClass('active');
                sign_in.removeClass('active');
                list_yet.addClass('active');
                right_2_live.removeClass('active');
                head_wrap.removeClass('live_mode');
                main_page.removeClass('live_mode');
                search_bar.addClass('big_size');
                r_wrap.addClass('big_size');
        return  list_in.removeClass('active');
      }else{
                sign_yet.removeClass('active');
                sign_in.addClass('active');
                list_yet.removeClass('active');
                right_2_live.addClass('active');
                head_wrap.addClass('live_mode');
                main_page.addClass('live_mode');
                search_bar.removeClass('big_size');
                r_wrap.removeClass('big_size');
        return  list_in.addClass('active');
      }
      }
      //<-----------

  

      //search main
      $('.s_box').click(function(){
        
        if($(this).parent().parent().hasClass('active') == true){
          console.log('s_box');
          return  $(this).parent().parent().removeClass('active');
        }else{
          $(this).parent().parent().addClass('active');
        }
      })
      //<----------
      //search child
      $('.gt ul').hide();
      $('.gt').click(function(){
        if($(this).hasClass('active') != true){
                  $(this).addClass('active');
          return $(this).children("ul").slideDown('slow', function() {});
        }else{
                $(this).removeClass('active');
          return $(this).children("ul").hide();
        }
      })
      //<-----------
      
      //彈窗
      //彈窗移動
      let isMove = true;
      //單關移動
      $('.bet_box.blue .title').mousedown(
          function(event){
          let isMove = true;
          let abs_x = event.pageX - $('aside .bet_box.blue').offset().left;
          let abs_y = event.pageY - $('aside .bet_box.blue').offset().top;
          //abs > 滑鼠距離-物件距離與邊框距離 = 當前距離
          let e_px = event.pageX;
          let leftt = $('aside .bet_box').offset().left;
          $(document).mousemove(
            function(event){
              if (isMove) {
              let obj = $('aside.bet_solo .bet_box');
              obj.css({'left':event.pageX - abs_x, 'top':event.pageY - abs_y});
              }
              //move接up
            }).mouseup(
          function () {
            isMove = false;
          }
      )//up
        })//down
      
      //<------
      //串關移動
      
      $('.bet_box.red .title').mousedown(
          function(event){
          let isMove = true;
          let abs_x = event.pageX - $('aside .bet_box.red').offset().left;
          let abs_y = event.pageY - $('aside .bet_box.red').offset().top;
          //abs > 滑鼠距離-物件距離與邊框距離 = 當前距離
          let e_px = event.pageX;
          let leftt = $('aside .bet_box').offset().left;
      
          $(document).mousemove(
            function(event){
              if (isMove) {
              let obj = $('aside.bet_double .bet_box');
              obj.css({'left':event.pageX - abs_x, 'top':event.pageY - abs_y});
                //滑鼠距離 - 物件當前距離abs = 增量
        
              }
              //move接up
            }).mouseup(
          function () {
            isMove = false;
          }
      )//up
        })//down
      
      //<------
      
      
      //單關
      $('.test2 li:nth-child(1)').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.bet_double').css('display','none');
        $('.bet_solo').css('display','block');
      });
      //單關確認
      $('.bet_btn').click(function(){
        $('.computer').removeClass('active');
        $('.check_page ,.hidden_i_block').addClass('active');
      });
      //<------------------
      //串關
      $('.test2 li:nth-child(2)').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.bet_double').css('display','block');
        $('.bet_solo').css('display','none');
      });
      //<------------------
      //關閉彈窗
      $('aside .bet_box .close').click(function(){
        $('.test2 li').siblings().removeClass('active');
      $('.bet_double').css('display','none');
      $('.bet_solo').css('display','none');
      //重製注單
      $('.computer').addClass('active');
        $('.check_page ,.hidden_i_block ').removeClass('active');
      })
      //關閉all彈窗
      $('.test2 li:nth-child(3)').click(function(){
        $(this).siblings().removeClass('active');
      
        $('.bet_double').css('display','none');
        $('.bet_solo').css('display','none');
      });
      //<------------------

      //註冊彈窗close
      let close_b = $('aside .sign_box .sign_close');
      let sign_up = $('aside.sign_up,aside.sign_up_ok');
      let sign_inin = $('aside.sign_in');
      $('.test2 li:nth-child(4)').click(function(){
        sign_up.addClass('active');
      })
      $('.test2 li:nth-child(5)').click(function(){
        sign_inin.addClass('active');
      })
      close_b.click(function(){
        console.log('sign_c')
        $(this).parent().parents().removeClass('active')
      })
      //<-----------------

      //聲明infor
      let infor_con = $('.infor_con');
      $('.icon_infor').click(function(){
        if( infor_con.hasClass('active') != true){
          return infor_con.addClass('active');
        }else{
          return infor_con.removeClass('active');
        }
      })
      //<-----------------
 
      //直播區域
      //tag
        let live_page = $('.live_content');
        let talk_page = $('.talk_content');
        function tagChage (my){
          if($(my).hasClass('active') != true){
                  $(my).siblings().removeClass('active');
                  $(my).addClass('active');
          }
        }
      $('.live_page .live_games .live_tag .live_1').click(function(){
        let my = $(this);
        tagChage(my);
        live_page.siblings().removeClass('active');
        live_page.addClass('active');
      })
      $('.live_page .live_games .live_tag .live_2').click(function(){
        let my = $(this);
        tagChage(my);
        talk_page.siblings().removeClass('active');
        talk_page.addClass('active');
      })
      //ball_drow
      $('.live_content .live_balls .ball_wrap').click(function(){
        if($(this).hasClass('active') != true){
                $(this).addClass('active');
                $(this).siblings().removeClass('start');
        return  $(this).children(".ball_drow").slideDown("slow");
      
        }else{
                $(this).removeClass('active');
                $(this).siblings().addClass('start');
        return  $(this).children(".ball_drow").hide();
        }
      
      })
      //<-----------------
//新手專業switch
let hardchange = $(' main .right .search_bar p.beginner');
let beginner_page = $('.page_beginner');
let senior_page = $('.page_senior');
hardchange.click(function(){
  if($(this).hasClass('start')!=true){
    change_methods('beg');
    $(this).addClass('start');
  }else{
    change_methods('sen');
    $(this).removeClass('start');
  }
})
function change_methods(ishard){
  if(ishard == 'beg'){
    hardchange.text('新手版');
    beginner_page.css('display','block');
    senior_page.css('display','none');
  }else if(ishard == 'sen')
  {
    hardchange.text('專業版');
    beginner_page.css('display','none');
    senior_page.css('display','block');
  }
}
//<---------------------------

  }); 