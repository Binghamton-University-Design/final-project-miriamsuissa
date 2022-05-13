$(document).scroll(function () {
    var y = $(this).scrollTop();

    if (y > ( $(window).height() * 1 ) ) {
        $('#part-1').fadeIn();
        var imageUrl = "images/housepg1.gif";
        $("#part-1").css("background-image", "url(" + imageUrl + ")");

    } else {
        $('#part-1').fadeOut();
    }
    if (y > ( $(window).height() * 1 ) && y < ( $(window).height() * 2 )  ) {
        $('#part-1').find('h2, p').fadeIn();
    } else {
        $('#part-1').find('h2, p').fadeOut();
    }

    if (y > ( $(window).height() * 2 ) ) {
        $('#part-2').fadeIn();
        var imageUrl = "images/housepg2.gif";
        $("#part-2").css("background-image", "url(" + imageUrl + ")");
    } else {
        $('#part-2').fadeOut();
    }
    if (y > ( $(window).height() * 2 ) && y < ( $(window).height() * 3 )  ) {
        $('#part-2').find('h2, p').fadeIn();
    } else {
        $('#part-2').find('h2, p').fadeOut();
    }

    if (y > ( $(window).height() * 3 ) ) {
        $('#part-3').fadeIn();
        var imageUrl = "images/housepg3.gif";
        $("#part-3").css("background-image", "url(" + imageUrl + ")");
    } else {
        $('#part-3').fadeOut();
    }
    if (y > ( $(window).height() * 3 ) && y < ( $(window).height() * 4 )  ) {
        $('#part-3').find('h2, p').fadeIn();
    } else {
        $('#part-3').find('h2, p').fadeOut();
    }

    if (y > ( $(window).height() * 4 ) ) {
        $('#part-4').fadeIn();
        var imageUrl = "images/housepg4.gif";
        $("#part-4").css("background-image", "url(" + imageUrl + ")");
    } else {
        $('#part-4').fadeOut();
    }
    if (y > ( $(window).height() * 4 ) && y < ( $(window).height() * 5 )  ) {
        $('#part-4').find('h2, p').fadeIn();
    } else {
        $('#part-4').find('h2, p').fadeOut();
    }

    if (y > ( $(window).height() * 5 ) ) {
        $('#part-5').fadeIn();
        var imageUrl = "images/housepg5.gif";
        $("#part-5").css("background-image", "url(" + imageUrl + ")");
    } else {
        $('#part-5').fadeOut();
    }
    if (y > ( $(window).height() * 5 ) ) {
        $('#part-5').find('h2, p').fadeIn();
    } else {
        $('#part-5').find('h2, p').fadeOut();
    }



});