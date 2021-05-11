const slider = document.querySelector('.swiper-container');
const slider1 = document.querySelector('.swiper-container1');
const slider2 = document.querySelector('.swiper-container2');

const slider3 = document.querySelector('.swiper-container3');
const slider4 = document.querySelector('.swiper-container4');
let mySwiper1 = new Swiper(slider1, {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },


    pagination: {
        el: '.pag-1',
        type: 'fraction',
        clickable: true,
        slideToClickedSlide: true,
    },
    //   autoplay: {
    //     delay: 5000,
    //   },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 35
        },
        // when window width is >= 480px
        1400: {
            slidesPerView: 2,
            spaceBetween: 50
        },
        // when window width is >= 640px
        1690: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    }
})
let mySwiper2 = new Swiper(slider2, {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
        pageUpDown: true,
    },

    pagination: {
        el: '.pag-1',
        type: 'fraction',
        clickable: true,
        slideToClickedSlide: true,
    },
    //   autoplay: {
    //     delay: 5000,
    //   },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 35
        },
        // when window width is >= 480px
        1400: {
            slidesPerView: 2,
            spaceBetween: 50
        },
        // when window width is >= 640px
        1690: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    }
})

let mySwiper3 = new Swiper(slider3, {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 50,
    pagination: {
        el: '.pag-2',
        type: 'fraction',
        clickable: true,
        slideToClickedSlide: true,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    breakpoints: {
        // when window width is >= 320px
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        920: {
            slidesPerView: 2,
            spaceBetween: 45
        },
        // when window width is >= 640px
        1600: {
            slidesPerView: 2,
            spaceBetween: 50
        },
        1700: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    }
})
let mySwiper4 = new Swiper(slider4, {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,

        clickable: true,
        slideToClickedSlide: true,

        loop: true,
        navigation: {
            nextEl: '.nx',
            prevEl: '.pr',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            920: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            // when window width is >= 640px
            1200: {
                slidesPerView: 2,
                spaceBetween: 50
            },
            1600: {
                slidesPerView: 3,
                spaceBetween: 57
            }
        }
    })
    // selekt
const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {

    searchEnabled: false,

});
// accordion
$(function() {
    $("#accordion").accordion({
        collapsible: true,
        
       
    });
});

$(function() {
    $("#accordion1").accordion({
        collapsible: true,
        
       
    });
});

$(function() {
    $("#accordion2").accordion({
        collapsible: true,
        
       
    });
});

$(function() {
    $("#accordion3").accordion({
        collapsible: true,
        
       
    });
});

$(function() {
    $("#accordion4").accordion({
        collapsible: true,
        
       
    });
});
// 
// yandex maps

// Ð¤ÑƒÐ½ÐºÑ†Ð¸Ñ ymaps.ready() Ð±ÑƒÐ´ÐµÑ‚ Ð²Ñ‹Ð·Ð²Ð°Ð½Ð°, ÐºÐ¾Ð³Ð´Ð°
// Ð·Ð°Ð³Ñ€ÑƒÐ·ÑÑ‚ÑÑ Ð²ÑÐµ ÐºÐ¾Ð¼Ð¿Ð¾Ð½ÐµÐ½Ñ‚Ñ‹ API, Ð° Ñ‚Ð°ÐºÐ¶Ðµ ÐºÐ¾Ð³Ð´Ð° Ð±ÑƒÐ´ÐµÑ‚ Ð³Ð¾Ñ‚Ð¾Ð²Ð¾ DOM-Ð´ÐµÑ€ÐµÐ²Ð¾.
ymaps.ready(init);

