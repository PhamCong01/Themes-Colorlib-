var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

// thanh bars
var iconBars = $('.icon-bars')
var listItem = $('.header__list__item-bars')
var content = $('.content')
var about = $('.about')

// render content 
var nameSelect = $('.slider__name')
var descriptions = $('.slider__p')
var imageSlider = $('.slider__image')
var iconRight = $('.icon__right')
var iconLeft = $('.icon__left')
var sliderContent = $('.slider__container')
var messageError = $$('.value__error')


// sử lý khi người dùng nhập input contact 
var input = $$('.form__input')
var messageElement = $('.message')
// check email in input
var checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function start() {
    openBars()
    clickRight()
    clickLeft()
    loadInput()
}

start();

function openBars() {
    iconBars.onclick = function () {
        content.classList.toggle('content__block')
        listItem.classList.toggle('header__list__item-bars--block')
        about.style.top = '-100px'
    }
}

var people = [
    {
        id: 1,
        name: "Jane Smith",
        image: "https://demo.colorlib.com/wp-content/uploads/sites/58/2016/02/redhead-1123645_960_720-1-127x127.jpg",
        description: '"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma, which is living with the results of other people’s thinking. Don’t let the noise of others’ opinions drown out your own inner voice."'
        
    },

    {
        id: 2,
        name: "Mike Muller",
        image: "https://demo.colorlib.com/wp-content/uploads/sites/58/2016/02/mike-muller-127x127.jpg",
        description: '"Time means a lot to me because, you see, I, too, am also a learner and am often lost in the joy of forever developing and simplifying. If you love life, don’t waste time, for time is what life is made up of. — Bruce Lee."'
        
    },

    {
        id: 3,
        name: "John Doe",
        image: "https://demo.colorlib.com/wp-content/uploads/sites/58/2016/02/Aigars-Silkalns-127x127.jpg",
        description: '"The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before. —Albert Einstein."'
        
    },

    {
        id: 4,
        name: "Aigars Silkalns",
        image: "https://demo.colorlib.com/wp-content/uploads/sites/58/2016/02/hombre-joven-cara-alegre-estudiante-127x127.jpg",
        description: '" Never be bullied into silence. Never allow yourself to be made a victim. Accept no one’s definition of your life; define yourself. —Harvey Fierstein."'
        
    },


]
 
var valueNumber = 1
window.addEventListener('DOMContentLoaded',function () {
    showContent(valueNumber)
})
// show Content
function showContent (callback) {
    var value = people[callback]
    imageSlider.src = value.image
    descriptions.textContent = value.description
    nameSelect.textContent = value.name
}

// click icon Right
function clickRight () {
    iconRight.addEventListener('click',function () {
        valueNumber++
        if(valueNumber > people.length - 1) { 
            valueNumber = 0
        }
        showContent(valueNumber)
    })
}

// click icon Left
function clickLeft () {
    iconLeft.addEventListener('click',function () {
        valueNumber--
        if(valueNumber < 0) { 
            valueNumber = people.length - 1
        }
        showContent(valueNumber)
    })
}

// auto Content
    var autoContent = setInterval(function () {
        valueNumber++
        if(valueNumber > people.length - 1) { 
            valueNumber = 0
        }
        showContent(valueNumber)
    },2000)
    

// close auto Content
    sliderContent.addEventListener('onmouseover',function() {
        clearInterval(autoContent)
    })


// sử lý sự kiện error trong ô input contact

function loadInput () {
    for(let i = 0; i< input.length; i++) {
        for(let j = 0; j < messageError.length; j++) {

            input[i].onblur = function (e) {
                if(e.target.value == "") {
                    input[i].style =  `padding: 8px 10px;
                    border: 1px solid red;
                    border-radius:5px;`
                    messageError[i].innerText = 'Please do not leave it blank '
                } else if (!input[1].value.match(checkEmail)) {
                    input[1].style =  `padding: 8px 10px;
                    border: 1px solid red;
                    border-radius:5px;`
                    messageError[1].innerText = 'wrong email! Please re-enter '
                } else {
                    input[i].style =  `padding: 8px 10px;
                    border: 1px solid rgb(126, 124, 124);
                    border-radius:5px;`
                    messageError[i].innerText = ''
                }

              
            }
            input[i].oninput = function () {
                input[i].style =  `padding: 8px 10px;
                border: 1px solid rgb(126, 124, 124);
                border-radius:5px;`
                messageError[i].innerText = ''
               
            }
            
        }
      
    }
}