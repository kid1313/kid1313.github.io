      var intTimer=0;
      var articleItem = document.getElementsByClassName('article__item');
      var modalItem = document.getElementsByClassName('modal-article__item');
      var modalShift = ['1800px', '1530px', '1250px'];
      var modalHeightTablet = [];
      //----------------------------------------------------------------
      //-------------------------Слайдер мобил--------------------------
      //----------------------------------------------------------------

      
      document.addEventListener('DOMContentLoaded', function()
      {
        intTimer=0;
        articleToggle();
      });

       function articleToggle(){
        var togglerItem = document.getElementsByClassName('slader__toggle');
        if(document.body.clientWidth == 320)
        {
          var intervalID = setInterval(function() {
            intTimer = intervalID;
            for(var i=0; i<articleItem.length; i++)
            {
              if(!articleItem[i].classList.contains('hidden'))
              {
                articleItem[i].classList.add("hidden");
                togglerItem[i].classList.remove("toggler");
                i++;
                if(i != articleItem.length)
                {
                  articleItem[i].classList.remove("hidden");
                  togglerItem[i].classList.add("toggler");
                }
                else
                {
                  articleItem[0].classList.remove("hidden");
                  togglerItem[0].classList.add("toggler");
                }
              }
            }
          }, 5000);
        }
      };

      function btnReadMore(id){
        if(document.body.clientWidth == 320)
        {
          if(intTimer!=0)
          {
            clearInterval(intTimer);
            modalSlide();
          }
        }
        if(document.body.clientWidth == 720)
        {
          funModalTabletHihgt();
          var i = id.replace("d_","");
           // articleItem[i].style.marginBottom = modalHeightTablet[i];
          var h = funArticleTabletHight(i);
           articleItem[i].style.height =  h - 30 + "px";
           document.getElementById(id).classList.add("hidden--tablet");
           modalItem[i].classList.remove("hidden--tablet");
            var a = +modalShift[i].replace("px","");
            var b = +modalHeightTablet[i].replace("px","");
            shift = +a + b + "px";
            modalItem[i].style.marginTop = "-" + shift;
            document.querySelector(".modal-overlay").style.display = "block";
            articleItem[i].style.zIndex = "20";
            modalItem[i].style.zIndex = "20";
            var v_opacity = 0;
            setTimeout(function(){
              setInterval(function(){
                if(v_opacity<1)
                {
                  v_opacity = +v_opacity + 0.1;
                  modalItem[i].style.opacity = v_opacity;
                }
              }, 50);
            },500);
        }
        return false;
      };

      function modalSlide(){
         if(document.body.clientWidth == 320)
         {
            for(var i=0; i<articleItem.length; i++)
            {
              if(!articleItem[i].classList.contains('hidden'))
              {
                modalItem[i].classList.remove('hidden');
                var computedStyle = getComputedStyle(modalItem[i]);
                var h = computedStyle.height;
                h = +(h.replace("px","")) + 50 + 'px';
                document.querySelector(".global-wrapper").style.marginTop = h;
              }
            }
          }
      };

      function modalClose(){
        if(document.body.clientWidth == 320)
        {
          document.querySelector(".global-wrapper").style.marginTop = 0;
          setTimeout(function(){
            for(var i=0; i<modalItem.length; i++)
            {
              if(!modalItem[i].classList.contains('hidden'))
                modalItem[i].classList.add('hidden');
            }
          }, 500);
          articleToggle();
        }
        if(document.body.clientWidth == 720)
        {
          var j = "null";
          for(var i=0; i<modalItem.length; i++)
          {
            if(!modalItem[i].classList.contains('hidden--tablet'))
              j = i;
          }
            if(j!="null")
            {
              var v_opacity = 1;
              setInterval(function(){
                if(v_opacity>0)
                {
                  v_opacity = v_opacity - 0.1;
                  modalItem[j].style.opacity = v_opacity;
                }
              }, 50);
              setTimeout(function()
              {
                modalItem[j].classList.add("hidden--tablet");
                document.getElementById("d_"+j).classList.remove("hidden--tablet");
                articleItem[j].style.height = "250px";
                document.querySelector(".modal-overlay").style.display = "";
                articleItem[j].style.zIndex = "";
                modalItem[j].style.zIndex = "";
              },500);
            }
        }
        return false;
        };

       //------------------------------------------------------------------
       //-------------------------Меню мобил-------------------------------
       //------------------------------------------------------------------

       document.querySelector(".menu__button").addEventListener("click", function(){
        document.querySelector(".menu__list").classList.toggle("hidden");
       });

      
      function onClickReviews()
      {
         if(document.body.clientWidth == 320)
            location.href = "../pages/reviews.html";
         return false;
      }


      //--------------------------------------------------------------------
      //--------------------------Прайс мобил-------------------------------
      //--------------------------------------------------------------------

      var modalPrice = document.getElementsByClassName('price__descr');
      var modalHeight = [];

      document.addEventListener('DOMContentLoaded', function(){
        for(var i=0; i<modalPrice.length; i++){
          var computedStyle = getComputedStyle(modalPrice[i]);
          var h = computedStyle.height;
          modalHeight[i] = (h.replace("px","")) - 30 + "px";
          modalPrice[i].style.marginTop = "-" + modalHeight[i];
        }
        setTimeout(function(){
           for(var i=0; i<modalPrice.length; i++)
           {
              modalPrice[i].classList.add("add_transition");
           }
        },200);
      });

      function btnClick(id){
        var i = id.replace("btn_","");
        if((getComputedStyle(modalPrice[i]).marginTop).replace("px","") < 0)
        {
          modalPrice[i].style.marginTop = 0;
          document.getElementById(id).innerHTML = "Свернуть";
        }
        else
        {
          modalPrice[i].style.marginTop = "-" + modalHeight[i];
          document.getElementById(id).innerHTML = "Подробнее";
        }
      };

      //-------------------------------------------------------------------------
      //---------------------------Таблетка--------------------------------------
      //-------------------------------------------------------------------------

      window.onresize = windowReload;

      function windowReload(){
          location.reload();
          console(navigator.appName);
      }

      function funModalTabletHihgt(){
        if(document.body.clientWidth == 720)
        {
          for(var i=0; i<modalItem.length; i++)
          {
             modalItem[i].classList.remove('hidden--tablet');
             var computedStyle = getComputedStyle(modalItem[i]);
             modalHeightTablet[i] = computedStyle.height;
          }
           for(var i=0; i<modalItem.length; i++)
             modalItem[i].classList.add('hidden--tablet');
        }
      }

      function funArticleTabletHight(i)
      {
           var computedStyle = getComputedStyle(articleItem[i]);
           var h = +(computedStyle.height).replace("px","");
           h = +(modalHeightTablet[i].replace("px","")) + h;
           return h;
      }