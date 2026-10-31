function prepareDesc(desc){
    let regex=/L10N House/gmi;

return desc.replaceAll(regex,`<span class="fw-medium"> <span class="firstColor">L10N</span><span class="secondColor"> House</span>`);
}

function openPopup(popupName){
  $("body").css('overflow-y','hidden');
    $(`.popup[data-popup-name="${popupName}"]`).fadeIn(1000,function(){
      if(popupName=='Languages')
           $(this).find('.box').addClass('show');
    });
}

function closePopup(popupName){
  $("body").css('overflow-y','auto');
      let $popup=$(`.popup[data-popup-name='${popupName}']`);
        if(popupName=='Languages'){
           $popup.find('.box').removeClass('show');
           $popup.delay(500).fadeOut(1000);
        }else{
           $popup.fadeOut(1000);
}
}


function preparePoints(points){
    let lis=``;
        for(let point of points){
            lis +=`<li>${point}</li>`;
        }
    return lis;
}

 function prepareSectionsOfService(sections){
    let sectionsEle=``;
    let i=0;
    for (let section of sections){
        sectionsEle+=`
        <section class="mt-5 ${(i!=0)? 'mt-4' :'' }">
      <h5>${section.title}</h5>
      <ol>
        ${preparePoints(section.points)}
      </ol>
      </section>`
      i++;
    }
   
    return sectionsEle;
}

function showService(serviceIndex){
    let service =services[serviceIndex];
    console.log(service);
      
    $(`.popup[data-popup-name="Service"] .box .body`).html(
      `<h3 class="mb-5 text-center secondColor">${service.title}</h3>
      <div class="row mb-5" >
        <div class="col-lg-6">
          <div class="item">
          <p>${prepareDesc(service.description)}</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="item">
            <img src="./images/${service.img}" class="img-fluid rounded-3" alt="">
        </div>
      </div>
      </div>
      ${prepareSectionsOfService(service.sections)}
        `);
    openPopup('Service');
}

function prepareLanguages(languages){
      let lis=``;
        for(let language of languages){
           lis+= `<li> <i class="far fa-dot-circle"></i>${language}</li>`
        }
    return lis;
}
