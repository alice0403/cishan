$('.row>span').click(function(){
    console.log($(this).attr("id"),'id');
    clear();
    $(this).addClass('select');
});


$('.inputMoney').click(function(){
    console.log('33243224');
    clear();
    $(this).addClass('inputSelect');
});

function clear(){
    $('.row>span').each(function(){
        if($(this).hasClass('select')){
            $(this).removeClass('select');
        }
    });
    if($('.inputMoney').hasClass('inputSelect')){
        $('.inputMoney').removeClass('inputSelect');
    }
}

$('.btn').click(function(){
    if($('.inputMoney').hasClass('inputSelect')){
        console.log($('.inputMoney>input').val(),'input的值');
    }else{
        console.log($('.select').attr("id"),'选择的值')
    }
    // location.href="result.html";
});