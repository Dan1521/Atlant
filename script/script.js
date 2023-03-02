

const tabs = document.querySelectorAll('[data-tab]');
const tabsImg = document.querySelectorAll('.tab-img')

tabs.forEach(tab => {
  tab.addEventListener('click', (e)=>{
    let tabID = e.target.dataset.tab;

    tabsImg.forEach(tabImg=>{
      tabImg.classList.remove('opacity-100')
      tabImg.classList.add('opacity-0')
      
      if( tabID == tabImg.id ){
        tabImg.classList.remove('opacity-0')
        tabImg.classList.add('opacity-100')

        tabs.forEach(tab => {
          tab.classList.remove('bg-blue')
          tab.classList.add('bg-gray-opacity')
        })

        tab.classList.remove('bg-gray-opacity')
        e.target.classList.add('bg-blue')
      }
    })

  })
});


const accordions = document.querySelectorAll('.accordion');
const accordionControls = document.querySelectorAll('.accordion__controls');

accordionControls.forEach((control) => {
  control.addEventListener('click', (event)=> {
    let self = event.currentTarget;
    let accordion = self.closest('.accordion');
    let accordionContent = self.nextElementSibling;
    let accordionContentHeight = accordionContent.scrollHeight;

    if (!accordion.classList.contains('accordion--active')) {
      accordions.forEach((element) => {
        element.classList.remove('accordion--active');
        element.querySelector('.accordion__content').style.maxHeight = 0
      })
      accordion.classList.add('accordion--active');
      accordionContent.style.maxHeight = accordionContentHeight + 'px'
    } else {
      accordion.classList.remove('accordion--active');
      accordionContent.style.maxHeight = 0
    }

  })
})

const swiper = new Swiper(".my-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 700,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-arrow-next',
    prevEl: '.swiper-arrow-prev',
  },
});
const swiper2 = new Swiper(".screen-3-swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  speed: 800,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 3000,
  },
  
});


// Маска ввода для телефона
const telMask = new Inputmask("+7(999)999-99-99", {showMaskOnHover: false }),
    telSelector = document.querySelector('#phone')
    
    telMask.mask(telSelector);


const validation = new JustValidate('.form');

validation
.addField('#username', [
    {
    rule: 'required',
    errorMessage: 'Введите имя'
    },
    {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Минимум 2 символа',
    },
  ],
  
)
.addField('#phone', [
  {
  rule: 'required',
  errorMessage: 'Введите телефон',
  },
  {
    validator: (name, value) => {
      let phone = telSelector.inputmask.unmaskedvalue();
      return Number(phone) && phone.length === 10
    },
    errorMessage: 'Заполните поле',
  },
])
.addField('#question', [
  {
  rule: 'required',
  errorMessage: 'Введите текст вопроса',
  },
  {
  rule: 'minLength',
  value: 2,
  errorMessage: 'Минимум 2 символа',
  },
]).onSuccess(thisForm=>{
  document.querySelector('.message').classList.add('onsucsses')
})




