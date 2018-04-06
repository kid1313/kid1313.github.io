window.onload=function(){
  //--------Переход на клавную страницу при клике на лого в шапке----------------
  
  document.querySelector('.header__logo').addEventListener("click", function(event){ 
    event.preventDefault();
    if(window.location.href.indexOf("index") > 0)
      location.href="index.html";
    else
      location.href="../index.html";
  });


};

//---------Отслеживание события закрытия для закрытия видео-------------------------------------------
document.onkeydown = function(event) {
  var kCode = window.event ? window.event.keyCode : (event.keyCode ? event.keyCode : (event.which ? event.which : null))
    switch (kCode)
    {
      // Нажат Escape
      case 27:
        CloseModal();
        break;
    }
};



 $(document).ready(function(){
  if(window.location.href.indexOf("help") > 0)
  {
     onClickFooterLink(location.hash.replace("#?",""));
     //onClickFooterLink(location.search.substring(1));
  }

  if(window.location.href.indexOf("capabilities.html#") > 0)
    ScrollUp();

  $(function(){
    console.log("я тут");
   $("#phone").mask("+7(999) 999-9999");
  });

});


//--------------------Проверка перехода в справку из футера---------------------


//-------------Закрытие модального окна видео--------------------------------------------------
function CloseModal(){
  document.querySelector('.modal_cover').style.display = "none";
  document.querySelector('.modal_video').style.display = "none";
  document.getElementsByClassName('review')[0].src = "";
}

function capab_click(id){ // переход на страницу возможностей, на соответсвующий пункт
  location.href="pages/capabilities.html" + "#" + id;
  return false;
};

function ScrollUp(){ //скролит вверх, чтобы курсор позиционировался на нужном пункте. Сдвиг 130px из-за фиксированного меню 
  if(window.location.hash != ""){
    window.scrollBy(0, -130);
  }
};


//------------------------Видео в модальном окне---------------------------------------------
function onPlay(event, id){
  event.preventDefault();
  document.querySelector('.modal_cover').style.display = "block";
  document.querySelector('.modal_video').style.display = "block";
  if(id == "main_review"){
    document.getElementsByClassName('review')[0].src = "https://www.youtube.com/embed/z5xDj658esg?rel=0&autoplay=1";
  }
  if(id == "setup_review"){
    document.getElementsByClassName('review')[0].src = "https://www.youtube.com/embed/C4e974kerTc?rel=0&autoplay=1";
  }
  document.querySelector('.modal_cover').addEventListener("click", function(event){
    event.preventDefault();
    CloseModal();
  });
  return false;
};


//-------------------------------Обраюотки страницы "Справка"------------------------------

//--------------------------------Разворачивание меню-------------------------------------

function  onClickMenu(id){ 
  var menuSubListArr = document.getElementsByClassName('help_menu__sub_list'); // список подменю
  var menuListArr = document.getElementsByClassName('help_menu__item'); //основное 
  for(var i = 0; i < menuSubListArr.length; i++)
  {
    if(menuSubListArr[i].id != id + "_sub")
    {
      if(!menuSubListArr[i].classList.contains('help_hide'))
        menuSubListArr[i].classList.add('help_hide');
    }
    else
      menuSubListArr[i].classList.remove('help_hide');
  }
  for(var j = 0; j < menuListArr.length; j++ )
  {
    if(menuListArr[j].id == id)
      menuListArr[j].classList.add('active_mark');
    else
      menuListArr[j].classList.remove('active_mark');
  }
  onClickSubMenu(document.querySelectorAll("#" + id + "_sub" + " > li:first-child")[0].id); // первый элемент в выбраном меню 
  return false;
}

//-------------------------------Открытие статьи----------------------------------------

function onClickSubMenu(id, flag){
  var article_id = id.split("-")[1];
  if(flag == 1){
    location.href = location.href.replace(location.search.substring(0), "?" + id);
  }
  var menuSubItemArr = document.getElementsByClassName('help_menu__sub_item'); //элементы списка подменю
  var articleItemArr = document.getElementsByClassName('help_article__item'); // массив статей
  location.hash = "?"+id;
  document.getElementById(id).classList.add('active_mark');
  for(var i = 0; i < menuSubItemArr.length; i++)
  {
    if(menuSubItemArr[i].id != id && menuSubItemArr[i].classList.contains('active_mark'))
      menuSubItemArr[i].classList.remove('active_mark');
  }
  for(var i = 0; i < articleItemArr.length; i++)
  {
    if(articleItemArr[i].id != article_id)
    {
      if(!articleItemArr[i].classList.contains('help_hide'))
        articleItemArr[i].classList.add('help_hide');
    }
    else
    {
      articleItemArr[i].classList.remove('help_hide');
    }
  }
  window.scrollTo(0,0);
  return false;
}

//-------------------Переход в Справку из подвала------------------------------------

function onClickFooterLink(id){

  var mainMenu_id = id.split("_")[0];
  onClickMenu(mainMenu_id)//mainMenu_id);
  onClickSubMenu(id);
  return false;
}


//---------------------------CallBack-----------------------------------------------
function  onClickCallback(){
  document.querySelector('.modal_callback').style.display = "block";
  return false;
}

function onCloseCallback(){
   document.querySelector('.modal_callback').style.display = "none";
   return false;
}