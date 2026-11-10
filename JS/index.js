let services=null;


(async function(){

    let res =await fetch("https://semicode.tech/api/v1/l10nhouse/services");
     services =await res.json();


    let i=0;
    for(let service of services){
        $("#Services .row").append(`
            <div class="col-md-6 wow ${((i+1)%2==0)? 'animate__fadeInRight': 'animate__fadeInLeft' }"  data-wow-delay="${i*.2}s">
        <div class="item text-center box ">
          <img src="./images/${service.icon}" alt="">
          <h4 class="my-3">${service.title}</h4>
          <p>${prepareDesc(service.description.slice(0,150))}... <a class="firstColor" onclick="showService(${i})"> Read More</a></p>
        </div>
      </div>`) 
    
    i++;
        }
})();

$(".popup .box").click(function(e){ 
    e.stopPropagation()});

  $(window).scroll(function(e){
    $("nav").toggleClass("scrolled",window.scrollY>=10);
    let $Sections=$('header,section[id]');
    $Sections.each(function(index,section){
      let $section=$(section),
    sectionId=$section.attr('id'),
     sectionTop=$section.offset().top,
    sectionBottom=sectionTop+$section.outerHeight(true),
    navbarHeight=$('nav').outerHeight(true),
    scrollY=window.scrollY+navbarHeight;

    if(scrollY>sectionTop && scrollY<sectionBottom){
      $(`.nav-link.active`).removeClass("active");
      $(`.nav-link[href='#${sectionId}']`).addClass("active");
    }
    })
    if (window.scrollY > 500) {
    $(".toTop").removeClass("d-none");
} else {
    $(".toTop").addClass("d-none");
}
  }

  )
$(window).on("load", function () {
  setTimeout(function () {
        $(".onLoading").fadeOut(1000);
    }, 2000);
    
});
new WOW({
    animateClass: 'animate__animated',
  }).init();

  (async function(){

    let res =await fetch("https://semicode.tech/api/v1/l10nhouse/sectors");
     Sectors =await res.json();

    let i=0;
    for(let sector of Sectors){
        $(".popup[data-popup-name='Sectors'] .row").append(`
          <div class="col-12 col-lg-3">
          <div class="item text-center rounded-3 p-2 ">
            <img src="./images/sec/${sector.icon}" class="img-fluid mb-3" alt="">
            <p class="mb-0">${sector.name}</p>
          </div>
        </div>
            `) 
    
    i++;
        }
})();

  (async function(){

    let res =await fetch("https://semicode.tech/api/v1/l10nhouse/languages");
     languages =await res.json();
     console.log(languages);

    let i=0;
    for(let language of languages){
        $(".popup[data-popup-name='Languages'] .body ").append(`
          <div class="section">
          <h5>${language.continent}</h5>
          <ul class="list-unstyled">
          ${prepareLanguages(language.languages)}
          </ul>
        </div>
            `) 
    
    i++;
        }
})();

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    items:5,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    slideBy:5,
    responsive:{
      0: {
        items:1,

      },
      650: {

        items:2
      },
      850: {

        items:3
      },
      1050: {

        items:4
      },
      1250: {

        items:5
      }

      
    }
  })
});

