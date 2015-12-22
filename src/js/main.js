var app = app || {};
app.events = {
    init: function() {
        this.projectsItems();
        this.projectDescrip();
        this.slider();
        this.lightbox();
        this.blogImages();
        this.mobileMenu();
    },
    projectsItems: function () {
        var $item = $('.project-item');
        if ($item.length > 0) {
            $item.css('height', $item.width());
            $item.find('.project-item__preview').css('width', $item.width());
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
                slideshow: false,
                controlNav: false,
                prevText: '<',
                nextText: '>',
                start: function () {
                    var firstTitle = $slider.find('.flex-active-slide').attr('data-slide-title'),
                        $line = $('.slider-line > span');
                    $line.html(firstTitle);
                },
                before: function () {
                    var $activeSlide = $('.flex-active-slide'),
                        $nextSlide = $activeSlide.next(),
                        title = $nextSlide.attr('data-slide-title');
                    $('.slider-line > span').css('opacity', 0);
                },
                after: function () {
                    var $activeSlide = $('.flex-active-slide'),
                        title = $activeSlide.attr('data-slide-title');
                    $('.slider-line > span').remove();
                    $('.slider-line').append('<span class="new" style="opacity: 0;">'+title+'</span>');
                    $('.slider-line > .new').css('opacity', 1);
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
    },
    mobileMenu: function () {
        var $menuBtn = $('.menu-toggle');
        $menuBtn.on('click', function () {
            $(this).toggleClass('active');
            $('.header__nav').toggleClass('active');
        });
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