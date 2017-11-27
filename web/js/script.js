function serialize(e){if(e&&"FORM"===e.nodeName){var t,n,i=[];for(t=e.elements.length-1;t>=0;t-=1)if(""!==e.elements[t].name)switch(e.elements[t].nodeName){case"INPUT":switch(e.elements[t].type){case"text":case"email":case"hidden":case"password":case"button":case"reset":case"submit":i.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"checkbox":case"radio":e.elements[t].checked&&i.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value))}break;case"TEXTAREA":i.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"SELECT":switch(e.elements[t].type){case"select-one":i.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"select-multiple":for(n=e.elements[t].options.length-1;n>=0;n-=1)e.elements[t].options[n].selected&&i.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].options[n].value))}break;case"BUTTON":switch(e.elements[t].type){case"reset":case"submit":case"button":i.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value))}}return i.join("&")}}!function(){"use strict";var e=ctme.Carousel=function(){},t=document.getElementById("buy"),n=document.getElementById("partners"),i=document.getElementById("mainSwiper");e.prototype.buySwiper=function(){var e=new Swiper(t,{autoplay:{delay:2500},slidesPerView:4,slidesPerGroup:4,spaceBetween:47,speed:400,pagination:{el:".swiper-pagination",clickable:!0},lazy:!0,watchSlidesVisibility:!0,breakpoints:{640:{slidesPerView:1,slidesPerGroup:1,spaceBetween:0},1023:{slidesPerView:2,slidesPerGroup:2,spaceBetween:20},1439:{slidesPerView:3,slidesPerGroup:3,spaceBetween:20}},on:{resize:function(){setTimeout(function(){e.update()},200)}}});t.addEventListener("mouseover",function(){e.autoplay.stop()}),t.addEventListener("mouseout",function(){e.autoplay.start()})},e.prototype.gallery=function(){var e=new Swiper(".gallery-top",{slidesPerView:1,navigation:{nextEl:".swiper-button--next",prevEl:".swiper-button--prev"}}),t=new Swiper(".gallery-thumbs",{centeredSlides:!0,slidesPerView:"auto",touchRatio:.2,slideToClickedSlide:!0,breakpoints:{640:{slidesPerView:3}}});e.controller.control=t,t.controller.control=e},e.prototype.mainSwiper=function(){new Swiper(i,{autoplay:{delay:4500},loop:!0,slidesPerView:1,speed:400})},e.prototype.partnersSwiper=function(){function e(e){var t=0;for(var n in e)e.hasOwnProperty(n)&&++t;return t}var t,i=n.getElementsByClassName("swiper-pagination")[0],o=new Swiper(n,{autoplay:!0,slidesPerView:5,slidesPerGroup:5,speed:400,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{375:{slidesPerView:1,slidesPerGroup:1},640:{slidesPerView:2,slidesPerGroup:2},767:{slidesPerView:3,slidesPerGroup:3},1023:{slidesPerView:4,slidesPerGroup:4}},on:{init:function(){setTimeout(function(){e(t=i.getElementsByClassName("swiper-pagination-bullet"))<=1&&(i.style.display="none")},10)},resize:function(){setTimeout(function(){o.update(),e(t=i.getElementsByClassName("swiper-pagination-bullet"))>1?i.style.display="block":i.style.display="none"},10)}}})},e.prototype.init=function(){var e=document.getElementById("thumbsGallery");t&&ctme.Carousel.buySwiper(),document.body.contains(i)&&ctme.Carousel.mainSwiper(),document.body.contains(n)&&ctme.Carousel.partnersSwiper(),document.body.contains(e)&&ctme.Carousel.gallery()},ctme.Carousel=new e}(window.ctme=window.ctme||{}),function(){"use strict";var e=ctme.Form=function(){},t=document.getElementById("contactForm");e.prototype.init=function(){document.body.contains(t)&&this.enable()},e.prototype.ajax=function(){var e=document.querySelector(".js-spinner"),n=document.getElementById("submit");classie.add(n,"is-hidden"),classie.remove(e,"is-hidden");var i=$(document.getElementById("contactForm")),o=i.attr("action"),s=i.attr("method"),a=document.querySelector(".c-contactform__fields"),c=document.querySelector(".c-contactform__thanks");$.ajax({cache:!1,url:o,type:s,data:i.serialize(),success:function(e,n,i){if("ok"==e){classie.remove(c,"is-hidden"),classie.add(a,"is-hidden");var o,s=$(t).offset().top,r=$("body, html"),l=$(document).scrollTop();Math.abs(s-l);window.innerWidth>640?o=56:ofset=70,$(document).scrollTop(l),r.animate({scrollTop:s-o},{duration:500})}},error:function(t){setTimeout(function(){classie.remove(n,"is-hidden"),classie.add(e,"is-hidden")},1e3),alert("error: "+t.status+" "+t.statusText)}})},e.prototype.enable=function(){var t=document.getElementById("contactForm"),n={trigger:"change",successClass:"has-success",errorClass:"has-error",classHandler:function(e){return e.$element.closest(".c-form__wrap")}};$(t).parsley(n).on("form:success",function(t){e.prototype.ajax()}),t.reset(),window.Parsley.on("form:submit",function(){return!1}),function(){function e(e){classie.add(e.target.parentNode,"input--filled")}function t(e){""===e.target.value.trim()&&classie.remove(e.target.parentNode,"input--filled")}String.prototype.trim||function(){var e=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;String.prototype.trim=function(){return this.replace(e,"")}}(),[].slice.call(document.querySelectorAll(".input__field")).forEach(function(n){""!==n.value.trim()&&classie.add(n.parentNode,"input--filled"),n.addEventListener("focus",e),n.addEventListener("blur",t)})}()},ctme.Form=new e}(window.ctme=window.ctme||{}),function(){"use strict";var e=ctme.Flags=function(){};e.prototype.init=function(e){var t=document.getElementById("currentFlag"),n=document.getElementById("flags");t.addEventListener("click",function(e){classie.toggle(n,"is-visible"),e.returnValue=!1})},ctme.Flags=new e}(window.ctme=window.ctme||{}),function(){"use strict";var e=function(e){var t=(window.pageYOffset||window.scrollY)+window.innerHeight;if(e.getBoundingClientRect().top+(window.pageYOffset||window.scrollY)<t)return!0},t=function(){for(var e=document.getElementsByClassName("js-goto"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){var t=e.currentTarget.getAttribute("href"),n=0,i=window.pageYOffset||window.scrollY;t.length>1&&(n=i+document.getElementById(t.slice(1,t.length)).getBoundingClientRect().top),TweenLite.to(window,.5,{scrollTo:{y:n}}),e.returnValue=!1})},n=function(){/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))?classie.add(document.getElementsByTagName("html")[0],"mobile"):classie.add(document.getElementsByTagName("html")[0],"desktop")},i=function(e){$(".nice-select").niceSelect()},o=function(){!function(){var e=!1,t=document.getElementsByClassName("js-followNav")[0],n=document.getElementsByClassName("js-follow")[0],i=document.getElementsByClassName("js-contact")[0],o=function(){var o=window.innerWidth;if(o<=1024&&!0!==e){var s=$(t).detach();$(i).append(s),e=!0}if(o>1024&&!1!==e){var a=$(t).detach();$(n).append(a),e=!1}};o(),window.addEventListener("resize",o)}(),function(){var e=!1,t=document.getElementById("searchSubmit"),n=document.getElementsByClassName("c-search__label--submit")[0],i=document.getElementsByClassName("c-search__item--submit")[0],o=function(){var o=window.innerWidth;if(o<=1410&&!0!==e){var s=$(t).detach();$(i).append(s),e=!0}if(o>1410&&!1!==e){var a=$(t).detach();$(n).append(a),e=!1}};o(),window.addEventListener("resize",o)}()},s=function(){for(var t=document.getElementsByClassName("anim"),n=0;n<t.length;n++)e(t[n])&&classie.add(t[n],"anim--loaded");window.addEventListener("scroll",function(){for(var e=0;e<t.length;e++)if(null===t[e].getAttribute("visible")){var n=t[e].getBoundingClientRect().top+(window.pageYOffset||window.scrollY)+100;(window.pageYOffset||window.scrollY)+window.innerHeight>n&&(classie.add(t[e],"anim--loaded"),t[e].setAttribute("visible",!0))}})};ctme.Helper=new function(){return{goToTarget:t,isInView:e,isMobile:n,nice:i,showOnScroll:s,rwd:o}},n(),o()}(window.ctme=window.ctme||{}),function(){"use strict";var e,t=ctme.loadMore=function(){},n=document.getElementById("loadMore");t.prototype.start=function(){var t=document.getElementById("grid"),i=1,o=e+"-"+i+".html";$(n).on("click",function(s){s.preventDefault(),$.ajax({cache:!1,url:o,success:function(e){if(!1===e.length)all_loaded=!0;else{var n=$.parseHTML(e);$(t).append(n),bLazy.revalidate()}},error:function(e,t){console.log(t)}}),o=e+"-"+ ++i+".html",$.ajax({url:o,type:"HEAD",error:function(){$(n).fadeOut()},success:function(){}})})},t.prototype.init=function(){document.body.contains(n)&&(e=n.getAttribute("data-prefix"),ctme.loadMore.start())},ctme.loadMore=new t}(window.ctme=window.ctme||{}),function(){"use strict";$(document).ready(function(){$(".mfp-image").magnificPopup({closeBtnInside:!1,fixedContentPos:!0,mainClass:"my-mfp-zoom-in",gallery:{arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow icon-arrow--%dir%"></button>',enabled:!0,navigateByImgClick:!0,preload:[0,1]}})})}(window.ctme=window.ctme||{}),function(){"use strict";var e=ctme.Nav=function(){};e.prototype.fixEl=function(){var e,t=document.getElementsByTagName("body")[0],n=(document.getElementsByClassName("js-container")[0],document.getElementById("menu1")),i=n.getBoundingClientRect().top,o=!1,s=function(){if(window.innerWidth>768){var s=window.pageYOffset||window.scrollY;s>=i+70&&!0!==o&&(classie.add(t,"u-navfixed"),classie.add(n,"is-fixed"),e=setTimeout(function(){classie.add(n,"is-animed")},200),o=!0),s<i&&!1!==o&&(clearTimeout(e),classie.remove(t,"u-navfixed"),classie.remove(n,"is-fixed"),classie.remove(n,"is-animed"),o=!1)}},a=function(){var e=!1;window.innerWidth<=768&&!0!==e&&(classie.remove(t,"u-navfixed"),classie.remove(n,"is-fixed"),classie.remove(n,"is-animed"),e=!0)};window.scroll(0,0),s(),a(),window.addEventListener("scroll",s),window.addEventListener("resize",a)},e.prototype.triggers=function(){var e=document.getElementsByClassName("js-menu1")[0],t=document.getElementsByClassName("js-menu2")[0],n=document.getElementById("menu1"),i=document.getElementById("menu2");e.addEventListener("click",function(o){classie.toggle(n,"is-visible"),classie.toggle(e,"icon-hamburger"),classie.toggle(e,"icon-close"),classie.add(t,"icon-hamburger--mini"),classie.remove(t,"icon-line"),classie.remove(i,"is-visible"),o.returnValue=!1}),t.addEventListener("click",function(o){classie.toggle(i,"is-visible"),classie.toggle(t,"icon-hamburger--mini"),classie.toggle(t,"icon-line"),classie.add(e,"icon-hamburger"),classie.remove(e,"icon-close"),classie.remove(n,"is-visible"),o.returnValue=!1})},e.prototype.init=function(){ctme.Nav.fixEl(),ctme.Nav.triggers()},ctme.Nav=new e}(window.ctme=window.ctme||{}),function(){"use strict";var e=ctme.Search=function(){};e.prototype.more=function(){var e=document.getElementById("moreOptions"),t=document.getElementsByClassName("js-items")[0],n=document.getElementsByClassName("js-more")[0];e.addEventListener("click",function(e){classie.add(n,"is-hidden"),classie.add(t,"is-visible"),e.returnValue=!1})},e.prototype.searchform=function(){var e=document.getElementById("searchlens"),t=document.getElementById("searchform");e.addEventListener("click",function(n){classie.toggle(e,"icon-loop"),classie.toggle(e,"icon-close"),classie.toggle(t,"is-visible"),n.returnValue=!1})},e.prototype.init=function(){var e=document.getElementById("search");document.body.contains(e)&&ctme.Search.more(),ctme.Search.searchform()},ctme.Search=new e}(window.ctme=window.ctme||{}),WebFontConfig={google:{families:["Roboto+Slab:400:latin-ext","Lato:400:latin-ext"]},active:function(){}},function(){var e=document.createElement("script");e.src=("https:"==document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",e.type="text/javascript",e.async="true";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();