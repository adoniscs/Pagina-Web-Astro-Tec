// efeito para loader da pagina
    //<![CDATA[
$(window).on('load', function(){
    $('#hide .triangle .loading').fadeOut();
        $('#hide').delay(1500).fadeOut('slow');
    $('body').delay(1500).css({'overflow': 'visible'});
})
// efeito do menu 
    $(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('nav').addClass('bkgColor');
    }
    else{
        $('nav').removeClass('bkgColor');
   }
})