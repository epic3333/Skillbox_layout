const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
    searchEnabled: false
});


//map//
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [48.87223815398861, 2.354158673610653],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 18
    });

    // Создание геообъекта с типом точка (метка).
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [48.87223815398861, 2.354158673610653] // координаты точки
        }
    });

    var myPlacemark = new ymaps.Placemark([48.87223815398861, 2.354158673610653], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'pick.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });

    // Размещение геообъекта на карте.
    /* myMap.geoObjects.add(myGeoObject); */
    myMap.geoObjects.add(myPlacemark);
}


//tippy//

tippy('#myButton', {
    content: 'Глава 2, страница 176',
    maxWidth: 166,
});

//form//
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                console.log(phone)
                return Number(phone) && phone.length === 10
            }
        },
        mail: {
            required: true,
            email: true
        },
    },
    messages: {
        name: 'Как вас зовут?',
        tel: 'Укажите ваш телефон',
        mail: 'Укажите ваш e-mail'
    },
});