$(document).scroll(function () {
    var y = $(this).scrollTop();

    if (y > ( $(window).height() * 1 ) ) {
        $('#part-1').fadeIn();
    } else {
        $('#part-1').fadeOut();
    }

    if (y > ( $(window).height() * 2 ) ) {
        $('#part-2').fadeIn();
    } else {
        $('#part-2').fadeOut();
    }

    if (y > ( $(window).height() * 3 ) ) {
        $('#part-3').fadeIn();
    } else {
        $('#part-3').fadeOut();
    }

    if (y > ( $(window).height() * 4 ) ) {
        $('#part-4').fadeIn();
    } else {
        $('#part-4').fadeOut();
    }

    if (y > ( $(window).height() * 5 ) ) {
        $('#part-5').fadeIn();
    } else {
        $('#part-5').fadeOut();
    }


});