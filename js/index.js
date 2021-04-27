$('body').scrollspy({ target: '#navbar' });

document.addEventListener('DOMContentLoaded',function () {

    //navigation
    const navigation = document.querySelector(".navbar");

    function addShadow() {
        if (window.scrollY >= 400){
            navigation.classList.add("shadow-bg");
        }
        else{
            navigation.classList.remove("shadow-bg");
        }
    }
    window.addEventListener('scroll', addShadow);

    //closing navigation
    $(document).ready(function () {
        $(document).click(function (event) {
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("show");
            if (_opened === true && !clickover.hasClass("navbar-toggler")) {
                $(".navbar-toggler").click();
            }
        });
    });

    var myCarousel = document.querySelector('.carousel')
    var carousel = new bootstrap.Carousel(myCarousel)

    




})
