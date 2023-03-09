// Using Intersection Observer API for better animation expiriance
// JQuery Slider
$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
    $('.my-card:nth-child(' + $even + ')').addClass('active');
    $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
    $('.my-card:nth-child(' + $odd + ')').addClass('active');
    $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function () {
    $slide = $('.active').width();
    console.log($('.active').position().left);

    if ($(this).hasClass('next')) {
        $('.card-carousel').stop(false, true).animate({ left: '-=' + $slide });
    } else if ($(this).hasClass('prev')) {
        $('.card-carousel').stop(false, true).animate({ left: '+=' + $slide });
    }

    $(this).removeClass('prev next');
    $(this).siblings().removeClass('prev active next');

    $(this).addClass('active');
    $(this).prev().addClass('prev');
    $(this).next().addClass('next');
});

$('.my-card').swipe(function () {
    $slide = $('.active').width();
    console.log($('.active').position().left);

    if ($(this).hasClass('next')) {
        $('.card-carousel').stop(false, true).animate({ left: '-=' + $slide });
    } else if ($(this).hasClass('prev')) {
        $('.card-carousel').stop(false, true).animate({ left: '+=' + $slide });
    }

    $(this).removeClass('prev next');
    $(this).siblings().removeClass('prev active next');

    $(this).addClass('active');
    $(this).prev().addClass('prev');
    $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function (e) {
    if (e.keyCode == 37) { // left
        $('.active').prev().trigger('click');
    }
    else if (e.keyCode == 39) { // right
        $('.active').next().trigger('click');
    }
});
// End slider

// Begin Intersection Observer Animation Listener For Computer SVG Pc last block
window.onload = () => {
    // Наблюдаемое, как объект PC
    let targetPC = document.querySelector(".comp");
    // Наблюдаемое, как объект DREAM
    let targetDream = document.getElementById("dream");
    // Наблюдаемое, как объект информационного блока
    let targetInform = document.querySelector(".imageTwo");

    // Конфигурация под наблюдателя или условия пересечения наблюдателя и наблюдаемого
    // Когда root: null - подразумевается, что в качестве наблюдателя выступает viewport
    let optionsForPc = {
        root: null,
        rootMargin: "0px",
        threshold: 0.7
    };
    let optionsForPathes = {
        root: null,
        rootMargin: "0px",
        threshold: 0.7
    }
    let optionsInformBlock = {
        root: null,
        rootMargin: "0px",
        threshold: 0.7
    }

    // Наблюдатель и вызов действия при пересечении наблюдателя и наблюдаемого
    // Подразумевается действие с надписью DREAM 
    const observerPathes = new IntersectionObserver((entries, observerPathes) => {
        entries.forEach(entery => {
            if (entery.isIntersecting) {
                let firstGroupPathes = document.querySelector(".e");
                let secondGroupPathes = document.querySelector(".k");
                let thirdGroupPathes = document.querySelector(".l");
                let fourthGroupPathes = document.querySelector(".j");
                let fifthGroupPathes = document.querySelector(".d");
                let sixthGroupPathes = document.querySelector(".f");
                let seventhGroupPathes = document.querySelector(".g");
                let eigthGroupPathes = document.querySelector(".h");
                let ninethGroupPathes = document.querySelector(".main");

                firstGroupPathes.classList.add("eAnimation");
                secondGroupPathes.classList.add("kAnimation");
                thirdGroupPathes.classList.add("lAnimation");
                fourthGroupPathes.classList.add("jAnimation");
                fifthGroupPathes.classList.add("dAnimation");
                sixthGroupPathes.classList.add("fAnimation");
                seventhGroupPathes.classList.add("gAnimation");
                eigthGroupPathes.classList.add("hAnimation");
                ninethGroupPathes.classList.add("mainAnimation");
            }
        })
    }, optionsForPathes);

    // Наблюдатель и вызов действия при пересечении наблюдателя и наблюдаемого
    // Подразумевается действие для информационного блока 
    const observerInformBlock = new IntersectionObserver((enteries, observerInformBlock) => {
        enteries.forEach(entery => {
            if (entery.isIntersecting) {
                let topImage = document.querySelector(".imageOne");
                let middleImage = document.querySelector(".imageTwo");
                let bottomImage = document.querySelector(".imageThree");

                topImage.classList.add("topImageAnimation");
                middleImage.classList.add("middleImageAnimation");
                bottomImage.classList.add("bottomImageAnimation");
            }
        })
    }, optionsInformBlock);


    // Наблюдатель и вызов действия при пересечении наблюдателя и наблюдаемого
    // Подразумевается действие для для блока с одиночным PC
    const observerPC = new IntersectionObserver((entries, observerPC) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let firstRightPath = document.getElementById("firstRightLine");
                let secondRightPath = document.getElementById("secondRightLine");
                let thirdRightPath = document.getElementById("thirdRightLine");

                let firstLeftPath = document.getElementById("firstLeftLineAnim");
                let secondLeftPath = document.getElementById("secondLeftLineAnim");
                let thirdLeftPath = document.getElementById("thirdLeftLineAnim");

                let text = document.getElementById("textComp");

                text.classList.add("textAnimation");
                firstRightPath.classList.add("firstRightPath");
                secondRightPath.classList.add("secondRightPath");
                thirdRightPath.classList.add("thirdRightPath");
                firstLeftPath.classList.add("firstLeftPath");
                secondLeftPath.classList.add("secondLeftPath");
                thirdLeftPath.classList.add("secondLeftPath");
            }
        })
    }, optionsForPc);

    // Происходящее наблюдение
    observerPathes.observe(targetDream);
    observerInformBlock.observe(targetInform);
    observerPC.observe(targetPC);
};


