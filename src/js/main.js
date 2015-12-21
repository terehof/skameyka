var app = app || {};
app.events = {
    init: function() {
        this.projectsItems();
        this.projectDescrip();
        this.slider();
        this.lightbox();
        this.blogImages();
    },
    projectsItems: function () {
        var $item = $('.project-item');
        if ($item.length > 0) {
            $item.css('height', $item.width());
        }
    },
    projectDescrip: function () {
        var $projDescrip = $('.project-descrip');
        if ($projDescrip.length > 0) {
            $projDescrip.scrollToFixed({
                marginTop: 5,
                limit: function () {
                    return $('footer').offset().top - $(this).height();
                }
            });
        }
    },
    slider: function() {
        var $slider = $('.index-slider');
        if ($slider.length > 0) {
            $('.flexslider').flexslider({
                animation: "slide",
                controlNav: false,
                prevText: '<',
                nextText: '>',
                before: function () {
                    $('.flex-caption').fadeOut(200);
                    $('.flex-direction-nav').fadeOut(100);
                },
                after: function () {
                    $('.flex-caption').fadeIn(200);
                    $('.flex-direction-nav').fadeIn(200);
                }
            });
        }
    },
    lightbox: function () {
        lightbox.option({
            alwaysShowNavOnTouchDevices: true,
            albumLabel: '%1 из %2',
            wrapAround: true
        })
    },
    blogImages: function() {
        var $image = $('.image-small');
        if ($image.length>0) {
            $image.css('height', $image.width()*0.68);
        }
    }
};
var App = (function($, app){
    function init () {
        app.events.init();
    }
    return {
        init: init
    };
})(jQuery, app);
$(function () {
    App.init();
});
$(window).resize(function () {
    app.events.projectsItems();
    app.events.blogImages();
});
$(window).load(function () {
    var $blogWrap = $('.blog-wrapper');
    if ($blogWrap.length > 0 ) {
        $blogWrap.masonry({
            columnWidth: '.blog-item',
            itemSelector: '.blog-item'
        });
    }

    var $image = $('.image-small');
    if ($image.length>0) {
        $image.each(function (i, item) {
            var $innerImg = $(item).find('img');
            console.log($innerImg.height());
            if ($innerImg.width() > $innerImg.height()) {
                $innerImg.addClass('horiz');
            } else {
                $innerImg.addClass('vert');
            }

        })
    }
});