window.onload=function(){
  
  //--------------Всплывающее меню-------------------------------------------
  
  document.querySelector('.header__menu_help').onmouseover = function(){
   	document.querySelector('.popup_menu').style.display = "block";
  };
  document.querySelector('.popup_menu').onmouseover =function(){
    document.querySelector('.popup_menu').style.display = "block";
  };
  document.querySelector('.popup_menu').onmouseout =function(){
    document.querySelector('.popup_menu').style.display = "";
  };
  document.querySelector('.header__menu_help').onmouseout = function(){
    document.querySelector('.popup_menu').style.display = "";
  };
  
  ScrollUp();
  
  //--------Переход на клавную страницу при клике на лого в шапке----------------
  
  document.querySelector('.header__logo').addEventListener("click", function(event){ 
    event.preventDefault();
    if(window.location.href.indexOf("index") > 0)
      location.href="index.html";
    else
      location.href="../index.html";
  });
  
  //---------Видеообзор на главной------------------------------------------------
  document.querySelector('.main__theme__video').addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector('.modal_cover').style.display = "block";
    document.querySelector('.modal_video').style.display = "block";
    document.getElementsByClassName('review')[0].src = "https://www.youtube.com/embed/z5xDj658esg?rel=0&autoplay=1";
  });

//---------Закрытие видео--------------------------------------------------------
document.querySelector('.modal_cover').addEventListener("click", function(event){
    event.preventDefault();
    CloseModal();
  });

//--------Закрытие видео по ECs------------------------------------
document.onkeydown = function(event) {
  var kCode = window.event ? window.event.keyCode : (event.keyCode ? event.keyCode : (event.which ? event.which : null))
    switch (kCode)
    {
      // Нажат Escape
      case 27:
        CloseModal();
        break;
    }
      return false;
  }

};

function CloseModal(){
  document.querySelector('.modal_cover').style.display = "none";
  document.querySelector('.modal_video').style.display = "none";
  document.getElementsByClassName('review')[0].src = "not.found/404";
}

function capab_click(id){ // переход на страницу возможностей, на соответсвующий пункт
  location.href="pages/capabilities.html" + "#" + id;
  return false;
};

function ScrollUp(){ //скролит вверх, чтобы курсор позиционировался на нужном пункте. Сдвиг 120px из-за фиксированного меню 
  if(window.location.href.indexOf("#") > 0){
    window.scrollBy(0, -120);
  }
};

