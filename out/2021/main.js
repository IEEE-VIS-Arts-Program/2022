var menuIsVisible = false;
const BIG_SCREEN_MIN_WIDTH = 1024;
const BIG_SCREEN_MIN_HEIGHT = 650;
const NAV_MAX_HEIGHT = 600;

window.onload = function(){
    resizeNavigation();
    $('#menu-button').click(function(){ toggleElementVisibility('nav_links'); });
};

window.onresize = function(){
    let pageWidth = $('html').width(),
        pageHeight = $('#nav').height();

    if (pageWidth >= BIG_SCREEN_MIN_WIDTH && !menuIsVisible){
        toggleElementVisibility('nav_links');
    }
    else if (pageWidth < BIG_SCREEN_MIN_WIDTH && menuIsVisible){
        toggleElementVisibility('nav_links');
    }


    resizeNavigation();
};

function resizeNavigation(){
    let pageWidth = $('html').width();
    if (pageWidth >= BIG_SCREEN_MIN_WIDTH){
        let navWidth = $('#info-panel').width();
        $('#nav, #nav_links').css({ width: navWidth });
    }
    else {
        $('#nav').css({ width: '100%' });
        $('#nav_links').css({ width: '100%', height: '100%' });
    }
}

function toggleElementVisibility(id){
    let el = $('#' + id);
    let visibility = menuIsVisible ? 'hidden' : 'visible';
    let newHeight = visibility === 'hidden' ? 0 : NAV_MAX_HEIGHT + 'px';
    let newOpacity = visibility === 'hidden' ? 0 : '100%';

    el.css({
        'max-height': newHeight,
        'opacity' : newOpacity,
        'visibility': visibility
    });

    menuIsVisible = !menuIsVisible;
}