window.onload=function(){
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
};

function capab_click(id){
  location.href="pages/capabilities.html" + "#" + id;
  return false;
};

function ScrollUp(){
  if(window.location.href.indexOf("#") > 0){
    window.scrollBy(0, -120);
  }
};