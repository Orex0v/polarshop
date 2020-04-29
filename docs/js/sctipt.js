$(document).ready(function(){
    $('.carusel__inner').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/carusel/leftArrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/carusel/rightArrow.svg"></button>',
        responsive: [
            { 
                breakpoint: 992,
                settings: {
                dots: true,
                arrows: false
                }
            }

        ]
        
      });
  });
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
//   $("a.catalog-item__link").each(function(i){
//     $(this).on("click", function(e){
//         e.preventDefault();
//         $(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
//         $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
//     })
//   })
//   $("a.catalog-item__list__back").each(function(i){
//     $(this).on("click", function(e){
//         e.preventDefault();
//         $(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
//         $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
//     })
//   })
  function toggleSlide(item){
    $(item).each(function(i){
        $(this).on("click", function(e){
            e.preventDefault();
            $(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
            $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
        })
      })
      };
      toggleSlide("a.catalog-item__link");
      toggleSlide("a.catalog-item__list__back");

      //Modal
      $("[data-modal=consultation]").on("click", function(){
        $(".overlay, #consultation").fadeIn("fast");
      });
      $(".modal__close").on("click", function(){
        $(".overlay, #consultation , #order, #thanks").fadeOut("slow");
      });
      // $(".button_mini").on("click", function(){
      //   $(".overlay, #order").fadeIn("slow");
      // });
      $(".button_mini").each(function(i){
        $(this).on("click", function(){
          $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
          $(".overlay, #order").fadeIn("slow");

        })
      });
      // $("#consultation-form form").validate();
      // $("#order form").validate();
      // $("#consultation form").validate();

function validateforms(form){
  $(form).validate({
    rules: {
      name: "required",
      phone: "required",
      email: {
        required: true,
        email: true
      }
    },
        messages: {
          name: "Пожалуйста, введите свое имя",
          email: {
            required: "Пожауйста, ввелдите свой почтовый адрес",
            email: "Почта должны быть формата name@dominname.com"
          },
          phone:{
           required:"Пожалуйста, введите свой номер телефона"
          }
        }
      });
}
validateforms("#consultation-form");
validateforms("#order form");
validateforms("#consultations-forms");


  $("input[name=phone]").mask("+7 (999) 999-99-99");

  $('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
      type: "POST",
      url: "smart.php",
      data: $(this).serialize()
  }).done(function() {
      $(this).find("input").val("");


      $('form').trigger('reset');
  });
  return false;
});
// smothe scrool end page up
$(window).scroll(function(){
if($(this).scrollTop() > 1600) {
  $(".pageup").fadeIn();
}else{
  $(".pageup").fadeOut();
};
});
$("a[href^='#']").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});


new WOW().init();



      