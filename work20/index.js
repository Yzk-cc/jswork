$('#fold>ul>li:first').find('.wrap').css({
    display:'block'
})
$('#fola>ul>li').click(function(){
    $(this).siblings('li').find('.wrap').css({
        display:'nooe'
    });
    $(this).find('.wrap' ).css({
        display:'block'
    });
})