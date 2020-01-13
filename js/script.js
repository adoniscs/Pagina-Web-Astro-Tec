// efeito para loader da pagina
    //<![CDATA[
$(window).on('load', function(){
    $('#hide .triangle .loading').fadeOut();
        $('#hide').delay(1000).fadeOut('slow');
    $('body').delay(1000).css({'overflow': 'visible'});
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

// efeito maquina de escrever no h1
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    for(let i = 0; i < textoArray.length; i++) {
    setTimeout(() => elemento.innerHTML += textoArray[i], 135 * i);
     }
   }

  // Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
  // function typeWriter(elemento) {
  //   const textoArray = elemento.innerHTML.split('');
  //   elemento.innerHTML = '';
  //   for(let i = 0; i < textoArray.length; i++) {
  //     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
  //   }
  // }

  const titulo = document.querySelector('h1');
  typeWriter(titulo);