function init() {
    // Ð¡Ð¾Ð·Ð´Ð°Ð½Ð¸Ðµ ÐºÐ°Ñ€Ñ‚Ñ‹.
    var myMap = new ymaps.Map("myMap1", {
        // ÐšÐ¾Ð¾Ñ€Ð´Ð¸Ð½Ð°Ñ‚Ñ‹ Ñ†ÐµÐ½Ñ‚Ñ€Ð° ÐºÐ°Ñ€Ñ‚Ñ‹.
        // ÐŸÐ¾Ñ€ÑÐ´Ð¾Ðº Ð¿Ð¾ ÑƒÐ¼Ð¾Ð»Ñ‡Ð°Ð½Ð¸ÑŽ: Â«ÑˆÐ¸Ñ€Ð¾Ñ‚Ð°, Ð´Ð¾Ð»Ð³Ð¾Ñ‚Ð°Â».
        // Ð§Ñ‚Ð¾Ð±Ñ‹ Ð½Ðµ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÑÑ‚ÑŒ ÐºÐ¾Ð¾Ñ€Ð´Ð¸Ð½Ð°Ñ‚Ñ‹ Ñ†ÐµÐ½Ñ‚Ñ€Ð° ÐºÐ°Ñ€Ñ‚Ñ‹ Ð²Ñ€ÑƒÑ‡Ð½ÑƒÑŽ,
        // Ð²Ð¾ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐ¹Ñ‚ÐµÑÑŒ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ð¾Ð¼ ÐžÐ¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð¸Ðµ ÐºÐ¾Ð¾Ñ€Ð´Ð¸Ð½Ð°Ñ‚.
        center: [55.75786715778723, 37.61982277659597],
        // Ð£Ñ€Ð¾Ð²ÐµÐ½ÑŒ Ð¼Ð°ÑÑˆÑ‚Ð°Ð±Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ñ. Ð”Ð¾Ð¿ÑƒÑÑ‚Ð¸Ð¼Ñ‹Ðµ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ñ:
        // Ð¾Ñ‚ 0 (Ð²ÐµÑÑŒ Ð¼Ð¸Ñ€) Ð´Ð¾ 19.
        zoom: 16
    });

    // Ð¡Ð¾Ð·Ð´Ð°Ñ‘Ð¼ Ð¼Ð°ÐºÐµÑ‚ ÑÐ¾Ð´ÐµÑ€Ð¶Ð¸Ð¼Ð¾Ð³Ð¾.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Ð¨Ð¾ÑƒÑ€ÑƒÐ¼ â„–4',
            balloonContent: 'Ð­Ñ‚Ð¾ ÐºÑ€Ð°ÑÐ¸Ð²Ð°Ñ Ð¼ÐµÑ‚ÐºÐ°'
        }, {
            // ÐžÐ¿Ñ†Ð¸Ð¸.
            // ÐÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾ ÑƒÐºÐ°Ð·Ð°Ñ‚ÑŒ Ð´Ð°Ð½Ð½Ñ‹Ð¹ Ñ‚Ð¸Ð¿ Ð¼Ð°ÐºÐµÑ‚Ð°.
            iconLayout: 'default#image',
            // Ð¡Ð²Ð¾Ñ‘ Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ðµ Ð¸ÐºÐ¾Ð½ÐºÐ¸ Ð¼ÐµÑ‚ÐºÐ¸.
            iconImageHref: 'img/metka.svg',
            // Ð Ð°Ð·Ð¼ÐµÑ€Ñ‹ Ð¼ÐµÑ‚ÐºÐ¸.
            iconImageSize: [28, 40],
            // Ð¡Ð¼ÐµÑ‰ÐµÐ½Ð¸Ðµ Ð»ÐµÐ²Ð¾Ð³Ð¾ Ð²ÐµÑ€Ñ…Ð½ÐµÐ³Ð¾ ÑƒÐ³Ð»Ð° Ð¸ÐºÐ¾Ð½ÐºÐ¸ Ð¾Ñ‚Ð½Ð¾ÑÐ¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾
            // ÐµÑ‘ "Ð½Ð¾Ð¶ÐºÐ¸" (Ñ‚Ð¾Ñ‡ÐºÐ¸ Ð¿Ñ€Ð¸Ð²ÑÐ·ÐºÐ¸).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.75846306898368, 37.601079499999905], {


        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
    myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)'
}
// validation
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 10
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.Inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },

        mail: {
            required: true,
            email: true
        },
    },
});
// socsety
Share = {
    vkontakte: function(purl, ptitle, pimg, text) {
        url = 'http://vkontakte.ru/share.php?';
        url += 'url=' + encodeURIComponent(purl);
        url += '&title=' + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image=' + encodeURIComponent(pimg);
        url += '&noparse=true';
        Share.popup(url);
    },
    facebook: function(purl, ptitle, pimg, text) {
        url = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]=' + encodeURIComponent(ptitle);
        url += '&p[summary]=' + encodeURIComponent(text);
        url += '&p[url]=' + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        Share.popup(url);
    },
    instagram: function(purl, ptitle, pimg, text) {
        url = 'http://instagram.com/###?ref=badge';
        url += '&p[title]=' + encodeURIComponent(ptitle);
        url += '&p[summary]=' + encodeURIComponent(text);
        url += '&p[url]=' + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        Share.popup(url);
    },
    popup: function(url) {
        window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
    }
};
// Ð¿Ð»Ð°Ð²Ð½Ñ‹Ð¹ ÑÐºÑ€Ð¾Ð»Ð»
$(document).ready(function() {
    $("a.header-first__list-link").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1600);
        return false;
    });
});
$(document).ready(function() {
    $("a.hero__first-btn").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1600);
        return false;
    });
});
// Ñ…ÑƒÐ´Ð¾Ð¶Ð½Ð¸ÐºÐ¸
// function l_image(el, a) {
//     //document.artist_img.src = a;
//     document.querySelector('.catalog__artist_img').src = a;
//     document.querySelectorAll('.artist_active', this).forEach(function(tabArtist) {
//         tabArtist.classList.add('artist');
//         tabArtist.classList.remove('artist_active')
//     });
//     //console.log(event);
//     //let el = event.target
//     el.classList.remove('artist')
//     el.classList.add('artist_active')
//     return false;
// }
document.querySelector('.catalog').addEventListener('click', function(e) {
    if (e.target.classList.contains('artist')) {
         
            this.querySelector('.artist_active').classList.remove('artist_active');
            e.target.classList.add('artist_active');
        }
    
    });
  
        // Ñ„Ð»Ð°Ð³Ð¸
