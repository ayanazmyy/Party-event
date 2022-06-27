let menuBoxWidth = $('.menu-box').outerWidth();
let menuIcon = document.querySelector('.menu-icon');
$('.side-menu').css('left', `${-menuBoxWidth}px`);

menuIcon.addEventListener('click', function () {
    if ($('.side-menu').css('left') == `${-menuBoxWidth}px`) {
        $('.side-menu').css('left', `0px`);
    } else {
        $('.side-menu').css('left', `${-menuBoxWidth}px`)
    }
})

$('.singer-one').click(function () {
    $('.singer-one-desc').slideToggle();
})

$('.singer-two').click(function () {
    $('.singer-two-desc').slideToggle();
})

$('.singer-three').click(function () {
    $('.singer-three-desc').slideToggle();
})

$('.singer-four').click(function () {
    $('.singer-four-desc').slideToggle();
})


$('.close').click(function () {
    $('.side-menu').css('left', `${-menuBoxWidth}px`)
});

// ========================= count down function ========================
let daysDiv = document.querySelector('.days');
let hoursDiv = document.querySelector('.hours');
let minutesDiv = document.querySelector('.minutes');
let secondsDiv = document.querySelector('.seconds');

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(function(){
    let dateNow = new Date().getTime();

    let timeDifference = countDownDate - dateNow;

    let daysLeft = Math.floor(timeDifference/(1000 * 60 * 60 * 24));
    let hoursLeft = Math.floor(timeDifference % (1000 * 60 * 60 * 24)/ (1000 * 60 * 60));
    let minutesLeft = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));
    let secondsLeft = Math.floor(timeDifference % (1000 * 60) / 1000);

    daysDiv.innerHTML = `${daysLeft} Days`;
    hoursDiv.innerHTML = `${hoursLeft} Hours`;
    minutesDiv.innerHTML = `${minutesLeft} Minutes`;
    secondsDiv.innerHTML = `${secondsLeft} Seconds`;

    if(timeDifference <= 0) {
        clearInterval(counter)
    }
}, 1000)


// ================================ textarea validation =======================================

let textMessage = document.querySelector('.text-message');
let charRestriction = document.querySelector('.charRestriction');
let charactersLeft = document.querySelector('.charactersLeft');

let lettersCounter = 100;
textMessage.addEventListener('keyup', function () {
    lettersCounter = 100 - textMessage.value.length;
    if(lettersCounter < 0){
        charRestriction.innerHTML = `<span class="number charactersLeft">Characters exceeded limit allowed!</span>`
        return;
    }
    charRestriction.innerHTML = `<span class="number charactersLeft">${lettersCounter}</span> characters left`
});


