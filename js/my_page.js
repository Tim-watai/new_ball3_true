//<<<<<<<<<<<<此頁管理我的頁面>>>>>>>>>>>>
$(document).ready(function(){
    console.log('my ready');
    let my_bill = $('main.my_page .right .my_bill .basic_bill');
    let bill_name = $('.basic_bill .b_name');

    function bill_open (myself){
        if(myself.parent().hasClass('active') != true){
            myself.parent().addClass('active');
        }else{
            myself.parent().removeClass('active');
        }
    }
    bill_name.click(function(){
      let myself = $(this);
      bill_open(myself);
    })

})