document.querySelector('.catalog').addEventListener('click', function(e) {
if (e.target.classList.contains('catalog__flag-tab_fl')) {
     
        this.querySelector('.flag_active').classList.remove('flag_active');
        e.target.classList.add('flag_active');
    }

});
// ÑÐ¼ÐµÐ½Ð° ÐºÐ°Ñ€Ñ‚Ð¸Ð½Ð¾Ðº
document.querySelectorAll('.artist').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
    
      const text = event.currentTarget.dataset.text
      document.querySelectorAll('.l_image').forEach(function(tabContent) {
         tabContent.classList.remove('l_image_active') 
     })
    document.querySelector(`[data-img="${text}"]`).classList.add('l_image_active')                      
               })
    });

    document.querySelectorAll('.artist1').forEach(function(tabsBtn1) {
        tabsBtn1.addEventListener('click', function(event) {
        
          const text1 = event.currentTarget.dataset.text1
          document.querySelectorAll('.l_image1').forEach(function(tabContent1) {
             tabContent1.classList.remove('l_image_active1') 
         })
        document.querySelector(`[data-img1="${text1}"]`).classList.add('l_image_active1')                      
                   })
        });

        document.querySelectorAll('.artist2').forEach(function(tabsBtn2) {
            tabsBtn2.addEventListener('click', function(event) {
            
              const text2 = event.currentTarget.dataset.text2
              document.querySelectorAll('.l_image2').forEach(function(tabContent2) {
                 tabContent2.classList.remove('l_image_active2') 
             })
            document.querySelector(`[data-img2="${text2}"]`).classList.add('l_image_active2')                      
                       })
            });

            document.querySelectorAll('.artist3').forEach(function(tabsBtn3) {
                tabsBtn3.addEventListener('click', function(event) {
                
                  const text3 = event.currentTarget.dataset.text3
                  document.querySelectorAll('.l_image3').forEach(function(tabContent3) {
                     tabContent3.classList.remove('l_image_active3') 
                 })
                document.querySelector(`[data-img3="${text3}"]`).classList.add('l_image_active3')                      
                           })
                });

                document.querySelectorAll('.artist4').forEach(function(tabsBtn4) {
                    tabsBtn4.addEventListener('click', function(event) {
                    
                      const text4 = event.currentTarget.dataset.text4
                      document.querySelectorAll('.l_image4').forEach(function(tabContent4) {
                         tabContent4.classList.remove('l_image_active4') 
                     })
                    document.querySelector(`[data-img4="${text4}"]`).classList.add('l_image_active4')                      
                               })
                    });
// Ð‘ÑƒÑ€Ð³ÐµÑ€ Ð¼ÐµÐ½ÑŽ
document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')

})

$(document).ready(function() {


    $(".header-first__menu").hide();
    $(".header-first__burger").click(function() {
        $(".header-first__menu").slideToggle("slow", function() {


        });
    });
});
//  Ð¢Ð°Ð±Ñ‹
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog__flag-tab').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.tab-content').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        
        })
    })
});