const burger = document.querySelector('#btn-burger')
const mobileContainer = document.querySelector('#mobile-container')
burger.addEventListener('click', ()=> {
    burger.classList.toggle('active')
    mobileContainer.classList.toggle('show')
})

/* modal */

const modalTrigers = document.querySelectorAll('[data-triger-modal]');
const modalClose = document.querySelectorAll('[data-modal-close]')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')
const processVideo = document.querySelector('#video');
const preparation = document.querySelector('#preparation')
const cooking = document.querySelector('#cooking')
const enjoyment = document.querySelector('#enjoyment')

const play = document.querySelector('#play')
const pause = document.querySelector('#pause')
const stop = document.querySelector('#stop')

function playVideo() {
    processVideo.play();
}

function pauseVideo() {
    processVideo.pause();
}

function stopVideo() {
    processVideo.pause();
    processVideo.currentTime = 0;
}

play.addEventListener('click', () => {
    playVideo();
    processVideo.volume = 0.5;
})

pause.addEventListener('click', () => {
    pauseVideo();
})

stop.addEventListener('click', () => {
    stopVideo();
})



function currentPreparation() {
    processVideo.currentTime = 25;
}

function currentCooking() {
    processVideo.currentTime = 85;
}

function currentEnjoyment() {
    processVideo.currentTime = 158;
}

function showModal() {
    body.classList.add('overflow-hidden')
    overlay.classList.add('show')
}

function closeModal() {
    const openModal = document.querySelector('.modal.show')
    body.classList.remove('overflow-hidden')
    overlay.classList.remove('show')
    openModal.classList.remove('show')
    stopVideo();
}


preparation.addEventListener('click', () => {
    currentPreparation();
    processVideo.volume = 0.5;
})

cooking.addEventListener('click', () => {
    currentCooking();
    processVideo.volume = 0.5;
})

enjoyment.addEventListener('click', () => {
    currentEnjoyment();
    processVideo.volume = 0.5;
})

modalTrigers.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault()

        const dataTriger = item.getAttribute('data-triger-modal')
        const modal = document.querySelector('#' + dataTriger + ".modal")

        showModal()
        modal.classList.add('show')

        if(modal.classList.contains('video-process')) {
            modal.classList.add('show')
            playVideo()
        } else {
            modal.classList.add('show')
        }
    })
})

modalClose.forEach(close => {
    close.addEventListener('click', closeModal)
})


//  Slider SWIPER PRODUCTS

const swiperProduct = new Swiper('.swiper-product', {
    spaceBetween: 36,
    slidesPerView: 1,
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        1233: {
          slidesPerView: 3,
          spaceBetween: 48,
        },
        1560: {
          slidesPerView: 4,
          spaceBetween: 48,
        }
      }
  });


  //Slider SWIPER EVENTS  MOBILE ONLY

  

  let swiperEvents;
  const swiperEventsMediaQuery = window.matchMedia ("(max-width: 1025px")

  function checkedBreakpoint(swiperEventsMediaQuery) {
    if (swiperEventsMediaQuery.matches) {
        swiperEvents = new Swiper('.swiper-events', {
            spaceBetween: 36,
            slidesPerView: 1,
            loop: true,

            navigation: {
              nextEl: '.swiper-events-button-next',
              prevEl: '.swiper-events-button-prev',
            },
          });

          return;
       
    } else {
        if (swiperEvents) {
            swiperEvents.destroy();
        }
    }
  }

  checkedBreakpoint(swiperEventsMediaQuery);

  swiperEventsMediaQuery.addEventListener("change", function() {
    checkedBreakpoint(swiperEventsMediaQuery);
  });

//var init = false;
// var swiper;
// function swiperCard() {
//   if (window.innerWidth <= 768) {
//     if (!init) {
//       init = true;
//       swiper = new Swiper(".slider-cards-js", {
//         direction: "horizontal",
//         slidesPerView: "auto",
//         centeredSlides: true,
//         spaceBetween: 32,
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//         },
//       });
//     }
//   } else if (init) {
//     swiper.destroy();
//     init = false;
//   }
// }
// swiperCard();
// window.addEventListener("resize", swiperCard);



//const x = 3
//
//if (x < 7) {
//    console.log ('malo')
//}
//else  if (x ==7) {
//    console.log ('7')
//} 
//else {
//    console.log ('viac')
//}

