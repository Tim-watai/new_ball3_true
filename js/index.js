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
    
      // $('.f_wrap .f_bot ul.in').removeClass('active');
        // $('.f_wrap .f_bot ul.yet').addClass('active');
        btn_start.click(function(){
          if(sign_in.hasClass('active')){
            return  sign_active(false);
          }else{
            return  sign_active(true);
          }
        })

       function sign_active (sign){
      if(sign == false){
                sign_yet.addClass('active');
                sign_in.removeClass('active');
                list_yet.addClass('active');
        return  list_in.removeClass('active');
      }else{
                sign_yet.removeClass('active');
                sign_in.addClass('active');
                list_yet.removeClass('active');
        return  list_in.addClass('active');
      }
      }
      //<-----------

      //main頁面切換
      //球類內頁
      let balls = $('.balls_wrap');
      //新手,一般,高手_父級
      let switch_page = $('.switch_wrap');
      //
      let switch_normal = $('.switch_wrap .normal');
      let switch_beginner = $('.switch_wrap .beginner');
      let switch_senior = $('.switch_wrap .senior');
      let switch_search_bar = $('.switch_wrap .search_bar');
      let left_li = $('.left ul.index li');
      
      //球種
      let soc_page_beg = $('.balls_wrap .soc_page_beginner');
      let soc_page = $('.balls_wrap .soc_page_beginner_inner');
      let bas_page = $('.balls_wrap .bas_page_beginner_inner');
      let bask_page = $('.balls_wrap .bask_page_beginner_inner');

      //header變化
      let header_tag = [
        $('header .h_wrap ul li:nth-child(1)'),
        $('header .h_wrap ul li:nth-child(2)'),
        $('header .h_wrap ul li:nth-child(3)'),
        $('header .h_wrap ul li:nth-child(4)'),
        $('header .h_wrap ul li:nth-child(5)'),
        $('header .h_wrap ul li:nth-child(6)'),
    ];
  
      //我的
      function my_page_iswork(iswork){
        if(iswork == true){
          $('.container main').addClass('my_page');
          $('main .left ul.my_page').siblings().removeClass('active');
          $('main .left ul.my_page').addClass('active');
          // $('main .right .my_bill').css('display','block');
          dummy('my');
        }else{
          $('.container main').removeClass('my_page');
          $('main .left ul.my_page').siblings().addClass('active');
          $('main .left ul.my_page').removeClass('active');
          // $('main .right .my_bill').css('display','none');
          dummy();
        }
        
      }
      function header_active(num){
        let num_f = num - 1;
        header_tag[num_f].siblings().removeClass('active');
        header_tag[num_f].addClass('active');
      }
      function page_active (num){
        left_li.removeClass('active');
        if(num == 1){
          balls.css('display','none');
          switch_page.css('display','block');
          switch_normal.siblings().css('display','none');
          switch_normal.css('display','block');
          switch_search_bar.css('display','block');
          my_page_iswork(false);
          header_active(1);
        }
        else if(num == 2){
          balls.css('display','none');
          switch_page.css('display','block');
          switch_beginner.siblings().css('display','none');
          switch_beginner.css('display','block');
          switch_search_bar.css('display','block');
          my_page_iswork(false);
          header_active(1);
        }
        else if(num == 3){
          balls.css('display','none');
          switch_page.css('display','block');
          switch_senior.siblings().css('display','none');
          switch_senior.css('display','block');
          switch_search_bar.css('display','block');
          my_page_iswork(false);
          header_active(1);
        }
        else if(num == 4){
          balls.css('display','block');
          switch_page.css('display','none');
          soc_page_beg.siblings().css('display','none');
          soc_page_beg.css('display','block');
          switch_search_bar.css('display','block');
          $('.left ul.index li:nth-child(3)').addClass('active');
          my_page_iswork(false);
          header_active(1);
        }
        else if(num == 5){
          balls.css('display','block');
          switch_page.css('display','none');
          soc_page.siblings().css('display','none');
          soc_page.css('display','block');
          switch_search_bar.css('display','block');
          $('.left ul.index li:nth-child(3)').addClass('active');
          my_page_iswork(false);
          header_active(1);
        }
        else if(num == 6){
          balls.css('display','block');
          switch_page.css('display','none');
          bas_page.siblings().css('display','none');
          bas_page.css('display','block');
          switch_search_bar.css('display','block');
          $('.left ul.index li:nth-child(4)').addClass('active');
          my_page_iswork(false);
          header_active(1);
        }
        else if(num == 7){
          balls.css('display','block');
          switch_page.css('display','none');
          bask_page.siblings().css('display','none');
          bask_page.css('display','block');
          switch_search_bar.css('display','block');
          $('.left ul.index li:nth-child(5)').addClass('active');
          my_page_iswork(false);
          header_active(1);
        }
        else if(num == 8){
          //我的_即時注單
          let my_page_bill = $('.container main .right .my_bill');
          my_page_bill.css('display','block');
          my_page_bill.siblings().css('display','none');
          my_page_iswork(true);
          $('.left ul.my_page li:nth-child(8)').siblings().removeClass('active');
          $('.left ul.my_page li:nth-child(8)').addClass('active');
          header_active(6);
        }
        else if(num == 9){
          //我的_投注紀錄
          console.log('re')
          let my_page_bill_re = $('.container main .right .my_bill_record');
          my_page_bill_re.css('display','block');
          my_page_bill_re.siblings().css('display','none');
          my_page_iswork(true);
          $('.left ul.my_page li:nth-child(9)').siblings().removeClass('active');
          $('.left ul.my_page li:nth-child(9)').addClass('active');
          header_active(6);
        }
      
      }
      //新手&專業switch
      //一般
      $('.test li:nth-child(1)').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        page_active(1);
        sign_active(false);
      })
      //新手
      $('.test li:nth-child(2)').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        page_active(2);
        sign_active(true);
      })
      //專業
      $('.test li:nth-child(3)').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        page_active(3);
        sign_active(true);
      })
      
      //足球頁面
      //首頁
      $('.test li:nth-child(4)').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        page_active(4);
        sign_active(true);
      });
      //足球內頁
      $('.test li:nth-child(5)').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        page_active(5);
        sign_active(true);
      });
      //<--------------------
      //棒球內頁
      $('.test li:nth-child(6)').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        page_active(6);
        sign_active(true);
      });
      //<--------------------
      //籃球內頁
      $('.test li:nth-child(7)').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        page_active(7);
        sign_active(true);
      });
      //<--------------------
      //我的_即時注單
      $('.test li:nth-child(8)').click(function(){
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      page_active(8);
      sign_active(true);
      });
    //<--------------------
     //我的_投注紀錄
     $('.test li:nth-child(9)').click(function(){
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      page_active(9);
      sign_active(true);
      });
    //<--------------------
      //左邊list
      $('.left ul li:nth-child(3)').click(function(){
        page_active(5);
        sign_active(true);
      })
      $('.left ul li:nth-child(4)').click(function(){
        page_active(6);
        sign_active(true);
      })
      $('.left ul li:nth-child(5)').click(function(){
        page_active(7);
        sign_active(true);
      })
      //<--------------------
      //上方頁面
      
      //<--------------------
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
      $('.bet_box.blue.free_w .title').mousedown(
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
      
      
      //dummy同步本尊的寬
        let search_bar_obj = $('.container main .right .search_bar');
        let search_bar_dummy = $('.search_bar.fixed');
        let ball_search_dummy = $('.wrap.fixed');
        
        let obj_w = search_bar_obj.outerWidth();
            search_bar_dummy.css({width:obj_w});
            ball_search_dummy.css({width:obj_w});
      function dummy(page){
        search_bar_dummy.css({width:obj_w});
        ball_search_dummy.css({width:obj_w});
        if(page == 'my'){
          let search_bar_my = $('.container main.my_page .right .my_bill');
          let my_wrap = $('.container main.my_page .right .my_bill .wrap.fixed');
          let obj_w = search_bar_my.outerWidth();
          my_wrap.css({width:obj_w});
          console.log('my')
        }
      }
      //
      //視窗偵測
        $('.container main .right').scroll(function () {
      
          var scrollVal = $(this).scrollTop();
        //  console.log('scrollVal = '+scrollVal);
         if(scrollVal >= 50){
          $('.search_bar.fixed,.right .wrap.fixed').addClass('active');
         }else if(scrollVal <= 49){
          $('.search_bar.fixed,.right .wrap.fixed').removeClass('active');
         }
        });
      //<------------------
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
  }); 