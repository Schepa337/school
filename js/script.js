"use strict";
jQuery(document).ready(function($) {
    $('#main-carousel').flickity({
        arrowShape: {
            x0: 20,
            x1: 60, y1: 50,
            x2: 60, y2: 45,
            x3: 25
        },
        cellAlign: 'left',
        contain: true,
        loop: false,
        center: true,
        freeScroll: true,
        wrapAround: true,
        autoPlay: true,
        pauseAutoPlayOnHover: true,
        freeScroll: true,
        freeScrollFriction: 0.03,
        pageDots: false,
        items: 5
    });

    let viewport = $(".flickity-viewport");
    let buttons = $(".flickity-prev-next-button");

    viewport.after('<div class="flickity-buttons-wrapper"></div>');
    let wrapper = $(".flickity-buttons-wrapper");

    buttons.appendTo(wrapper);

});

function checkParams() {
    var name = $('#text').val();
    var email = $('#name').val();
    var phone = $('#tel').val();

    if (name.length != 0 && name.length >= 6 && tel.length >= 10) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
}