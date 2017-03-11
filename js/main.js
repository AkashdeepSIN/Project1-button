$('section').click(function() {
    if ($('h1').hasClass('on')) {
        $('h1').removeClass('on');
        $('#light-bulb2').css({'opacity': '0'});
    } else {
        $('h1').addClass('on');
        $('#light-bulb2').css({'opacity': '1'});
    }
});
