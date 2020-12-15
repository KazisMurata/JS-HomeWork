'use strict';
$(document).ready(function () {

    function sliderCreate(element, params) {

        let sliderCont = element.children('.slides');
        let sliderItem = element.children().children('.slider-item');
        let indent = sliderItem.length;
        sliderCont.css({'width': (indent * 100) + "%"});

        let index = 0;
        let interval = setInterval(function () {
            scrollSliderFunc(-100)
        }, 3000);
        

        let scrollSliderFunc = function (n) {

            index += n;

            if (index <= -(indent) * 100) {
                index = 0;
            } else if (index > 0) {
                index = -(indent - 1) * 100;
            }

            sliderCont.css({'left': `${index}%`})

            if (params.dots) {
                showActivDots(-index / 100);
            }

            function showActivDots(currIndexSlide) {
                let dotsItem = element.children().children('.slider-dots_item');

                for (let i = 0; i < dotsItem.length; i++) {
                    dotsItem[i].className = dotsItem[i].className.replace(" active", "");
                }
                dotsItem[currIndexSlide].className += " active";
            }

        }

        if (params.arrows) {
            let next = document.createElement('a');
            next.innerHTML = '&#9658;';
            next.className = 'slider-arrow next';

            let prev = document.createElement('a');
            prev.innerHTML = '&#9668;';
            prev.className = 'slider-arrow prev';

            element.append(next);
            element.append(prev);

            $(next).on('click', function () {
                scrollSliderFunc(-100);
            });
            $(prev).on('click', function () {
                scrollSliderFunc(100);
            });

        }

        if (params.dots) {

            let dots = document.createElement('div');
            dots.className = 'slider-dots';

            for (let i = 0; i < sliderItem.length; i++) {
                let createDot = document.createElement('span');
                dots.append(createDot);
                createDot.className = 'slider-dots_item';
            }

            element.append(dots);

            let dotsItem = element.children().children('.slider-dots_item');

            let dotScrollFunc = function (n) {
                scrollSliderFunc(index = -(n * 100 / 2));
            }

            $(dotsItem).on('click', function (e) {
                let i = $(this).index();
                dotScrollFunc(i);
            });
        }

        if (params.autoPlay) {
            let sliderButton = $('.slider-arrow');

            $(element).on('mouseenter', function () {
                clearInterval(interval);
            });
            $(element).on('mouseleave', function () {
                interval = setInterval(function () {
                    scrollSliderFunc(-100)
                }, 3000);
            });
        }

        if (params.modal) {

            let modal = $('.modal');
            let modalImage = $('.modal-image');
            let link = $('.modal-link');

            let modalOpenAndClose = function (n) {
                $('.slider').appendTo('.modal');

                $(modal).css({'display': 'flex'});
                $(modalImage).css({'backgroundImage': `url(img/slide${[n + 1]}.jpg`});

                if (modal) {
                    $(link).on('click', function (e) {
                        $(modal).css({'display': 'none'});
                    });
                    interval = clearInterval(interval);
                }
            }

            $(sliderItem).on('click', function (e) {
                let i = $(this).index();
                modalOpenAndClose(i);
            });
        }

    };


    let firstSlider = sliderCreate($('#first'), {
        arrows: true,
        dots: true,
        modal: true,
        autoPlay: true,
    });

    let secondSlider = sliderCreate($('#second'), {
        arrows: true,
        dots: true,
        autoPlay: true,
    });
});






